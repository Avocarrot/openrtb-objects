const Ajv = require('ajv');
const schemaValidator = Ajv();

exports.validate = (schema, object) => {
  const validate = schemaValidator.compile(schema);
  return validate(object) ? [] : validate.errors;
}
