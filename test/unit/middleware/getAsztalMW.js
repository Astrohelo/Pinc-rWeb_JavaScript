const expect = require('chai').expect;
const getAsztalMw = require('../../../middleware/asztalok/getAsztal');

describe('getUserList middleware ', function () {

  it('should set res.locals.asztal with an asztal object from db', function (done) {
    const mw = getAsztalMw({
        AsztalModel:{
            findOne: (p1,cb)=> {
                expect(p1).to.be.eql({_id: '22' });
                cb(null,'mockasztal');
            }
        }
    });

    const resMock= {
        locals: {}
    };
    mw({
        params:{
            asztalid: '22'
        }
    },resMock,
    (err)=>{
        expect(err).to.be.eql(undefined);
        expect(resMock.locals).to.be.eql({asztal: 'mockasztal' });
        done();
    });

  });

  it('should call next with error', function (done) {
    const mw = getAsztalMw({
        AsztalModel:{
            findOne: (p1,cb)=> {
                expect(p1).to.be.eql({_id: '22' });
                cb('hiba',null);
            }
        }
    });

    const resMock= {
        locals: {}
    };
    mw({
        params:{
            asztalid: '22'
        }
    },resMock,
    (err)=>{
        expect(err).to.be.eql('hiba');
        done();
    });

  });
  it('should call next when no asztal is found in db', function (done) {
    const mw = getAsztalMw({
        AsztalModel:{
            findOne: (p1,cb)=> {
                expect(p1).to.be.eql({_id: '22' });
                cb(undefined,null);
            }
        }
    });

    const resMock= {
        locals: {}
    };
    mw({
        params:{
            asztalid: '22'
        }
    },resMock,
    (err)=>{
        expect(err).to.be.eql(undefined);
        done();
    });

  });
});