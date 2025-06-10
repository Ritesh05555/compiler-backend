// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// require('dotenv').config(); // Add this line to load .env

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // Routes
// app.use('/api/code', codeRoutes);

// // Error Handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/////////////////////////////////////////////////////////////////////////////////////////

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // Create a temporary directory for code execution
// const tempDir = path.join(__dirname, 'temp');
// if (!fs.existsSync(tempDir)) {
//   fs.mkdirSync(tempDir);
// }

// // Code Execution Endpoint
// app.post('/api/code/execute', async (req, res, next) => {
//   const { code, language } = req.body;

//   // Validate request
//   if (!code || !language) {
//     return res.status(400).json({ error: 'Code and language are required' });
//   }

//   // Support only Python for simplicity
//   if (language !== 'python') {
//     return res.status(400).json({ error: 'Only Python is supported' });
//   }

//   try {
//     // Create a temporary file to store the code
//     const fileName = `code-${Date.now()}.py`;
//     const filePath = path.join(tempDir, fileName);
//     fs.writeFileSync(filePath, code);

//     // Execute the code using Python with a timeout
//     exec(`python "${filePath}"`, { timeout: 5000 }, (error, stdout, stderr) => {
//       // Clean up the temporary file
//       if (fs.existsSync(filePath)) {
//         fs.unlinkSync(filePath);
//       }

//       if (error) {
//         return next({ status: 400, message: 'Execution failed', details: stderr });
//       }
//       if (stderr) {
//         return next({ status: 400, message: 'Execution error', details: stderr });
//       }
//       res.json({ output: stdout });
//     });
//   } catch (error) {
//     next({ status: 500, message: 'Server error', details: error.message });
//   }
// });

// // Routes (other code-related routes can still use codeRoutes)
// app.use('/api/code', codeRoutes);

// // Error Handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

///////////////////////////////////////////////////////////////////////////////////////////////////

////perfect for python
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // Create a temporary directory for code execution
// const tempDir = path.join(__dirname, 'temp');
// if (!fs.existsSync(tempDir)) {
//   fs.mkdirSync(tempDir);
// }

// // Code Execution Endpoint
// app.post('/api/code/execute', async (req, res, next) => {
//   const { code, language } = req.body;

//   // Validate request
//   if (!code || !language) {
//     return res.status(400).send('Code and language are required');
//   }

//   // Support only Python for simplicity
//   if (language !== 'python') {
//     return res.status(400).send('Only Python is supported');
//   }

//   try {
//     // Create a temporary file to store the code
//     const fileName = `code-${Date.now()}.py`;
//     const filePath = path.join(tempDir, fileName);
//     fs.writeFileSync(filePath, code);

//     // Execute the code using Python with a timeout
//     exec(`python "${filePath}"`, { timeout: 5000 }, (error, stdout, stderr) => {
//       // Clean up the temporary file
//       if (fs.existsSync(filePath)) {
//         fs.unlinkSync(filePath);
//       }

//       if (error) {
//         return res.status(400).send(`Execution failed: ${stderr}`);
//       }
//       if (stderr) {
//         return res.status(400).send(`Execution error: ${stderr}`);
//       }

//       // Clean the output: Replace \r\n with \n and remove trailing newline
//       const cleanedOutput = stdout.replace(/\r\n/g, '\n').trimEnd();

//       // Send the output as plain text
//       res.set('Content-Type', 'text/plain');
//       res.send(cleanedOutput);
//     });
//   } catch (error) {
//     res.status(500).send(`Server error: ${error.message}`);
//   }
// });

// // Routes (other code-related routes can still use codeRoutes)
// app.use('/api/code', codeRoutes);

// // Error Handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
///////////////////////////////////////////////////////////////////////////////////

// added javascript

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config();

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // Create a temporary directory for code execution
// const tempDir = path.join(__dirname, 'temp');
// if (!fs.existsSync(tempDir)) {
//   fs.mkdirSync(tempDir);
// }

// // Code Execution Endpoint
// app.post('/api/code/execute', async (req, res, next) => {
//   const { code, language } = req.body;

//   // Validate request
//   if (!code || !language) {
//     return res.status(400).send('Code and language are required');
//   }

//   // Support Python and JavaScript
//   if (!['python', 'javascript'].includes(language)) {
//     return res.status(400).send('Only Python and JavaScript are supported');
//   }

