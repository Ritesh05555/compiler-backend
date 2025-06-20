// const axios = require('axios');
// const { v4: uuidv4 } = require('uuid');
// const Code = require('../models/Code');
// const { formatCode } = require('../utils/formatCode');
// const { getCodeTemplate } = require('../utils/templates');

// const languageMap = {
//   c: 53,
//   cpp: 54,
//   java: 62,
//   python: 71,
//   javascript: 63,
//   php: 68
// };

// exports.executeCode = async (req, res, next) => {
//   try {
//     const { code, language } = req.body;
//     console.log('Received code:', { code, language });

//     if (language === 'python') {
//       const backendResponse = await axios.post('http://localhost:5000/api/code/execute', {
//         code,
//         language,
//       });
//       console.log('Backend response:', backendResponse.data);
//       return res.status(200).json(backendResponse.data);
//     }

//     const languageIds = { javascript: 63, cpp: 54, java: 62, c: 50, php: 68 };
//     const languageId = languageIds[language] || 63;
//     console.log('Language ID:', languageId);

//     const JUDGE0_API_URL = process.env.JUDGE0_API_URL;
//     const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY;
//     console.log('Judge0 URL:', JUDGE0_API_URL);

//     const response = await axios.post(
//       `${JUDGE0_API_URL}/submissions?base64_encoded=false&wait=true`,
//       {
//         source_code: code,
//         language_id: languageId,
//       },
//       {
//         headers: {
//           'X-Auth-Token': JUDGE0_API_KEY || '',
//         },
//       }
//     );

//     const { stdout, stderr, compile_output, message, status } = response.data;
//     let output = stdout || stderr || compile_output || message || 'No output';
//     if (stderr || compile_output || message || (status && status.description !== 'Accepted')) {
//       output = `Error: ${output} (Status: ${status?.description || 'Unknown'})`;
//     }

//     res.status(200).json({ output });
//   } catch (err) {
//     console.error('Error in executeCode:', err.message);
//     next(err);
//   }
// };

// exports.saveCode = async (req, res, next) => {
//   try {
//     const { code, language } = req.body;
//     const linkId = uuidv4();
//     const formattedCode = await formatCode(code, language);

//     const newCode = new Code({
//       code: formattedCode,
//       language,
//       linkId,
//       expiresAt: new Date(Date.now() + 60 * 60 * 1000) // 1 hour
//     });
//     await newCode.save();

//     res.status(201).json({ link: `https://compiler-frontend-gxeb.onrender.com/${language}/${linkId}` });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.getCode = async (req, res, next) => {
//   try {
//     const code = await Code.findOne({ linkId: req.params.id });
//     if (!code) {
//       return res.status(404).json({ error: 'Code not found' });
//     }
//     const now = new Date();
//     if (code.expiresAt && code.expiresAt < now) {
//       return res.status(410).json({ error: 'Link expired' });
//     }
//     res.status(200).json({ code: code.code, language: code.language });
//   } catch (err) {
//     next(err);
//   }
// };

// exports.getTemplate = async (req, res, next) => {
//   try {
//     const { language } = req.params;
//     const template = getCodeTemplate(language);
//     if (!template) {
//       return res.status(400).json({ error: 'Invalid language' });
//     }
//     return res.status(200).json({ template });
//   } catch (err) {
//     next(err);
//   }
// };

const { exec } = require('child_process');
const util = require('util');
const { v4: uuidv4 } = require('uuid');
const SharedCode = require('../models/SharedCode');
const { formatCode } = require('../utils/formatCode');
const { getCodeTemplate } = require('../utils/templates');
const fs = require('fs/promises');
const path = require('path');

const execPromise = util.promisify(exec);

const languageMap = {
  c: 53,
  cpp: 54,
  java: 62,
  python: 71,
  javascript: 63,
  php: 68
};

