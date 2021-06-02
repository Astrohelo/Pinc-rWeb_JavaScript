const requireOption = require('../requireOption');

//törli az asztalt az adatbázisból



module.exports = function (objectrepository) {
  return function (req, res, next) {
    if(typeof res.locals.asztal === 'undefined'){
      return next();
    }

    res.locals.asztal.remove((err)=>{
      if (err){
        return next(err);
      }

      return res.redirect('/asztalok');
    })
  };
};
