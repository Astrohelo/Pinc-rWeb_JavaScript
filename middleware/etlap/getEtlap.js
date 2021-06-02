const requireOption = require('../requireOption');
/* 

*/


module.exports = function (objectrepository) {
  const EtlapModel = requireOption(objectrepository, 'EtlapModel');

  return function (req, res, next) {

    EtlapModel.findOne({_id:req.params.etlapid}, 
       (err, etlap) => {
          if (err || !etlap) {
            return next(err);
          }

          res.locals.etlap = etlap;
          return next(); 
       });
  };

};
