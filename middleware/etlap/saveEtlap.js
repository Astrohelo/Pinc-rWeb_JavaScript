const requireOption = require('../requireOption');
/* 
Kreál egy új asztalt ha még nincs ilyen, vagy updateli ha már volt ilyen aztán redirect /asztalok
*/


module.exports = function (objectrepository) {

  const EtlapModel = requireOption(objectrepository, 'EtlapModel');

  return function (req, res, next) {
    if (typeof req.body.nev === 'undefined'  ){
        return next();
      }
    if(typeof res.locals.etlap === 'undefined'){
      res.locals.etlap = new EtlapModel();
    }

    res.locals.etlap.nev = req.body.nev;

    res.locals.etlap.save(err =>{
      if (err){
        return next(err);
      }

      return res.redirect('/etlap');
    });

  };
};
