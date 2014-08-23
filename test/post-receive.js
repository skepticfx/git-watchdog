var request = require('supertest');
var should = require('should');
var app = require('../app');

var payload = require('./payload.json');

describe('post-recieve', function(){
  it('simple github test', function(done){
    request(app)
      .post('/')
      .send(payload)
      .end(function(err, res){
        should.not.exist(err)
        res.should.be.json
        res.body.success.should.be.exactly(true)
        console.log(res.body)
        done()
      })
  })
})