exports.executeCode = async (req, res, next) => {
  try {
    const { code, language } = req.body;
    console.log('Received code:', { code, language });

    if (!code || !language) return res.status(400).json({ error: 'Code and language are required' });
    if (!['python', 'javascript', 'cpp', 'c', 'java'].includes(language)) return res.status(400).json({ error: 'Unsupported language' });

    const baseFileName = `Code${Date.now()}`;
    let finalCode = code;
    const tempDir = path.join(__dirname, '..', 'temp');
    const filePath = path.join(tempDir, `${baseFileName}.${language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'java' ? 'java' : language}`);
    const imagesDir = path.join(__dirname, '..', 'temp', 'images');
    const imageFileName = `${baseFileName}.png`;
    const imageFile = path.join(imagesDir, imageFileName);

    try {
      if (language === 'python') {
        const pythonCmd = process.platform === 'win32' ? 'python' : 'python3';

        if (/plt\.|matplotlib|pyplot/.test(code)) {
          const safeImagePath = imageFile.replace(/\\/g, '/');
          finalCode = `import os\nimport matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nimport pandas as pd\n${code}\nplt.savefig('${safeImagePath}')\nprint("Image saved to ${safeImagePath}")`;
        }

        await fs.writeFile(filePath, finalCode);

        const { stdout, stderr } = await execPromise(`${pythonCmd} -X utf8 "${filePath}"`, { timeout: 20000 });
        const imageExists = await fs.access(imageFile).then(() => true).catch(() => false);
        const response = { output: stdout || '', error: stderr || '' };
        if (imageExists) response.imageUrl = `/images/${imageFileName}`;
        return res.json(response);
      }

      if (language === 'javascript') {
        finalCode = `(function() { try { ${code} } catch (e) { console.error(e.message); console.error(e.stack); }})();`;
        await fs.writeFile(filePath, finalCode);
        const { stdout, stderr } = await execPromise(`node "${filePath}"`, { timeout: 8000 });
        return res.json({ output: stdout || '', error: stderr || '' });
      }

      if (language === 'cpp' || language === 'c') {
        const exeFile = path.join(tempDir, `${baseFileName}.out`);
        await fs.writeFile(filePath, code);
        const compiler = language === 'cpp' ? 'g++' : 'gcc';
        await execPromise(`${compiler} "${filePath}" -o "${exeFile}"`, { timeout: 10000 });
        const { stdout, stderr } = await execPromise(`"${exeFile}"`, { timeout: 8000 });
        return res.json({ output: stdout || '', error: stderr || '' });
      }

      if (language === 'java') {
        const classNameMatch = code.match(/public\s+class\s+(\w+)/);
        const className = classNameMatch ? classNameMatch[1] : baseFileName;
        const javaFilePath = path.join(tempDir, `${className}.java`);
        const correctedCode = classNameMatch ? code : `public class ${className} { public static void main(String[] args) { ${code} } }`;

        await fs.writeFile(javaFilePath, correctedCode);
        try {
          await execPromise(`javac "${javaFilePath}"`, { timeout: 20000 });
        } catch (compErr) {
          return res.status(400).json({ error: 'Compilation failed: ' + (compErr.stderr || compErr.message) });
        }

        try {
          const { stdout, stderr } = await execPromise(`java -cp "${tempDir}" ${className}`, { timeout: 20000 });
          return res.json({ output: stdout || '', error: stderr || '' });
        } catch (execErr) {
          return res.status(400).json({ error: 'Execution failed: ' + (execErr.stderr || execErr.message) });
        } finally {
          await fs.unlink(javaFilePath).catch(() => {});
          await fs.unlink(path.join(tempDir, `${className}.class`)).catch(() => {});
        }
      }
    } catch (err) {
      return res.status(500).json({ error: `Server error: ${err.message}` });
    }
  } catch (err) {
    console.error('Error in executeCode:', err.message);
    next(err);
  }
};

exports.saveCode = async (req, res, next) => {
  try {
    const { code, language } = req.body;
    const token = uuidv4();
    const formattedCode = await formatCode(code, language);

    const newCode = new SharedCode({
      code: formattedCode,
      language,
      token,
    });
    await newCode.save();

    res.status(201).json({ token }); // Return only token for frontend to construct link
  } catch (err) {
    next(err);
  }
};

exports.getCode = async (req, res, next) => {
  try {
    const code = await SharedCode.findOne({ token: req.params.id });
    if (!code) {
      return res.status(404).json({ error: 'Code not found' });
    }
    const now = new Date();
    if (code.createdAt && new Date(code.createdAt.getTime() + 3600 * 1000) < now) { // 1 hour expiry
      return res.status(410).json({ error: 'Link expired' });
    }
    res.status(200).json({ code: code.code, language: code.language });
  } catch (err) {
    next(err);
  }
};

exports.getTemplate = async (req, res, next) => {
  try {
    const { language } = req.params;
    const template = getCodeTemplate(language);
    if (!template) {
      return res.status(400).json({ error: 'Invalid language' });
    }
    return res.status(200).json({ template });
  } catch (err) {
    next(err);
  }
};