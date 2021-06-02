const requireOption = require('../requireOption');
/* 
Kreál egy új asztalt ha még nincs ilyen, vagy updateli ha már volt ilyen aztán redirect /asztalok
*/


module.exports = function (objectrepository) {

  const AsztalModel = requireOption(objectrepository, 'AsztalModel');

  return function (req, res, next) {
    if ((typeof req.body.nev === 'undefined') ||
      (typeof req.body.ules === 'undefined') ){
        return next();
      }
    if(typeof res.locals.asztal === 'undefined'){
      res.locals.asztal = new AsztalModel();
    }

    res.locals.asztal.nev = req.body.nev;
    res.locals.asztal.ules = req.body.ules;

    res.locals.asztal.save(err =>{
      if (err){
        return next(err);
      }

      return res.redirect('/asztalok');
    });

  };
};