//   try {
//     // Determine file extension and command based on language
//     const fileExtension = language === 'python' ? 'py' : 'js';
//     const command = language === 'python' ? 'python' : 'node';

//     // Create a temporary file to store the code
//     const fileName = `code-${Date.now()}.${fileExtension}`;
//     const filePath = path.join(tempDir, fileName);
//     fs.writeFileSync(filePath, code);

//     // Execute the code with a timeout
//     exec(`${command} "${filePath}"`, { timeout: 5000 }, (error, stdout, stderr) => {
//       // Clean up the temporary file
//       if (fs.existsSync(filePath)) {
//         fs.unlinkSync(filePath);
//       }

//       if (error) {
//         return res.status(400).send(`Execution failed: ${stderr}`);
//       }
//       if (stderr) {
//         return res.status(400).send(`Execution error: ${stderr}`);
//       }

//       // Clean the output: Replace \r\n with \n and remove trailing newline
//       const cleanedOutput = stdout.replace(/\r\n/g, '\n').trimEnd();

//       // Send the output as plain text
//       res.set('Content-Type', 'text/plain');
//       res.send(cleanedOutput);
//     });
//   } catch (error) {
//     res.status(500).send(`Server error: ${error.message}`);
//   }
// });

// // Routes (other code-related routes can still use codeRoutes)
// app.use('/api/code', codeRoutes);

// // Error Handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

//////////////////////////////////////////////////////////////////
// added c++

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config();

// // Ensure MinGW is in PATH for C++
// process.env.PATH += ';C:\\MinGW\\bin';

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // Create a temporary directory for code execution
// const tempDir = path.join(__dirname, 'temp');
// if (!fs.existsSync(tempDir)) {
//   fs.mkdirSync(tempDir);
// }

// // Code Execution Endpoint
// app.post('/api/code/execute', async (req, res, next) => {
//   const { code, language } = req.body;

//   // Validate request
//   if (!code || !language) {
//     return res.status(400).send('Code and language are required');
//   }

//   // Support Python, JavaScript, and C++
//   if (!['python', 'javascript', 'cpp'].includes(language)) {
//     return res.status(400).send('Only Python, JavaScript, and C++ are supported');
//   }

//   try {
//     // Determine file extension and base command based on language
//     let fileExtension, baseCommand, execCommand;
//     const baseFileName = `code-${Date.now()}`;
//     const sourceFile = path.join(tempDir, `${baseFileName}.${fileExtension}`);

//     if (language === 'python') {
//       fileExtension = 'py';
//       baseCommand = `python "${path.join(tempDir, `${baseFileName}.py`)}"`;
//       execCommand = baseCommand;
//     } else if (language === 'javascript') {
//       fileExtension = 'js';
//       baseCommand = `node "${path.join(tempDir, `${baseFileName}.js`)}"`;
//       execCommand = baseCommand;
//     } else if (language === 'cpp') {
//       fileExtension = 'cpp';
//       const exeFile = path.join(tempDir, baseFileName + (process.platform === 'win32' ? '.exe' : ''));
//       baseCommand = `g++ "${path.join(tempDir, `${baseFileName}.cpp`)}" -o "${exeFile}"`;
//       execCommand = `${baseCommand} && "${exeFile}"`;
//     }

//     // Create a temporary file to store the code
//     const fileName = `${baseFileName}.${fileExtension}`;
//     const filePath = path.join(tempDir, fileName);
//     fs.writeFileSync(filePath, code);

//     // Execute the code with a timeout
//     exec(execCommand, { timeout: 5000 }, (error, stdout, stderr) => {
//       // Clean up the temporary files
//       if (fs.existsSync(filePath)) {
//         fs.unlinkSync(filePath);
//       }
//       if (language === 'cpp') {
//         const exeFile = path.join(tempDir, baseFileName + (process.platform === 'win32' ? '.exe' : ''));
//         if (fs.existsSync(exeFile)) {
//           fs.unlinkSync(exeFile);
//         }
//       }

//       if (error) {
//         console.error(`Execution error for ${language}:`, error, stderr); // Debug log
//         return res.status(400).send(`Execution failed: ${stderr || error.message}`);
//       }
//       if (stderr) {
//         console.error(`Stderr for ${language}:`, stderr); // Debug log
//         return res.status(400).send(`Execution error: ${stderr}`);
//       }

