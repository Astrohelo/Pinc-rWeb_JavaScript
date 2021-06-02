/*const requireOption = require('../requireOption');
/* 
elmenti az új rendelést



module.exports = function (objectrepository) {

  const RendelesModel = requireOption(objectrepository, 'RendelesModel');

  return function (req, res, next) {
    if ((typeof req.body.nev === 'undefined') ||
      (typeof req.body.darab === 'undefined') ){
        return next();
      }
    if(typeof res.locals.rendeles === 'undefined'){
      res.locals.rendeles = new RendelesModel();
    }

    res.locals.rendeles.nev = req.body.nev;
    res.locals.rendeles.darab = req.body.darab;
    res.locals.rendeles._asztala = res.locals.asztal._id;

    res.locals.rendeles.save(err =>{
      if (err){
        return next(err);
      }
      return res.redirect('/asztalok');
      //return res.redirect('/rendeles/${res.locals.asztal._id}');
    });

  };
};
*/
const requireOption = require('../requireOption');
/* 
Kreál egy új asztalt ha még nincs ilyen, vagy updateli ha már volt ilyen aztán redirect /asztalok
*/


module.exports = function (objectrepository) {

  const RendelesModel = requireOption(objectrepository, 'RendelesModel');

  return function (req, res, next) {
    if (
      typeof req.body.nev === 'undefined' ||
      typeof req.body.darab === 'undefined' ||
      typeof res.locals.asztal === 'undefined'
      ){
        return next();
      }
      
    if(typeof res.locals.rendeles === 'undefined'){
      res.locals.rendeles = new RendelesModel();
    }

    res.locals.rendeles.nev = req.body.nev;
    res.locals.rendeles.darab = req.body.darab;
    res.locals.rendeles._asztala = res.locals.asztal._id;

    res.locals.rendeles.save(err =>{
      if (err){
        return next(err);
      }

      return res.redirect(`/rendeles/${res.locals.asztal._id}`);
    });

  };
};
