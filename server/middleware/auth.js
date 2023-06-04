import jwt from "jsonwebtoken";

/**verify our token
 * make use of Authorization header
 * if there's no token, deny access
 * else, check if token starts with Bearer and the slice our token into 7 digits, then trimLeft
 * verify out token using JWT_SECRET code
 * execute the next middleware in the stack if any
 */
const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;

    let decodedData;

    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "test");

      req.userId = decodedData?.id;
    } else {
      decodedData = jwt.decode(token);

      req.userId = decodedData?.sub;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};

export default auth;
