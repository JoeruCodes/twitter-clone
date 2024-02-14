import tweetReplySchemaInfer from "./global_schema/tweetReplySchema";

const UniversalValidator = (data: any, schema: any) => {
  try {
    schema.parse(data);
  } catch (err: any) {
    throw err.message;
  }
};

export default UniversalValidator;
