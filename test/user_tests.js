var chai = require('chai');
var expect = chai.expect;
var GitHub = require('../api/getUser')




describe('axios test', function() {

    it('should return status 200', function(done) {
        GitHub.getUser()
            .then(function(response){
                expect(response.status).to.equal(200)
                done()
            })
            .catch(function(error){
                done(error)
            })
    });

    it('should contain users name', function(done){
        GitHub.getUser()
            .then(function(response){
                expect(response.data).to.have.deep.property('name')
                expect(response.data['name']).to.equal('Christopher')
                done()
            })
            .catch(function(error){
                done(error)
            })
    });


});





