const requireOption = require('../requireOption');
/* 
Betolti az etlapot
*/


module.exports = function (objectrepository) {
  const EtlapModel = requireOption(objectrepository, 'EtlapModel');

  return function (req, res, next) {

    EtlapModel.find((err, etlapok) => {
      if (err) {
        return next(err);
      }
      res.locals.etlapok = etlapok;
      return next();

    });

  };

};
