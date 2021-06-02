const requireOption = require('../requireOption');

//törli az összes rendelést



module.exports = function (objectrepository) {
  

  return function (req, res, next) {
    if(typeof res.locals.rendelesek ==='undefined'){
      return next();
    }

      res.locals.rendelesek.forEach(rendeles => {
        rendeles.remove((err)=>{
          if (err){
            return next(err);
          }
    
        })
      });
      return res.redirect('/asztalok');
      };
 
};
