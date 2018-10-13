const models = require('../models');
const Promise = require('bluebird');


module.exports.createSession = (req, res, next) => {
  
  if (req.cookies.hasOwnProperty('shortlyid')) {
    //console.log(req.cookies);
    models.Sessions.get({hash: req.cookies.shortlyid}) 
      .then((data) => {
        //console.log(data);
        if (!data) {
          req['newPath'] = "login";
        }else{
          req['newPath'] = "as is";
        }
      });
  }


  // console.log("hi");

  // var obj = {
  //   username: req.body.username
  // };

  // models.Users.get(obj)
  //   .then((storedData) => {
  //     if (!storedData) {
  //       res.redirect("/login");
  //   } else { 
  //     if(models.Users.compare(req.body.password, storedData.password, storedData.salt)) {
  //         models.Sessions.create(storedData.id)
  //         .then(()=> {
  //           models.Sessions.get({userId : storedData.id})
  //           .then((data) => {
  //             res.cookie('shortlyid', data.hash)
  //             res.redirect("/");
  //           })
  //         })
  //      } else {
  //         res.redirect('/login');
  //       }
  //     }
  //   }).catch((err) =>{
  //     res.send(err);
  //   });
  
  next();

};

/************************************************************/
// Add additional authentication middleware functions below
/************************************************************/

