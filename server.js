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
//////////////////////////////////////////////////////////////
//////////////////////

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
// // Ensure JDK 24 is in PATH for Java
// process.env.PATH += ';C:\\Program Files\\Java\\jdk-24\\bin';

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));
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

//   if (!code || !language) {
//     return res.status(400).send('Code and language are required');
//   }

//   if (!['python', 'javascript', 'cpp', 'c', 'java'].includes(language)) {
//     return res.status(400).send('Only Python, JavaScript, C++, C, and Java are supported');
//   }

//   try {
//     let fileExtension, baseCommand, execCommand;
//     const baseFileName = `Code${Date.now()}`;
//     let finalCode = code;

//     if (language === 'python') {
//       fileExtension = 'py';
//       baseCommand = `python "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}"`;
//       execCommand = baseCommand;
//     } else if (language === 'javascript') {
//       fileExtension = 'js';
//       baseCommand = `node "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}"`;
//       execCommand = baseCommand;
//     } else if (language === 'cpp') {
//       fileExtension = 'cpp';
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       baseCommand = `g++ "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}" -o "${exeFile}"`;
//       execCommand = `${baseCommand} && "${exeFile}"`;
//     } else if (language === 'c') {
//       fileExtension = 'c';
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       baseCommand = `g++ "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}" -o "${exeFile}"`;
//       execCommand = `${baseCommand} && "${exeFile}"`;
//     } else if (language === 'java') {
//       fileExtension = 'java';
//       finalCode = code.replace(/public\s+class\s+\w+/g, `public class ${baseFileName}`);
//       const javaFilePath = path.join(tempDir, `${baseFileName}.${fileExtension}`);
//       baseCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\javac" "${javaFilePath}"`;
//       execCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\java" -cp "${tempDir}" ${baseFileName}`;
//     }

//     const filePath = path.join(tempDir, `${baseFileName}.${fileExtension}`);
//     fs.writeFileSync(filePath, finalCode);

//     if (language === 'java') {
//       exec(baseCommand, (compileError, compileStdout, compileStderr) => {
//         if (compileError || compileStderr) {
//           if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
//           return res.status(400).send(`Compilation failed: ${compileStderr || compileError.message}`);
//         }

//         exec(execCommand, { timeout: 5000 }, (runError, stdout, stderr) => {
//           if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
//           const classFile = path.join(tempDir, `${baseFileName}.class`);
//           if (fs.existsSync(classFile)) fs.unlinkSync(classFile);

//           if (runError) {
//             return res.status(400).send(`Execution failed: ${stderr || runError.message}`);
//           }
//           if (stderr) {
//             return res.status(400).send(`Execution error: ${stderr}`);
//           }

//           res.set('Content-Type', 'text/plain');
//           res.send(stdout.trimEnd());
//         });
//       });
//     } else {
//       exec(execCommand, { timeout: 5000 }, (error, stdout, stderr) => {
//         if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
//         if (language === 'cpp' || language === 'c') {
//           const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//           if (fs.existsSync(exeFile)) fs.unlinkSync(exeFile);
//         }

//         if (error) return res.status(400).send(`Execution failed: ${stderr || error.message}`);
//         if (stderr) return res.status(400).send(`Execution error: ${stderr}`);

//         res.set('Content-Type', 'text/plain');
//         res.send(stdout.trimEnd());
//       });
//     }
//   } catch (err) {
//     console.error(err);
//     res.status(500).send(`Server error: ${err.message}`);
//   }
// });

// // Routes (other code-related routes can still use codeRoutes)
// app.use('/api/code', codeRoutes);

// // Error Handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

///////// install js,python,c

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const util = require('util');
// const fs = require('fs/promises');
// const path = require('path');
// require('dotenv').config();

// // Promisify exec for async/await usage
// const execPromise = util.promisify(exec);

// // Ensure MinGW is in PATH for C and C++
// process.env.PATH += ';C:\\MinGW\\bin';
// // Ensure JDK 24 is in PATH for Java
// process.env.PATH += ';C:\\Program Files\\Java\\jdk-24\\bin';

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // Create a temporary directory for code execution
// const tempDir = path.join(__dirname, 'temp');
// fs.mkdir(tempDir, { recursive: true }).catch((err) => {
//   console.error('Failed to create temp directory:', err);
// });

// // Code Execution Endpoint
// app.post('/api/code/execute', async (req, res, next) => {
//   const { code, language } = req.body;

//   if (!code || !language) {
//     return res.status(400).json({ error: 'Code and language are required' });
//   }

//   if (!['python', 'javascript', 'cpp', 'c', 'java'].includes(language)) {
//     return res.status(400).json({ error: 'Only Python, JavaScript, C++, C, and Java are supported' });
//   }

//   let fileExtension, baseCommand, runCommand;
//   const baseFileName = `Code${Date.now()}`;
//   let finalCode = code;

//   try {
//     // Define file extension and commands based on language
//     if (language === 'python') {
//       fileExtension = 'py';
//       baseCommand = `python "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}"`;
//       runCommand = baseCommand;
//     } else if (language === 'javascript') {
//       fileExtension = 'js';
//       baseCommand = `node "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}"`;
//       runCommand = baseCommand;
//     } else if (language === 'cpp') {
//       fileExtension = 'cpp';
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       baseCommand = `g++ "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}" -o "${exeFile}"`;
//       runCommand = `"${exeFile}"`;
//     } else if (language === 'c') {
//       fileExtension = 'c';
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       baseCommand = `gcc "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}" -o "${exeFile}"`;
//       runCommand = `"${exeFile}"`;
//     } else if (language === 'java') {
//       fileExtension = 'java';
//       finalCode = code.replace(/public\s+class\s+\w+/g, `public class ${baseFileName}`);
//       const javaFilePath = path.join(tempDir, `${baseFileName}.${fileExtension}`);
//       baseCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\javac" "${javaFilePath}"`;
//       runCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\java" -cp "${tempDir}" ${baseFileName}`;
//     }

//     const filePath = path.join(tempDir, `${baseFileName}.${fileExtension}`);
//     await fs.writeFile(filePath, finalCode);

//     if (language === 'cpp' || language === 'c') {
//       // Compile the code
//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout || stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//         const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//         await fs.unlink(exeFile).catch(() => {});
//       }
//     } else if (language === 'java') {
//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout || stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//         const classFile = path.join(tempDir, `${baseFileName}.class`);
//         await fs.unlink(classFile).catch(() => {});
//       }
//     } else {
//       // Interpreted languages (Python, JavaScript)
//       try {
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout, error: stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//       }
//     }
//   } catch (err) {
//     console.error('Server error:', err);
//     return res.status(500).json({ error: `Server error: ${err.message}` });
//   }
// });

// // Routes (other code-related routes can still use codeRoutes)
// app.use('/api/code', codeRoutes);

