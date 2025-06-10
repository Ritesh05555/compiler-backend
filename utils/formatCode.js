const prettier = require('prettier');

exports.formatCode = async (code, language) => {
  const parserMap = {
    javascript: 'babel',
    php: 'php',
  };

  if (!parserMap[language]) return code;

  try {
    return await prettier.format(code, {
      parser: parserMap[language],
      tabWidth: 2,
      useTabs: false,
    });
  } catch (err) {
    return code; // Return original if formatting fails
  }
};