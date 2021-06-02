const requireOption = require('../requireOption');
/* 
Betolti az osszes asztalt a vegeredmeny res.locals.asztalok-ban 
*/


module.exports = function (objectrepository) {
  const RendelesModel = requireOption(objectrepository, 'RendelesModel');

  return function (req, res, next) {
    if(typeof res.locals.asztal ==='undefined'){
      return next();
    }

    RendelesModel.find({_asztala: res.locals.asztal._id},  (err, rendelesek) => {
      if (err) {
        return next(err);
      }
      res.locals.rendelesek = rendelesek;
      return next();

    });

  };

};
