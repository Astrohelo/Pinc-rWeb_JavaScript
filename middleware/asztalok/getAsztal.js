const requireOption = require('../requireOption');
/* 
Megadja az asztalidnek megfelelo asztalt
-ha nincs ilyen id  redirect /asztalok
*/


module.exports = function (objectrepository) {
  const AsztalModel = requireOption(objectrepository, 'AsztalModel');

  return function (req, res, next) {

    AsztalModel.findOne({_id: req.params.asztalid}, 
       (err, asztal) => {
          if (err || !asztal) {
            return next(err);
          }

          res.locals.asztal = asztal;
          return next(); 
       });
  };

};
