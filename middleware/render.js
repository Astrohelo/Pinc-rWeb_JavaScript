/* 
Ő vegzi a renderelest.
*/
const requireOption = require('../middleware/requireOption').requireOption;

module.exports = function(objectrepository, viewName){

    return function(req,res){
        res.render(viewName);
    };

};