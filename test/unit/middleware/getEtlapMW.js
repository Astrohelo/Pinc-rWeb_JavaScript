const expect = require('chai').expect;
const getEtlapMw = require('../../../middleware/etlap/getEtlap');

describe('getUserList middleware ', function () {

  it('should set res.locals.etlap with an etlap object from db', function (done) {
    const mw = getEtlapMw({
        EtlapModel:{
            findOne: (p1,cb)=> {
                expect(p1).to.be.eql({_id: '33' });
                cb(null,'mocketlap');
            }
        }
    });

    const resMock= {
        locals: {}
    };
    mw({
        params:{
            etlapid: '33'
        }
    },resMock,
    (err)=>{
        expect(err).to.be.eql(undefined);
        expect(resMock.locals).to.be.eql({etlap: 'mocketlap' });
        done();
    });

  });

  it('should call next with error', function (done) {
    const mw = getEtlapMw({
        EtlapModel:{
            findOne: (p1,cb)=> {
                expect(p1).to.be.eql({_id: '33' });
                cb('hiba',null);
            }
        }
    });

    const resMock= {
        locals: {}
    };
    mw({
        params:{
            etlapid: '33'
        }
    },resMock,
    (err)=>{
        expect(err).to.be.eql('hiba');
        done();
    });

  });
  it('should call next when no etlap is found in db', function (done) {
    const mw = getEtlapMw({
        EtlapModel:{
            findOne: (p1,cb)=> {
                expect(p1).to.be.eql({_id: '33' });
                cb(undefined,null);
            }
        }
    });

    const resMock= {
        locals: {}
    };
    mw({
        params:{
            etlapid: '33'
        }
    },resMock,
    (err)=>{
        expect(err).to.be.eql(undefined);
        done();
    });

  });
});