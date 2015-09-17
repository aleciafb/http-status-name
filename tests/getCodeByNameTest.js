
var   assert 		= require("assert")
	, chai 			= require("chai");

var status = require("../index");

describe('Module http-status-name', function(){
 	it('should return a name Moved_Permanently for statuscode 301', function(){
    	name = status(301);

    	chai.expect( name ).to.be.a('String');
    	chai.expect( name ).to.equal('Moved_Permanently');
 	});

 });
