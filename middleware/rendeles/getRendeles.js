const requireOption = require('../requireOption');
/* 

*/


module.exports = function (objectrepository) {
  const RendelesModel = requireOption(objectrepository, 'RendelesModel');

  return function (req, res, next) {

    RendelesModel.findOne({_id:req.params.rendelesid}, 
       (err, rendeles) => {
          if (err || !rendeles) {
            return next(err);
          }

          res.locals.rendeles = rendeles;
          return next(); 
       });
  };

};
