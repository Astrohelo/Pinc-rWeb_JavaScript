const requireOption = require('../requireOption');
/* 
Betolti az osszes asztalt a vegeredmeny res.locals.asztalok-ban 
*/


module.exports = function (objectrepository) {
  const AsztalModel = requireOption(objectrepository, 'AsztalModel');

  return function (req, res, next) {

    AsztalModel.find({},  (err, asztalok) => {
      if (err) {
        return next(err);
      }
      res.locals.asztalok = asztalok;
      return next();

    });

  };

};