//       // Clean the output: Replace \r\n with \n and remove trailing newline
//       const cleanedOutput = stdout.replace(/\r\n/g, '\n').trimEnd();

//       // Send the output as plain text
//       res.set('Content-Type', 'text/plain');
//       res.send(cleanedOutput);
//     });
//   } catch (error) {
//     console.error(`Server error for ${language}:`, error); // Debug log
//     res.status(500).send(`Server error: ${error.message}`);
//   }
// });

// // Routes (other code-related routes can still use codeRoutes)
// app.use('/api/code', codeRoutes);

// // Error Handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

/////////////////////////////////////////////////////////////////
// added c 

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const fs = require('fs');
// const path = require('path');
// require('dotenv').config();

// // Ensure MinGW is in PATH for C and C++
// process.env.PATH += ';C:\\MinGW\\bin';

// const app = express();

// // Middleware
// app.use(cors());
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // Create a temporary directory for code execution
// const tempDir = path.join(__dirname, 'temp');
// if (!fs.existsSync(tempDir)) {
//   fs.mkdirSync(tempDir);
// }

// // Code Execution Endpoint
// app.post('/api/code/execute', async (req, res, next) => {
//   const { code, language } = req.body;

//   // Validate request
//   if (!code || !language) {
//     return res.status(400).send('Code and language are required');
//   }

//   // Support Python, JavaScript, C++, and C
//   if (!['python', 'javascript', 'cpp', 'c'].includes(language)) {
//     return res.status(400).send('Only Python, JavaScript, C++, and C are supported');
//   }

//   try {
//     // Determine file extension and base command based on language
//     let fileExtension, baseCommand, execCommand;
//     const baseFileName = `code-${Date.now()}`;
//     const sourceFile = path.join(tempDir, `${baseFileName}.${fileExtension}`);

//     if (language === 'python') {
//       fileExtension = 'py';
//       baseCommand = `python "${path.join(tempDir, `${baseFileName}.py`)}"`;
//       execCommand = baseCommand;
//     } else if (language === 'javascript') {
//       fileExtension = 'js';
//       baseCommand = `node "${path.join(tempDir, `${baseFileName}.js`)}"`;
//       execCommand = baseCommand;
//     } else if (language === 'cpp') {
//       fileExtension = 'cpp';
//       const exeFile = path.join(tempDir, baseFileName + (process.platform === 'win32' ? '.exe' : ''));
//       baseCommand = `g++ "${path.join(tempDir, `${baseFileName}.cpp`)}" -o "${exeFile}"`;
//       execCommand = `${baseCommand} && "${exeFile}"`;
//     } else if (language === 'c') {
//       fileExtension = 'c';
//       const exeFile = path.join(tempDir, baseFileName + (process.platform === 'win32' ? '.exe' : ''));
//       baseCommand = `g++ "${path.join(tempDir, `${baseFileName}.c`)}" -o "${exeFile}"`;
//       execCommand = `${baseCommand} && "${exeFile}"`;
//     }

//     // Create a temporary file to store the code
//     const fileName = `${baseFileName}.${fileExtension}`;
//     const filePath = path.join(tempDir, fileName);
//     fs.writeFileSync(filePath, code);

//     // Execute the code with a timeout
//     exec(execCommand, { timeout: 5000 }, (error, stdout, stderr) => {
//       // Clean up the temporary files
//       if (fs.existsSync(filePath)) {
//         fs.unlinkSync(filePath);
//       }
//       if (language === 'cpp' || language === 'c') {
//         const exeFile = path.join(tempDir, baseFileName + (process.platform === 'win32' ? '.exe' : ''));
//         if (fs.existsSync(exeFile)) {
//           fs.unlinkSync(exeFile);
//         }
//       }

//       if (error) {
//         console.error(`Execution error for ${language}:`, error, stderr); // Debug log
//         return res.status(400).send(`Execution failed: ${stderr || error.message}`);
//       }
//       if (stderr) {
//         console.error(`Stderr for ${language}:`, stderr); // Debug log
//         return res.status(400).send(`Execution error: ${stderr}`);
//       }

//       // Clean the output: Replace \r\n with \n and remove trailing newline
//       const cleanedOutput = stdout.replace(/\r\n/g, '\n').trimEnd();

