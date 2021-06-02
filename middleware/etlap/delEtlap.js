const requireOption = require('../requireOption');

//törli az asztalt az adatbázisból



module.exports = function (objectrepository) {
  return function (req, res, next) {
    if(typeof res.locals.etlap === 'undefined'){
      return next();
    }

    res.locals.etlap.remove((err)=>{
      if (err){
        return next(err);
      }

      return res.redirect('/etlap');
    })
  };
};
