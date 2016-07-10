const should = require('should');

const Timer = require('../model/timer');
const controller = require('../controller');

const json = require('jsonfile')
const path = require('path');
const jsonFile =  path.join(__dirname ,  '../data/timer.json');

var testObject = {value: 20, name: "Time out", id: 1}
var timer1 = new Timer(testObject);

describe('Timer', () => {
	afterEach(() => {
		timer1.stop();
		timer1.clear();
	});


  it('timer count', (done) => {
  	timer1.start();

  	setTimeout(() => {
  		let prev = timer1.getTime();
  		
  		if(timer1.getTime() === prev) done();	

  	}, 1000);

  });

  it('timer stop', (done) => {
  	timer1.start();
  	timer1.stop();
  	let prev = timer1.getTime();

  	setTimeout(() => {
  		if(timer1.getTime() === prev) done();

  	}, 1000);
  })
});

describe('Save', () => {
  it('should change', () => {
    new Timer(testObject).start()

    json.readFileSync(jsonFile).should.containEql(testObject)
  })
})

describe('Contriller', () => {
  it('getFile', () => {
    controller.getTimers().should.be.an.Array()
  }) 
})