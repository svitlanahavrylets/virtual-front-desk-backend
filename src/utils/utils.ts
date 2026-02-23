const validateOptions = ({ instruction, options }) => {
  if (!instruction || typeof instruction !== "string")
    return "Instruction is required and must be a string";
  if (!options || options.length !== 4)
    if (!Array.isArray(options)) return "Options must be an array";
  return "Exactly 4 options are required";
};
export default validateOptions;
