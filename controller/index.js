const json = require('jsonfile')
const path = require('path')
const jsonFile =  path.join(__dirname ,  '../data/timer.json');

const timer = require('../model/timer');

module.exports = new class {
  getTimers() {
    return json.readFileSync(jsonFile);
  }
}