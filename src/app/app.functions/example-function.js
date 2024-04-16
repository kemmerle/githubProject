exports.main = async (context = {}) => {
  const { text } = context.parameters;

  const response = `This is coming from a serverless function! I'm changing this up for testing purposes. You entered: ${text}`;

  return response;
};
