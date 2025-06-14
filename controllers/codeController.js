const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
const Code = require('../models/Code');
const { formatCode } = require('../utils/formatCode');
const { getCodeTemplate } = require('../utils/templates');

const languageMap = {
  c: 53, // C (GCC 9.2.0)
  cpp: 54, // C++ (G++ 9.2.0)
  java: 62, // Java (OpenJDK 13.0.1)
  python: 71, // Python (3.8.1)
  javascript: 63, // JavaScript (Node.js 12.14.0)
  php: 68 // PHP (7.4.1)
};

exports.executeCode = async (req, res, next) => {
  try {
    const { code, language } = req.body;
    console.log('Received code:', { code, language });

    if (language === 'python') {
      // Use local backend for Python to support Matplotlib
      const backendResponse = await axios.post('http://localhost:5000/api/code/execute', {
        code,
        language,
      });
      console.log('Backend response:', backendResponse.data);
      return res.status(200).json(backendResponse.data);
    }

    // Use Judge0 for other languages
    const languageIds = { javascript: 63, cpp: 54, java: 62, c: 50, php: 68 };
    const languageId = languageIds[language] || 63;
    console.log('Language ID:', languageId);

    const JUDGE0_API_URL = process.env.JUDGE0_API_URL;
    const JUDGE0_API_KEY = process.env.JUDGE0_API_KEY;
    console.log('Judge0 URL:', JUDGE0_API_URL);

    const response = await axios.post(
      `${JUDGE0_API_URL}/submissions?base64_encoded=false&wait=true`,
      {
        source_code: code,
        language_id: languageId,
      },
      {
        headers: {
          'X-Auth-Token': JUDGE0_API_KEY || '',
        },
      }
    );

    console.log('Judge0 response:', response.data);
    const { stdout, stderr, compile_output, message, status } = response.data;
    let output = stdout || stderr || compile_output || message || 'No output';
    if (stderr || compile_output || message || (status && status.description !== 'Accepted')) {
      output = `Error: ${output} (Status: ${status?.description || 'Unknown'})`;
    }
    console.log('Processed output:', output);

    res.status(200).json({ output });
  } catch (err) {
    console.error('Error in executeCode:', err.message);
    next(err);
  }
};

// Other functions remain unchanged
exports.saveCode = async (req, res, next) => {
  try {
    const { code, language } = req.body;
    const linkId = uuidv4();
    const formattedCode = await formatCode(code, language);

    const newCode = new Code({
      code: formattedCode,
      language,
      linkId,
    });
    await newCode.save();

    res.status(201).json({ linkId });
  } catch (err) {
    next(err);
  }
};

exports.getCode = async (req, res, next) => {
  try {
    const code = await Code.findOne({ linkId: req.params.id });
    if (!code) {
      return res.status(404).json({ error: 'Code not found' });
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