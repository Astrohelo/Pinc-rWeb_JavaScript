const requireOption = require('../requireOption');

//törli az asztalt az adatbázisból



module.exports = function (objectrepository) {
  return function (req, res, next) {
    if(typeof res.locals.rendeles === 'undefined'){
      return next();
    }

    res.locals.rendeles.remove((err)=>{
      if (err){
        return next(err);
      }

      return res.redirect(`/rendeles/${res.locals.asztal._id}`);
    })
  };
};
