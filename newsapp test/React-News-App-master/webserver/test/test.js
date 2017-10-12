var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../../server.js");

//var url = supertest("http://localhost:3000");

var url = supertest.agent("http://localhost:3000");

describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .post("/users/")
        .expect(200)
        .send({userId:'naa',password:'naa'})
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          done();
        });
    });
});


describe("Testing the first route", function(err){
  it("should handle the request", function(done){
    url
        .post("/users/register")
        .expect(200)
        .send({userId:'naa',password:'naa'})
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          done();
        });
    });
});
