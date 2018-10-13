const parseCookies = (req, res, next) => {
  console.log(req);
  var cookie = req.headers.cookie.split('cookieName=');
  // console.log(cookie);
  var parsedCookie = cookie[cookie.length -1];
  req.cookie({cookie:parsedCookie});
  next();
};

module.exports = parseCookies;