// // Error Handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const util = require('util');
// const fs = require('fs/promises');
// const path = require('path');
// require('dotenv').config();

// const execPromise = util.promisify(exec);

// // PATH Setup
// process.env.PATH += ';C:\\MinGW\\bin';
// process.env.PATH += ';C:\\Program Files\\Java\\jdk-24\\bin';

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // Temp Directory
// const tempDir = path.join(__dirname, 'temp');
// fs.mkdir(tempDir, { recursive: true }).catch((err) => {
//   console.error('Failed to create temp directory:', err);
// });

// app.post('/api/code/execute', async (req, res, next) => {
//   const { code, language } = req.body;

//   if (!code || !language) {
//     return res.status(400).json({ error: 'Code and language are required' });
//   }

//   if (!['python', 'javascript', 'cpp', 'c', 'java'].includes(language)) {
//     return res.status(400).json({ error: 'Only Python, JavaScript, C++, C, and Java are supported' });
//   }

//   let fileExtension, baseCommand, runCommand;
//   const baseFileName = `Code${Date.now()}`;
//   let finalCode = code;

//   try {
//     if (language === 'python') {
//       fileExtension = 'py';
//       runCommand = `python "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}"`;
//     } else if (language === 'javascript') {
//       fileExtension = 'js';
//       runCommand = `NODE_PATH="${path.join(__dirname, 'node_modules')}" node "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}"`;
//     } else if (language === 'cpp') {
//       fileExtension = 'cpp';
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       baseCommand = `g++ "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}" -I "C:\\local\\boost_1_85_0" -o "${exeFile}"`;
//       runCommand = `"${exeFile}"`;
//     } else if (language === 'c') {
//       fileExtension = 'c';
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       baseCommand = `gcc "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}" -o "${exeFile}"`;
//       runCommand = `"${exeFile}"`;
//     } else if (language === 'java') {
//       fileExtension = 'java';
//       finalCode = code.replace(/public\s+class\s+\w+/g, `public class ${baseFileName}`);
//       const javaFilePath = path.join(tempDir, `${baseFileName}.${fileExtension}`);
//       const classpath = `${tempDir};${path.join(__dirname, 'libs', 'json-20231013.jar')};${path.join(__dirname, 'libs', 'guava-33.2.0.jar')}`;
//       baseCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\javac" -cp "${classpath}" "${javaFilePath}"`;
//       runCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\java" -cp "${classpath}" ${baseFileName}`;
//     }

//     const filePath = path.join(tempDir, `${baseFileName}.${fileExtension}`);
//     await fs.writeFile(filePath, finalCode);

//     if (language === 'cpp' || language === 'c') {
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       try {
//         console.log(`Executing ${language === 'cpp' ? 'C++' : 'C'} compilation command: ${baseCommand}`);
//         const { stdout: compileStdout, stderr: compileStderr } = await execPromise(baseCommand, { timeout: 5000 });
//         if (compileStderr) {
//           return res.status(400).json({ error: `Compilation error: ${compileStderr}` });
//         }
//         console.log(`Executing ${language === 'cpp' ? 'C++' : 'C'} run command: ${runCommand}`);
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         if (stderr) {
//           return res.status(400).json({ error: `Runtime error: ${stderr}` });
//         }
//         return res.json({ output: stdout || compileStdout });
//       } catch (err) {
//         return res.status(400).json({ error: `Execution failed: ${err.stderr || err.message}` });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//         await fs.unlink(exeFile).catch(() => {});
//       }
//     } else if (language === 'java') {
//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout || stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//         const classFile = path.join(tempDir, `${baseFileName}.class`);
//         await fs.unlink(classFile).catch(() => {});
//       }
//     } else if (language === 'python') {
//       const imageFile = path.join(tempDir, 'output.png'); // Look for a fixed file name
//       try {
//         console.log(`Executing Python run command: ${runCommand}`);
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         let response = { output: stdout, error: stderr };
//         // Check if an image file was generated
//         if (await fs.access(imageFile).then(() => true).catch(() => false)) {
//           const imageData = await fs.readFile(imageFile, { encoding: 'base64' });
//           response.image = `data:image/png;base64,${imageData}`; // Add base64 image to response
//           await fs.unlink(imageFile).catch(() => {}); // Clean up the image file
//         }
//         return res.json(response);
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//       }
//     } else {
//       // JavaScript
//       try {
//         console.log(`Executing JavaScript run command: ${runCommand}`);
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout, error: stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//       }
//     }
//   } catch (err) {
//     console.error('Server error:', err);
//     return res.status(500).json({ error: `Server error: ${err.message}` });
//   }
// });

// // Routes
// app.use('/api/code', codeRoutes);

// // Error Handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


///////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const util = require('util');
// const fs = require('fs/promises');
// const path = require('path');
// require('dotenv').config();

// const execPromise = util.promisify(exec);

// // PATH Setup
// process.env.PATH += ';C:\\MinGW\\bin';
// process.env.PATH += ';C:\\Program Files\\Java\\jdk-24\\bin';
// process.env.PATH += ';C:\\Python39';

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));
// app.use(bodyParser.json());

// // Serve static images
// const imagesDir = path.join(__dirname, 'temp', 'images');
// app.use('/images', express.static(imagesDir));

// // MongoDB
// connectDB();

// // Directories
// const tempDir = path.join(__dirname, 'temp');
// fs.mkdir(tempDir, { recursive: true }).catch(console.error);
// fs.mkdir(imagesDir, { recursive: true }).catch(console.error);

// // Image cleanup
// const cleanupImages = async () => {
//   try {
//     const files = await fs.readdir(imagesDir);
//     const now = Date.now();
//     const expiry = 4 * 60 * 60 * 1000;

//     for (const file of files) {
//       const filePath = path.join(imagesDir, file);
//       const stats = await fs.stat(filePath);
//       if (now - stats.mtimeMs > expiry) {
//         await fs.unlink(filePath);
//         console.log(`Deleted old image: ${file}`);
//       }
//     }
//   } catch (err) {
//     console.error('Error cleaning images:', err);
//   }
// };
// setInterval(cleanupImages, 60 * 60 * 1000);

// // Code execution
// app.post('/api/code/execute', async (req, res) => {
//   const { code, language } = req.body;

//   if (!code || !language) {
//     return res.status(400).json({ error: 'Code and language are required' });
//   }

//   if (!['python', 'javascript', 'cpp', 'c', 'java'].includes(language)) {
//     return res.status(400).json({ error: 'Only Python, JavaScript, C++, C, and Java are supported' });
//   }

//   const baseFileName = `Code${Date.now()}`;
//   let fileExtension = '';
//   let runCommand = '';
//   let baseCommand = '';
//   let finalCode = code;

