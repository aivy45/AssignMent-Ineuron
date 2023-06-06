// This token we have to verify again and again whether we are in dashboard or in setting or in any route token needs to be verify that's the reason we have taken it into different route

const jwt = require("jsonwebtoken");
// as we don't have app.use(cookieParser()) like in case of cookie parser
//  that's why we haven't exported cookieparser again but not in case of jwt

const auth = (req, res, next) => {
  console.log(req.cookies); // req.cookies throught this we are accessing cookies that we have make during time of login
  const token = req.cookies.token; // or
  //  const {token} = req.cookies;

  // what if token is not there
  if (!token) {
    return res.status(401).send("Token is missing or Access denied");
  }

  // verify token
  try {
    const decode = jwt.verify(token, "shhhhh");
    console.log(decode); // whatever in token that info we will get
    req.user = decode; //adding decode in req can be req.akshun or req.anything

    //extract id from token and query the DB  (validate during mega project)
  } catch (e) {
    console.log(e);
    console.log("Its error");
    res.status(401).send("Token is invalid");
  }

  return next(); // can also be next()
};

module.exports = auth;
