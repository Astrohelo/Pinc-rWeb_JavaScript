/*const AsztalModel = require('./models/asztal');
const RendelesModel = require('./models/rendeles');

let egyAsztal = new AsztalModel();
egyAsztal.nev='teszt2';
egyAsztal.ules=3;
egyAsztal.save((err)=>{
    console.log(err);
    let egyRendeles =new RendelesModel();
    egyRendeles.nev='Keksz';
    egyRendeles.darab=33;
    egyRendeles._asztala=egyAsztal;
    egyRendeles.save((err)=>{
        console.log(err);
    })

})*/
const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.set('view engine','ejs');
app.use(bodyparser.urlencoded());
app.use(bodyparser.json());

app.use(express.static('static'));


//routing betoltese
require('./route/index')(app);

app.use((err,req,res,next) => {
    res.end('Problema van...');
    console.log(err);
})

app.listen(3000, function () {
    console.log("On :3000");
});