//   try {
//     if (language === 'python') {
//       fileExtension = 'py';
//       const filePath = path.join(tempDir, `${baseFileName}.py`);
//       const imageFileName = `${baseFileName}.png`;
//       const imageFile = path.join(imagesDir, imageFileName);

//       const containsPlot = /plt\.|matplotlib|pyplot/.test(code);

//       if (containsPlot) {
//         finalCode = `
// import os
// import matplotlib
// matplotlib.use('Agg')
// import matplotlib.pyplot as plt
// import pandas as pd

// ${code}

// plt.savefig('${imageFile.replace(/\\/g, '\\\\')}')
// print("Image saved to ${imageFile.replace(/\\/g, '\\\\')}")
//         `;
//       }

//       await fs.writeFile(filePath, finalCode);
//       runCommand = `python "${filePath}"`;

//       try {
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 10000 });
//         const imageExists = await fs.access(imageFile).then(() => true).catch(() => false);
//         const response = { output: stdout, error: stderr };
//         if (imageExists) {
//           response.imageUrl = `/images/${imageFileName}`;
//         }
//         return res.json(response);
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//       }

//     } else if (language === 'javascript') {
//       fileExtension = 'js';
//       const filePath = path.join(tempDir, `${baseFileName}.js`);
//       await fs.writeFile(filePath, code);
//       runCommand = `node "${filePath}"`;

//       try {
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout, error: stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//       }

//     } else if (language === 'cpp') {
//       fileExtension = 'cpp';
//       const filePath = path.join(tempDir, `${baseFileName}.cpp`);
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       await fs.writeFile(filePath, code);
//       baseCommand = `g++ "${filePath}" -I "C:\\local\\boost_1_85_0" -o "${exeFile}"`;
//       runCommand = `"${exeFile}"`;

//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout, error: stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//         await fs.unlink(exeFile).catch(() => {});
//       }

//     } else if (language === 'c') {
//       fileExtension = 'c';
//       const filePath = path.join(tempDir, `${baseFileName}.c`);
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       await fs.writeFile(filePath, code);
//       baseCommand = `gcc "${filePath}" -o "${exeFile}"`;
//       runCommand = `"${exeFile}"`;

//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout, error: stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//         await fs.unlink(exeFile).catch(() => {});
//       }

//     } else if (language === 'java') {
//       fileExtension = 'java';
//       finalCode = code.replace(/public\s+class\s+\w+/, `public class ${baseFileName}`);
//       const filePath = path.join(tempDir, `${baseFileName}.java`);
//       await fs.writeFile(filePath, finalCode);
//       const classpath = `${tempDir};${path.join(__dirname, 'libs', 'json-20231013.jar')};${path.join(__dirname, 'libs', 'guava-33.2.0.jar')}`;
//       baseCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\javac" -cp "${classpath}" "${filePath}"`;
//       runCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\java" -cp "${classpath}" ${baseFileName}`;

//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout, error: stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//         const classFile = path.join(tempDir, `${baseFileName}.class`);
//         await fs.unlink(classFile).catch(() => {});
//       }
//     }

//   } catch (err) {
//     console.error('Server error:', err);
//     return res.status(500).json({ error: `Server error: ${err.message}` });
//   }
// });

// // Routes and Error Handler
// app.use('/api/code', codeRoutes);
// app.use(errorHandler);

// // Server Start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const util = require('util');
// const fs = require('fs/promises');
// const path = require('path');
// require('dotenv').config();

// const execPromise = util.promisify(exec);

// // PATH Setup
// process.env.PATH += ';C:\\MinGW\\bin';
// process.env.PATH += ';C:\\Program Files\\Java\\jdk-24\\bin';

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));
// app.use(bodyParser.json());

// // Connect to MongoDB
// connectDB();

// // Temp Directory
// const tempDir = path.join(__dirname, 'temp');
// fs.mkdir(tempDir, { recursive: true }).catch((err) => {
//   console.error('Failed to create temp directory:', err);
// });

// app.post('/api/code/execute', async (req, res, next) => {
//   const { code, language } = req.body;

//   if (!code || !language) {
//     return res.status(400).json({ error: 'Code and language are required' });
//   }

//   if (!['python', 'javascript', 'cpp', 'c', 'java'].includes(language)) {
//     return res.status(400).json({ error: 'Only Python, JavaScript, C++, C, and Java are supported' });
//   }

//   let fileExtension, baseCommand, runCommand;
//   const baseFileName = `Code${Date.now()}`;
//   let finalCode = code;

//   try {
//     if (language === 'python') {
//       fileExtension = 'py';
//       runCommand = `python "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}"`;
//     } else if (language === 'javascript') {
//       fileExtension = 'js';
//       runCommand = `NODE_PATH="${path.join(__dirname, 'node_modules')}" node "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}"`;
//     } else if (language === 'cpp') {
//       fileExtension = 'cpp';
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       baseCommand = `g++ "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}" -I "C:\\local\\boost_1_85_0" -o "${exeFile}"`;
//       runCommand = `"${exeFile}"`;
//     } else if (language === 'c') {
//       fileExtension = 'c';
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       baseCommand = `gcc "${path.join(tempDir, `${baseFileName}.${fileExtension}`)}" -o "${exeFile}"`;
//       runCommand = `"${exeFile}"`;
//     } else if (language === 'java') {
//       fileExtension = 'java';
//       finalCode = code.replace(/public\s+class\s+\w+/g, `public class ${baseFileName}`);
//       const javaFilePath = path.join(tempDir, `${baseFileName}.${fileExtension}`);
//       const classpath = `${tempDir};${path.join(__dirname, 'libs', 'json-20231013.jar')};${path.join(__dirname, 'libs', 'guava-33.2.0.jar')}`;
//       baseCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\javac" -cp "${classpath}" "${javaFilePath}"`;
//       runCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\java" -cp "${classpath}" ${baseFileName}`;
//     }

//     const filePath = path.join(tempDir, `${baseFileName}.${fileExtension}`);
//     await fs.writeFile(filePath, finalCode);