//       // Send the output as plain text
//       res.set('Content-Type', 'text/plain');
//       res.send(cleanedOutput);
//     });
//   } catch (error) {
//     console.error(`Server error for ${language}:`, error); // Debug log
//     res.status(500).send(`Server error: ${error.message}`);
//   }
// });

// // Routes (other code-related routes can still use codeRoutes)
// app.use('/api/code', codeRoutes);

// // Error Handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const codeRoutes = require('./routes/code');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Ensure MinGW is in PATH for C and C++
process.env.PATH += ';C:\\MinGW\\bin';
// Ensure JDK 24 is in PATH for Java
process.env.PATH += ';C:\\Program Files\\Java\\jdk-24\\bin';

const app = express();

// Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Create a temporary directory for code execution
const tempDir = path.join(__dirname, 'temp');
if (!fs.existsSync(tempDir)) {
  fs.mkdirSync(tempDir);
}

// Code Execution Endpoint
app.post('/api/code/execute', async (req, res, next) => {
  const { code, language } = req.body;

  if (!code || !language) {
    return res.status(400).send('Code and language are required');
  }

  if (!['python', 'javascript', 'cpp', 'c', 'java'].includes(language)) {
    return res.status(400).send('Only Python, JavaScript, C++, C, and Java are supported');
  }

  try {
    let fileExtension, baseCommand, execCommand;
    const baseFileName = `Code${Date.now()}`;
    let finalCode = code;

    if (language === 'python') {
      fileExtension = 'py';
      baseCommand = `python "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}"`;
      execCommand = baseCommand;
    } else if (language === 'javascript') {
      fileExtension = 'js';
      baseCommand = `node "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}"`;
      execCommand = baseCommand;
    } else if (language === 'cpp') {
      fileExtension = 'cpp';
      const exeFile = path.join(tempDir, `${baseFileName}.exe`);
      baseCommand = `g++ "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}" -o "${exeFile}"`;
      execCommand = `${baseCommand} && "${exeFile}"`;
    } else if (language === 'c') {
      fileExtension = 'c';
      const exeFile = path.join(tempDir, `${baseFileName}.exe`);
      baseCommand = `g++ "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}" -o "${exeFile}"`;
      execCommand = `${baseCommand} && "${exeFile}"`;
    } else if (language === 'java') {
      fileExtension = 'java';
      finalCode = code.replace(/public\s+class\s+\w+/g, `public class ${baseFileName}`);
      const javaFilePath = path.join(tempDir, `${baseFileName}.${fileExtension}`);
      baseCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\javac" "${javaFilePath}"`;
      execCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\java" -cp "${tempDir}" ${baseFileName}`;
    }

    const filePath = path.join(tempDir, `${baseFileName}.${fileExtension}`);
    fs.writeFileSync(filePath, finalCode);

    if (language === 'java') {
      exec(baseCommand, (compileError, compileStdout, compileStderr) => {
        if (compileError || compileStderr) {
          if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
          return res.status(400).send(`Compilation failed: ${compileStderr || compileError.message}`);
        }

        exec(execCommand, { timeout: 5000 }, (runError, stdout, stderr) => {
          if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
          const classFile = path.join(tempDir, `${baseFileName}.class`);
          if (fs.existsSync(classFile)) fs.unlinkSync(classFile);

          if (runError) {
            return res.status(400).send(`Execution failed: ${stderr || runError.message}`);
          }
          if (stderr) {
            return res.status(400).send(`Execution error: ${stderr}`);
          }

          res.set('Content-Type', 'text/plain');
          res.send(stdout.trimEnd());
        });
      });
    } else {
      exec(execCommand, { timeout: 5000 }, (error, stdout, stderr) => {
        if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        if (language === 'cpp' || language === 'c') {
          const exeFile = path.join(tempDir, `${baseFileName}.exe`);
          if (fs.existsSync(exeFile)) fs.unlinkSync(exeFile);
        }

        if (error) return res.status(400).send(`Execution failed: ${stderr || error.message}`);
        if (stderr) return res.status(400).send(`Execution error: ${stderr}`);

        res.set('Content-Type', 'text/plain');
        res.send(stdout.trimEnd());
      });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send(`Server error: ${err.message}`);
  }
});

// Routes (other code-related routes can still use codeRoutes)
app.use('/api/code', codeRoutes);

// Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
