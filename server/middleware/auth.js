const models = require('../models');
const Promise = require('bluebird');


module.exports.createSession = (req, res, next) => {
  var obj = {
    username : req.body.username
  };
  
  models.Users.get(obj)
  .then((storedData) => {
     if (!storedData) {
      res.redirect("/login");
    } else { 
      if(models.Users.compare(req.body.password, storedData.password, storedData.salt)) {
          models.Sessions.create(storedData.id)
          .then(()=> {
            models.Sessions.get({userId : storedData.id})
            .then((data) => {
              // res.cookie(data.hash);
              // console.log(data.hash);
              res.cookie('shortlyid', data.hash)
              // console.log('Sessions data: ', data);
              res.redirect("/");
            })
          })
       } else {
          res.redirect('/login');
        }
      }
    }).catch((err) =>{
      res.send(err);
    })
  
  next();

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