//     if (language === 'cpp' || language === 'c') {
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       try {
//         console.log(`Executing ${language === 'cpp' ? 'C++' : 'C'} compilation command: ${baseCommand}`);
//         const { stdout: compileStdout, stderr: compileStderr } = await execPromise(baseCommand, { timeout: 5000 });
//         if (compileStderr) {
//           return res.status(400).json({ error: `Compilation error: ${compileStderr}` });
//         }
//         console.log(`Executing ${language === 'cpp' ? 'C++' : 'C'} run command: ${runCommand}`);
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         if (stderr) {
//           return res.status(400).json({ error: `Runtime error: ${stderr}` });
//         }
//         return res.json({ output: stdout || compileStdout });
//       } catch (err) {
//         return res.status(400).json({ error: `Execution failed: ${err.stderr || err.message}` });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//         await fs.unlink(exeFile).catch(() => {});
//       }
//     } else if (language === 'java') {
//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout || stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//         const classFile = path.join(tempDir, `${baseFileName}.class`);
//         await fs.unlink(classFile).catch(() => {});
//       }
//     } else if (language === 'python') {
//       const imageFile = path.join(tempDir, 'output.png'); // Look for a fixed file name
//       try {
//         console.log(`Executing Python run command: ${runCommand}`);
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         let response = { output: stdout, error: stderr };
//         // Check if an image file was generated
//         if (await fs.access(imageFile).then(() => true).catch(() => false)) {
//           const imageData = await fs.readFile(imageFile, { encoding: 'base64' });
//           response.image = `data:image/png;base64,${imageData}`; // Add base64 image to response
//           await fs.unlink(imageFile).catch(() => {}); // Clean up the image file
//         }
//         return res.json(response);
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//       }
//     } else {
//       // JavaScript
//       try {
//         console.log(`Executing JavaScript run command: ${runCommand}`);
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout, error: stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//       }
//     }
//   } catch (err) {
//     console.error('Server error:', err);
//     return res.status(500).json({ error: `Server error: ${err.message}` });
//   }
// });

// // Routes
// app.use('/api/code', codeRoutes);

// // Error Handler
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

///////////////////////////////////////////
////// perfect without js 
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const util = require('util');
// const fs = require('fs/promises');
// const path = require('path');
// require('dotenv').config();

// const execPromise = util.promisify(exec);

// // PATH Setup
// process.env.PATH += ';C:\\MinGW\\bin';
// process.env.PATH += ';C:\\Program Files\\Java\\jdk-24\\bin';
// process.env.PATH += ';C:\\Python39';

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));
// app.use(bodyParser.json());

// // Serve static images
// const imagesDir = path.join(__dirname, 'temp', 'images');
// app.use('/images', express.static(imagesDir));

// // MongoDB
// connectDB();

// // Directories
// const tempDir = path.join(__dirname, 'temp');
// fs.mkdir(tempDir, { recursive: true }).catch(console.error);
// fs.mkdir(imagesDir, { recursive: true }).catch(console.error);

// // Image cleanup
// const cleanupImages = async () => {
//   try {
//     const files = await fs.readdir(imagesDir);
//     const now = Date.now();
//     const expiry = 4 * 60 * 60 * 1000;

//     for (const file of files) {
//       const filePath = path.join(imagesDir, file);
//       const stats = await fs.stat(filePath);
//       if (now - stats.mtimeMs > expiry) {
//         await fs.unlink(filePath);
//         console.log(`Deleted old image: ${file}`);
//       }
//     }
//   } catch (err) {
//     console.error('Error cleaning images:', err);
//   }
// };
// setInterval(cleanupImages, 60 * 60 * 1000);

// // Code execution
// app.post('/api/code/execute', async (req, res) => {
//   const { code, language } = req.body;

//   if (!code || !language) {
//     return res.status(400).json({ error: 'Code and language are required' });
//   }

//   if (!['python', 'javascript', 'cpp', 'c', 'java'].includes(language)) {
//     return res.status(400).json({ error: 'Only Python, JavaScript, C++, C, and Java are supported' });
//   }

//   const baseFileName = `Code${Date.now()}`;
//   let fileExtension = '';
//   let runCommand = '';
//   let baseCommand = '';
//   let finalCode = code;

//   try {
//     if (language === 'python') {
//       fileExtension = 'py';
//       const filePath = path.join(tempDir, `${baseFileName}.py`);
//       const imageFileName = `${baseFileName}.png`;
//       const imageFile = path.join(imagesDir, imageFileName);

//       const containsPlot = /plt\.|matplotlib|pyplot/.test(code);

//       if (containsPlot) {
//         finalCode = `
// import os
// import matplotlib
// matplotlib.use('Agg')
// import matplotlib.pyplot as plt
// import pandas as pd

// ${code}

// plt.savefig('${imageFile.replace(/\\/g, '\\\\')}')
// print("Image saved to ${imageFile.replace(/\\/g, '\\\\')}")
//         `;
//       }

//       await fs.writeFile(filePath, finalCode);
//       runCommand = `python "${filePath}"`;

//       try {
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 10000 });
//         const imageExists = await fs.access(imageFile).then(() => true).catch(() => false);
//         const response = { output: stdout, error: stderr };
//         if (imageExists) {
//           response.imageUrl = `/images/${imageFileName}`;
//         }
//         return res.json(response);
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//       }

//     } else if (language === 'javascript') {
//       fileExtension = 'js';
//       const filePath = path.join(tempDir, `${baseFileName}.js`);
//       await fs.writeFile(filePath, code);
//       runCommand = `node "${filePath}"`;

//       try {
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout, error: stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//       }

//     } else if (language === 'cpp') {
//       fileExtension = 'cpp';
//       const filePath = path.join(tempDir, `${baseFileName}.cpp`);
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       await fs.writeFile(filePath, code);
//       baseCommand = `g++ "${filePath}" -I "C:\\local\\boost_1_85_0" -o "${exeFile}"`;
//       runCommand = `"${exeFile}"`;

//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout, error: stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//         await fs.unlink(exeFile).catch(() => {});
//       }

//     } else if (language === 'c') {
//       fileExtension = 'c';
//       const filePath = path.join(tempDir, `${baseFileName}.c`);
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);
//       await fs.writeFile(filePath, code);
//       baseCommand = `gcc "${filePath}" -o "${exeFile}"`;
//       runCommand = `"${exeFile}"`;

//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout, error: stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//         await fs.unlink(exeFile).catch(() => {});
//       }

//     } else if (language === 'java') {
//       fileExtension = 'java';
//       finalCode = code.replace(/public\s+class\s+\w+/, `public class ${baseFileName}`);
//       const filePath = path.join(tempDir, `${baseFileName}.java`);
//       await fs.writeFile(filePath, finalCode);
//       const classpath = `${tempDir};${path.join(__dirname, 'libs', 'json-20231013.jar')};${path.join(__dirname, 'libs', 'guava-33.2.0.jar')}`;
//       baseCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\javac" -cp "${classpath}" "${filePath}"`;
//       runCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\java" -cp "${classpath}" ${baseFileName}`;

//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         return res.json({ output: stdout, error: stderr });
//       } catch (err) {
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(() => {});
//         const classFile = path.join(tempDir, `${baseFileName}.class`);
//         await fs.unlink(classFile).catch(() => {});
//       }
//     }

//   } catch (err) {
//     console.error('Server error:', err);
//     return res.status(500).json({ error: `Server error: ${err.message}` });
//   }
// });

// // Routes and Error Handler
// app.use('/api/code', codeRoutes);
// app.use(errorHandler);

