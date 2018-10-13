const parseCookies = (req, res, next) => {
    
  if (!req.headers.cookie) {
    req.cookies = {};

  } else {
    var splitCookies = req.headers.cookie.split(';');
    var parsedCookieName = '';
    var parsedCookie;
    var cookieObj = {};

    splitCookies.forEach((cookie) => {
      var splitCookie = cookie.split('=');
      parsedCookieName = splitCookie[0].trim();
      parsedCookie = splitCookie[1];
      cookieObj[parsedCookieName] = parsedCookie;
    });

    req.cookies = cookieObj;
  }

  next();
};

module.exports = parseCookies;