const parseCookies = (req, res, next) => {

  var splitCookies = req.headers.cookie.split(';');
  var parsedCookie;

  splitCookies.forEach((cookie) => {
    if (cookie.slice(0,10) === ' shortlyid') {
      parsedCookie = cookie.split('=')[1];
    }
  });

  req.cookie = {'shortlyid' : parsedCookie};
  next();
};

module.exports = parseCookies;