// // Server Start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const util = require('util');
// const fs = require('fs/promises');
// const path = require('path');
// require('dotenv').config();

// const execPromise = util.promisify(exec);

// // PATH Setup
// process.env.PATH += ';C:\\MinGW\\bin';
// process.env.PATH += ';C:\\Program Files\\Java\\jdk-24\\bin';
// process.env.PATH += ';C:\\Python39';
// process.env.PATH += ';C:\\Program Files\\nodejs';

// const app = express();

// // Middleware
// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));
// app.use(express.json());

// // Serve static images
// const imagesDir = path.join(__dirname, 'temp', 'images');
// app.use('/images', express.static(imagesDir));

// // MongoDB
// connectDB();

// // Directories
// const tempDir = path.join(__dirname, 'temp');
// fs.mkdir(tempDir, { recursive: true }).catch(err => console.error('Error creating temp dir:', err));
// fs.mkdir(imagesDir, { recursive: true }).catch(err => console.error('Error creating images dir:', err));

// // Image cleanup
// const cleanupImages = async () => {
//   try {
//     const files = await fs.readdir(imagesDir);
//     const now = Date.now();
//     const expiry = 4 * 60 * 60 * 1000;

//     for (const file of files) {
//       const filePath = path.join(imagesDir, file);
//       const stats = await fs.stat(filePath);
//       if (now - stats.mtimeMs > expiry) {
//         await fs.unlink(filePath);
//         console.log(`Deleted old image: ${file}`);
//       }
//     }
//   } catch (err) {
//     console.error('Error cleaning images:', err);
//   }
// };
// setInterval(cleanupImages, 60 * 60 * 1000);

// // Code execution
// app.post('/api/code/execute', async (req, res) => {
//   console.log('Received /api/code/execute request:', req.body);
//   const { code, language } = req.body;

//   if (!code || !language) {
//     console.log('Validation failed: Code or language missing');
//     return res.status(400).json({ error: 'Code and language are required' });
//   }

//   if (!['python', 'javascript', 'cpp', 'c', 'java'].includes(language)) {
//     console.log('Validation failed: Unsupported language:', language);
//     return res.status(400).json({ error: 'Only Python, JavaScript, C++, C, and Java are supported' });
//   }

//   const baseFileName = `Code${Date.now()}`;
//   let fileExtension = '';
//   let runCommand = '';
//   let baseCommand = '';
//   let finalCode = code;

//   try {
//     if (language === 'python') {
//       fileExtension = 'py';
//       const filePath = path.join(tempDir, `${baseFileName}.py`);
//       const imageFileName = `${baseFileName}.png`;
//       const imageFile = path.join(imagesDir, imageFileName);

//       console.log('Processing Python code, filePath:', filePath);

//       const containsPlot = /plt\.|matplotlib|pyplot/.test(code);

//       if (containsPlot) {
//         console.log('Detected plotting code, adding savefig');
//         finalCode = `
// import os
// import matplotlib
// matplotlib.use('Agg')
// import matplotlib.pyplot as plt
// import pandas as pd

// ${code}

// plt.savefig('${imageFile.replace(/\\/g, '\\\\')}')
// print("Image saved to ${imageFile.replace(/\\/g, '\\\\')}")
//         `;
//       }

//       await fs.writeFile(filePath, finalCode);
//       console.log('File written:', filePath);
//       runCommand = `python "${filePath}"`;
//       console.log('Executing command:', runCommand);

//       try {
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 10000 });
//         console.log('Execution result:', { stdout, stderr });
//         const imageExists = await fs.access(imageFile).then(() => true).catch(() => false);
//         const response = { output: stdout, error: stderr };
//         if (imageExists) {
//           response.imageUrl = `/images/${imageFileName}`;
//         }
//         console.log('Sending response:', response);
//         return res.json(response);
//       } catch (err) {
//         console.error('Execution error:', err.message, err.stack);
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(err => console.error(`Error deleting ${filePath}:`, err));
//       }

//     } else if (language === 'javascript') {
//       console.log('Processing JavaScript code');

//       runCommand = `node --no-inspect -e "${code.replace(/"/g, '\\"')}"`;
//       console.log('Executing command:', runCommand);

//       try {
//         const { stdout, stderr } = await execPromise(runCommand, {
//           timeout: 5000,
//           env: { ...process.env, NODE_OPTIONS: '' },
//         });
//         console.log('Execution result:', { stdout, stderr });
//         const response = { output: stdout, error: stderr };
//         console.log('Sending response:', response);
//         return res.json(response);
//       } catch (err) {
//         console.error('Execution error for JavaScript:', err.message, err.stack);
//         return res.status(400).json({ error: err.stderr || err.message });
//       }

//     } else if (language === 'cpp') {
//       fileExtension = 'cpp';
//       const filePath = path.join(tempDir, `${baseFileName}.cpp`);
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);

//       console.log('Processing C++ code, filePath:', filePath);

//       await fs.writeFile(filePath, code);
//       console.log('File written:', filePath);
//       baseCommand = `g++ "${filePath}" -I "C:\\local\\boost_1_85_0" -o "${exeFile}"`;
//       runCommand = `"${exeFile}"`;
//       console.log('Compiling command:', baseCommand);

//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         console.log('Compilation successful, executing:', runCommand);
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         console.log('Execution result:', { stdout, stderr });
//         const response = { output: stdout, error: stderr };
//         console.log('Sending response:', response);
//         return res.json(response);
//       } catch (err) {
//         console.error('Execution error:', err.message, err.stack);
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(err => console.error(`Error deleting ${filePath}:`, err));
//         await fs.unlink(exeFile).catch(err => console.error(`Error deleting ${exeFile}:`, err));
//       }

//     } else if (language === 'c') {
//       fileExtension = 'c';
//       const filePath = path.join(tempDir, `${baseFileName}.c`);
//       const exeFile = path.join(tempDir, `${baseFileName}.exe`);

//       console.log('Processing C code, filePath:', filePath);

//       await fs.writeFile(filePath, code);
//       console.log('File written:', filePath);
//       baseCommand = `gcc "${filePath}" -o "${exeFile}"`;
//       runCommand = `"${exeFile}"`;
//       console.log('Compiling command:', baseCommand);

//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         console.log('Compilation successful, executing:', runCommand);
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         console.log('Execution result:', { stdout, stderr });
//         const response = { output: stdout, error: stderr };
//         console.log('Sending response:', response);
//         return res.json(response);
//       } catch (err) {
//         console.error('Execution error:', err.message, err.stack);
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(err => console.error(`Error deleting ${filePath}:`, err));
//         await fs.unlink(exeFile).catch(err => console.error(`Error deleting ${exeFile}:`, err));
//       }

