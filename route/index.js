const renderMw = require('../middleware/render');

const getAsztalMw = require('../middleware/asztalok/getAsztal');
const getAsztalokMw = require('../middleware/asztalok/getAsztalok');
const saveAsztalMw = require('../middleware/asztalok/saveAsztal');
const delAsztalMw = require('../middleware/asztalok/delAsztal'); 

const getRendelesMw = require('../middleware/rendeles/getRendeles');
const getRendelesekMw = require('../middleware/rendeles/getRendelesek');
const saveRendelesMw = require('../middleware/rendeles/saveRendeles');
const delRendelesMw = require('../middleware/rendeles/delRendeles');
const delAllRendelesMw = require('../middleware/rendeles/delAllRendeles');

const getEtlapMw = require('../middleware/etlap/getEtlap');
const getEtlapokMw = require('../middleware/etlap/getEtlapok');
const saveEtlapMw = require('../middleware/etlap/saveEtlap');
const delEtlapMw = require('../middleware/etlap/delEtlap');

const AsztalModel = require('../models/asztal');
const RendelesModel = require('../models/rendeles');
const EtlapModel = require('../models/etlap');

module.exports = function (app) {
  const objectRepository = {
      AsztalModel: AsztalModel,
      RendelesModel: RendelesModel,
      EtlapModel: EtlapModel
  };

  
  
  // uj asztal
  app.use('/asztalok/new',
  saveAsztalMw(objectRepository),
  renderMw(objectRepository,'uj asztal'),
  );
  /**
   * 1 asztal szerkesztese
   */
  app.use('/asztalok/edit/:asztalid',
  getAsztalMw(objectRepository),
  saveAsztalMw(objectRepository),
  renderMw(objectRepository,'uj asztal')
  );

  app.get('/asztalok/del/:asztalid',
    getAsztalMw(objectRepository),
    delAsztalMw(objectRepository)
  );

  app.get('/asztalok',
  getAsztalokMw(objectRepository),
  renderMw(objectRepository,'asztalok')
  );
  
  //rendeles kezelese
  app.get('/rendeles/:asztalid/del/:rendelesid',
  getAsztalMw(objectRepository),
  getRendelesMw(objectRepository),
  delRendelesMw(objectRepository), 
  );

  app.get('/rendeles/:asztalid/delall',
  getAsztalMw(objectRepository),
  getRendelesekMw(objectRepository),
	delAllRendelesMw(objectRepository),
  );
  
  app.use('/rendeles/:asztalid',
  getAsztalMw(objectRepository),
  getRendelesekMw(objectRepository),
  saveRendelesMw(objectRepository),
  renderMw(objectRepository,'rendeles')
  );

  //etlap kezelese
  app.use('/etlap/del/:etlapid',
  getEtlapMw(objectRepository),
	delEtlapMw(objectRepository)
  );

  app.use('/etlap',
  getEtlapokMw(objectRepository),
	saveEtlapMw(objectRepository),
	delEtlapMw(objectRepository),
	renderMw(objectRepository,'etlap'),
  );

  app.use('/', 
    getAsztalokMw(objectRepository),
    renderMw(objectRepository,'asztalok')
  );


};