//     } else if (language === 'java') {
//       fileExtension = 'java';
//       finalCode = code.replace(/public\s+class\s+\w+/, `public class ${baseFileName}`);
//       const filePath = path.join(tempDir, `${baseFileName}.java`);

//       console.log('Processing Java code, filePath:', filePath);

//       await fs.writeFile(filePath, finalCode);
//       console.log('File written:', filePath);
//       const classpath = `${tempDir};${path.join(__dirname, 'libs', 'json-20231013.jar')};${path.join(__dirname, 'libs', 'guava-33.2.0.jar')}`;
//       baseCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\javac" -cp "${classpath}" "${filePath}"`;
//       runCommand = `"C:\\Program Files\\Java\\jdk-24\\bin\\java" -cp "${classpath}" ${baseFileName}`;
//       console.log('Compiling command:', baseCommand);

//       try {
//         await execPromise(baseCommand, { timeout: 5000 });
//         console.log('Compilation successful, executing:', runCommand);
//         const { stdout, stderr } = await execPromise(runCommand, { timeout: 5000 });
//         console.log('Execution result:', { stdout, stderr });
//         const response = { output: stdout, error: stderr };
//         console.log('Sending response:', response);
//         return res.json(response);
//       } catch (err) {
//         console.error('Execution error:', err.message, err.stack);
//         return res.status(400).json({ error: err.stderr || err.message });
//       } finally {
//         await fs.unlink(filePath).catch(err => console.error(`Error deleting ${filePath}:`, err));
//         const classFile = path.join(tempDir, `${baseFileName}.class`);
//         await fs.unlink(classFile).catch(err => console.error(`Error deleting ${classFile}:`, err));
//       }
//     }

//   } catch (err) {
//     console.error('Server error:', err.message, err.stack);
//     return res.status(500).json({ error: `Server error: ${err.message}` });
//   }
// });

// // Routes and Error Handler
// app.use('/api/code', codeRoutes);
// app.use(errorHandler);

// // Server Start
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////

// working full

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const util = require('util');
// const fs = require('fs/promises');
// const path = require('path');
// require('dotenv').config();

// const execPromise = util.promisify(exec);
// const app = express();

// app.use(cors({
//   origin: 'http://localhost:5173',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

// app.use(express.json());

// const imagesDir = path.join(__dirname, 'temp', 'images');
// app.use('/images', express.static(imagesDir));

// connectDB();

// const tempDir = path.join(__dirname, 'temp');
// fs.mkdir(tempDir, { recursive: true }).catch(err => console.error('Error creating temp dir:', err));
// fs.mkdir(imagesDir, { recursive: true }).catch(err => console.error('Error creating images dir:', err));

// const cleanupImages = async () => {
//   try {
//     const files = await fs.readdir(imagesDir);
//     const now = Date.now();
//     const expiry = 4 * 60 * 60 * 1000;
//     for (const file of files) {
//       const filePath = path.join(imagesDir, file);
//       const stats = await fs.stat(filePath);
//       if (now - stats.mtimeMs > expiry) {
//         await fs.unlink(filePath);
//         console.log(`Deleted old image: ${file}`);
//       }
//     }
//   } catch (err) {
//     console.error('Error cleaning images:', err);
//   }
// };

// setInterval(cleanupImages, 60 * 60 * 1000);

// app.get('/', (req, res) => {
//   res.send('🛠️ Compiler backend is running on Kode Smith server!');
// });

// app.post('/api/code/execute', async (req, res) => {
//   const { code, language } = req.body;
//   if (!code || !language) return res.status(400).json({ error: 'Code and language are required' });
//   if (!['python', 'javascript', 'cpp', 'c', 'java'].includes(language)) return res.status(400).json({ error: 'Unsupported language' });

//   const baseFileName = `Code${Date.now()}`;
//   let finalCode = code;
//   const filePath = path.join(tempDir, `${baseFileName}.${language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'java' ? 'java' : language}`);
//   const imageFileName = `${baseFileName}.png`;
//   const imageFile = path.join(imagesDir, imageFileName);

//   try {
//     if (language === 'python') {
//       const safeImagePath = imageFile.replace(/\\/g, '/');
//       if (/plt\.|matplotlib|pyplot/.test(code)) {
//         finalCode = `import os\nimport matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nimport pandas as pd\n${code}\nplt.savefig(r'${safeImagePath}')\nprint("Image saved to ${safeImagePath}")`;
//       }
//       await fs.writeFile(filePath, finalCode);
//       const { stdout, stderr } = await execPromise(`python -X utf8 "${filePath}"`, { timeout: 20000 });
//       const imageExists = await fs.access(imageFile).then(() => true).catch(() => false);
//       const response = { output: stdout || '', error: stderr || '' };
//       if (imageExists) response.imageUrl = `/images/${imageFileName}`;
//       return res.json(response);
//     }

//     if (language === 'javascript') {
//       finalCode = `(function() { try { ${code} } catch (e) { console.error(e.message); console.error(e.stack); }})();`;
//       await fs.writeFile(filePath, finalCode);
//       const { stdout, stderr } = await execPromise(`node "${filePath}"`, { timeout: 8000 });
//       return res.json({ output: stdout || '', error: stderr || '' });
//     }

//     if (language === 'cpp' || language === 'c') {
//       const exeFile = path.join(tempDir, `${baseFileName}.out`);
//       await fs.writeFile(filePath, code);
//       const compiler = language === 'cpp' ? 'g++' : 'gcc';
//       await execPromise(`${compiler} "${filePath}" -o "${exeFile}"`, { timeout: 10000 });
//       const { stdout, stderr } = await execPromise(`"${exeFile}"`, { timeout: 8000 });
//       return res.json({ output: stdout || '', error: stderr || '' });
//     }

//     if (language === 'java') {
//       const classNameMatch = code.match(/public\s+class\s+(\w+)/);
//       const className = classNameMatch ? classNameMatch[1] : baseFileName;
//       const javaFilePath = path.join(tempDir, `${className}.java`);
//       const correctedCode = classNameMatch ? code : `public class ${className} { public static void main(String[] args) { ${code} } }`;

//       await fs.writeFile(javaFilePath, correctedCode);

//       try {
//         await execPromise(`javac "${javaFilePath}"`, { timeout: 20000 });
//       } catch (compErr) {
//         return res.status(400).json({ error: 'Compilation failed: ' + (compErr.stderr || compErr.message) });
//       }

//       try {
//         const { stdout, stderr } = await execPromise(`java -cp "${tempDir}" ${className}`, { timeout: 20000 });
//         return res.json({ output: stdout || '', error: stderr || '' });
//       } catch (execErr) {
//         return res.status(400).json({ error: 'Execution failed: ' + (execErr.stderr || execErr.message) });
//       } finally {
//         await fs.unlink(javaFilePath).catch(() => {});
//         await fs.unlink(path.join(tempDir, `${className}.class`)).catch(() => {});
//       }
//     }
//   } catch (err) {
//     return res.status(500).json({ error: `Server error: ${err.message}` });
//   }
// });

// app.use('/api/code', codeRoutes);
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

////////////////////////////////////////////
////////////////////////////////////////////
// docker update 
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const util = require('util');
// const fs = require('fs/promises');
// const path = require('path');
// require('dotenv').config();


// const execPromise = util.promisify(exec);
// const app = express();

// app.use(cors({
//   origin: 'https://compiler-frontend-gxeb.onrender.com',
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

// app.use(express.json());

// const imagesDir = path.join(__dirname, 'temp', 'images');
// app.use('/images', express.static(imagesDir));

// connectDB();

// const tempDir = path.join(__dirname, 'temp');
// fs.mkdir(tempDir, { recursive: true }).catch(err => console.error('Error creating temp dir:', err));
// fs.mkdir(imagesDir, { recursive: true }).catch(err => console.error('Error creating images dir:', err));

// const cleanupImages = async () => {
//   try {
//     const files = await fs.readdir(imagesDir);
//     const now = Date.now();
//     const expiry = 4 * 60 * 60 * 1000;
//     for (const file of files) {
//       const filePath = path.join(imagesDir, file);
//       const stats = await fs.stat(filePath);
//       if (now - stats.mtimeMs > expiry) {
//         await fs.unlink(filePath);
//         console.log(`Deleted old image: ${file}`);
//       }
//     }
//   } catch (err) {
//     console.error('Error cleaning images:', err);
//   }
// };

// setInterval(cleanupImages, 60 * 60 * 1000);

// app.get('/', (req, res) => {
//   res.send('🛠️ Compiler backend is running on Kode Smith server!');
// });

// app.post('/api/code/execute', async (req, res) => {
//   const { code, language } = req.body;
//   if (!code || !language) return res.status(400).json({ error: 'Code and language are required' });
//   if (!['python', 'javascript', 'cpp', 'c', 'java'].includes(language)) return res.status(400).json({ error: 'Unsupported language' });

//   const baseFileName = `Code${Date.now()}`;
//   let finalCode = code;
//   const filePath = path.join(tempDir, `${baseFileName}.${language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'java' ? 'java' : language}`);
//   const imageFileName = `${baseFileName}.png`;
//   const imageFile = path.join(imagesDir, imageFileName);

//   try {
//     if (language === 'python') {
//   const pythonCmd = process.platform === 'win32' ? 'python' : 'python3';

//   if (/plt\.|matplotlib|pyplot/.test(code)) {
//     const safeImagePath = imageFile.replace(/\\/g, '/'); // Cross-platform compatibility
//     finalCode = `import os\nimport matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nimport pandas as pd\n${code}\nplt.savefig('${safeImagePath}')\nprint("Image saved to ${safeImagePath}")`;
//   }

//   await fs.writeFile(filePath, finalCode);

//   const { stdout, stderr } = await execPromise(`${pythonCmd} -X utf8 "${filePath}"`, { timeout: 20000 });
//   const imageExists = await fs.access(imageFile).then(() => true).catch(() => false);
//   const response = { output: stdout || '', error: stderr || '' };
//   if (imageExists) response.imageUrl = `/images/${imageFileName}`;
//   return res.json(response);
// }


//     if (language === 'javascript') {
//       finalCode = `(function() { try { ${code} } catch (e) { console.error(e.message); console.error(e.stack); }})();`;
//       await fs.writeFile(filePath, finalCode);
//       const { stdout, stderr } = await execPromise(`node "${filePath}"`, { timeout: 8000 });
//       return res.json({ output: stdout || '', error: stderr || '' });
//     }

//     if (language === 'cpp' || language === 'c') {
//       const exeFile = path.join(tempDir, `${baseFileName}.out`);
//       await fs.writeFile(filePath, code);
//       const compiler = language === 'cpp' ? 'g++' : 'gcc';
//       await execPromise(`${compiler} "${filePath}" -o "${exeFile}"`, { timeout: 10000 });
//       const { stdout, stderr } = await execPromise(`"${exeFile}"`, { timeout: 8000 });
//       return res.json({ output: stdout || '', error: stderr || '' });
//     }

//     if (language === 'java') {
//       const classNameMatch = code.match(/public\s+class\s+(\w+)/);
//       const className = classNameMatch ? classNameMatch[1] : baseFileName;
//       const javaFilePath = path.join(tempDir, `${className}.java`);
//       const correctedCode = classNameMatch ? code : `public class ${className} { public static void main(String[] args) { ${code} } }`;

//       await fs.writeFile(javaFilePath, correctedCode);
//       try {
//         await execPromise(`javac "${javaFilePath}"`, { timeout: 20000 });
//       } catch (compErr) {
//         return res.status(400).json({ error: 'Compilation failed: ' + (compErr.stderr || compErr.message) });
//       }

//       try {
//         const { stdout, stderr } = await execPromise(`java -cp "${tempDir}" ${className}`, { timeout: 20000 });
//         return res.json({ output: stdout || '', error: stderr || '' });
//       } catch (execErr) {
//         return res.status(400).json({ error: 'Execution failed: ' + (execErr.stderr || execErr.message) });
//       } finally {
//         await fs.unlink(javaFilePath).catch(() => {});
//         await fs.unlink(path.join(tempDir, `${className}.class`)).catch(() => {});
//       }
//     }
//   } catch (err) {
//     return res.status(500).json({ error: `Server error: ${err.message}` });
//   }
// });

// app.use('/api/code', codeRoutes);
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const codeRoutes = require('./routes/code');
// const connectDB = require('./config/db');
// const errorHandler = require('./middleware/errorHandler');
// const { exec } = require('child_process');
// const util = require('util');
// const fs = require('fs/promises');
// const path = require('path');
// const Code = require('./models/Code');
// require('dotenv').config();

// const execPromise = util.promisify(exec);
// const app = express();

// app.use(cors({
//   origin: ['http://localhost:5173', 'https://compiler-frontend-gxeb.onrender.com'],
//   methods: ['GET', 'POST'],
//   allowedHeaders: ['Content-Type'],
// }));

// app.use(express.json());

// const imagesDir = path.join(__dirname, 'temp', 'images');
// app.use('/images', express.static(imagesDir));

// connectDB();

// const tempDir = path.join(__dirname, 'temp');
// fs.mkdir(tempDir, { recursive: true }).catch(err => console.error('Error creating temp dir:', err));
// fs.mkdir(imagesDir, { recursive: true }).catch(err => console.error('Error creating images dir:', err));

// const cleanupImages = async () => {
//   try {
//     const files = await fs.readdir(imagesDir);
//     const now = Date.now();
//     const expiry = 4 * 60 * 60 * 1000;
//     for (const file of files) {
//       const filePath = path.join(imagesDir, file);
//       const stats = await fs.stat(filePath);
//       if (now - stats.mtimeMs > expiry) {
//         await fs.unlink(filePath);
//         console.log(`Deleted old image: ${file}`);
//       }
//     }
//   } catch (err) {
//     console.error('Error cleaning images:', err);
//   }
// };

// setInterval(cleanupImages, 60 * 60 * 1000);

// setInterval(async () => {
//   const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
//   try {
//     const result = await Code.deleteMany({ createdAt: { $lt: oneHourAgo } });
//     if (result.deletedCount > 0) {
//       console.log(`⏰ Deleted ${result.deletedCount} expired code snippets.`);
//     }
//   } catch (err) {
//     console.error('❌ Error deleting expired code snippets:', err);
//   }
// }, 10 * 60 * 1000);

// app.get('/', (req, res) => {
//   res.send('🛠️ Compiler backend is running on Kode Smith server!');
// });

// app.post('/api/code/execute', async (req, res) => {
//   const { code, language } = req.body;
//   if (!code || !language) return res.status(400).json({ error: 'Code and language are required' });
//   if (!['python', 'javascript', 'cpp', 'c', 'java'].includes(language)) return res.status(400).json({ error: 'Unsupported language' });

//   const baseFileName = `Code${Date.now()}`;
//   let finalCode = code;
//   const filePath = path.join(tempDir, `${baseFileName}.${language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'java' ? 'java' : language}`);
//   const imageFileName = `${baseFileName}.png`;
//   const imageFile = path.join(imagesDir, imageFileName);

//   try {
//     if (language === 'python') {
//       const pythonCmd = process.platform === 'win32' ? 'python' : 'python3';

//       if (/plt\.|matplotlib|pyplot/.test(code)) {
//         const safeImagePath = imageFile.replace(/\\/g, '/');
//         finalCode = `import os\nimport matplotlib\nmatplotlib.use('Agg')\nimport matplotlib.pyplot as plt\nimport pandas as pd\n${code}\nplt.savefig('${safeImagePath}')\nprint("Image saved to ${safeImagePath}")`;
//       }

//       await fs.writeFile(filePath, finalCode);

//       const { stdout, stderr } = await execPromise(`${pythonCmd} -X utf8 "${filePath}"`, { timeout: 20000 });
//       const imageExists = await fs.access(imageFile).then(() => true).catch(() => false);
//       const response = { output: stdout || '', error: stderr || '' };
//       if (imageExists) response.imageUrl = `/images/${imageFileName}`;
//       return res.json(response);
//     }

//     if (language === 'javascript') {
//       finalCode = `(function() { try { ${code} } catch (e) { console.error(e.message); console.error(e.stack); }})();`;
//       await fs.writeFile(filePath, finalCode);
//       const { stdout, stderr } = await execPromise(`node "${filePath}"`, { timeout: 8000 });
//       return res.json({ output: stdout || '', error: stderr || '' });
//     }

//     if (language === 'cpp' || language === 'c') {
//       const exeFile = path.join(tempDir, `${baseFileName}.out`);
//       await fs.writeFile(filePath, code);
//       const compiler = language === 'cpp' ? 'g++' : 'gcc';
//       await execPromise(`${compiler} "${filePath}" -o "${exeFile}"`, { timeout: 10000 });
//       const { stdout, stderr } = await execPromise(`"${exeFile}"`, { timeout: 8000 });
//       return res.json({ output: stdout || '', error: stderr || '' });
//     }

//     if (language === 'java') {
//       const classNameMatch = code.match(/public\s+class\s+(\w+)/);
//       const className = classNameMatch ? classNameMatch[1] : baseFileName;
//       const javaFilePath = path.join(tempDir, `${className}.java`);
//       const correctedCode = classNameMatch ? code : `public class ${className} { public static void main(String[] args) { ${code} } }`;

//       await fs.writeFile(javaFilePath, correctedCode);
//       try {
//         await execPromise(`javac "${javaFilePath}"`, { timeout: 20000 });
//       } catch (compErr) {
//         return res.status(400).json({ error: 'Compilation failed: ' + (compErr.stderr || compErr.message) });
//       }

//       try {
//         const { stdout, stderr } = await execPromise(`java -cp "${tempDir}" ${className}`, { timeout: 20000 });
//         return res.json({ output: stdout || '', error: stderr || '' });
//       } catch (execErr) {
//         return res.status(400).json({ error: 'Execution failed: ' + (execErr.stderr || execErr.message) });
//       } finally {
//         await fs.unlink(javaFilePath).catch(() => {});
//         await fs.unlink(path.join(tempDir, `${className}.class`)).catch(() => {});
//       }
//     }
//   } catch (err) {
//     return res.status(500).json({ error: `Server error: ${err.message}` });
//   }
// });

// app.use('/api/code', codeRoutes);
// app.use(errorHandler);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const codeRoutes = require('./routes/code');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorHandler');
const fs = require('fs/promises');
const path = require('path');
const SharedCode = require('./models/SharedCode'); // Updated to SharedCode
require('dotenv').config();

const app = express();
app.use(cors({
  origin: ['https://kode-smith.onrender.com'],
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json());

const imagesDir = path.join(__dirname, 'temp', 'images');
app.use('/images', express.static(imagesDir));

connectDB();

const tempDir = path.join(__dirname, 'temp');
fs.mkdir(tempDir, { recursive: true }).catch(err => console.error('Error creating temp dir:', err));
fs.mkdir(imagesDir, { recursive: true }).catch(err => console.error('Error creating images dir:', err));

const cleanupImages = async () => {
  try {
    const files = await fs.readdir(imagesDir);
    const now = Date.now();
    const expiry = 4 * 60 * 60 * 1000; // 4 hours
    for (const file of files) {
      const filePath = path.join(imagesDir, file);
      const stats = await fs.stat(filePath);
      if (now - stats.mtimeMs > expiry) {
        await fs.unlink(filePath);
        console.log(`Deleted old image: ${file}`);
      }
    }
  } catch (err) {
    console.error('Error cleaning images:', err);
  }
};

setInterval(cleanupImages, 60 * 60 * 1000); // Run every hour

setInterval(async () => {
  const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000);
  try {
    const result = await SharedCode.deleteMany({ createdAt: { $lt: oneHourAgo } }); // Updated to SharedCode
    if (result.deletedCount > 0) {
      console.log(`⏰ Deleted ${result.deletedCount} expired code snippets.`);
    }
  } catch (err) {
    console.error('❌ Error deleting expired code snippets:', err);
  }
}, 10 * 60 * 1000); // Run every 10 minutes

app.get('/', (req, res) => {
  res.send('🛠️ Compiler backend is running on Kode Smith server!');
});

app.use('/api/code', codeRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));