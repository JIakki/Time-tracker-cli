'use strict';

const blessed = require('blessed');
var shortid = require('shortid');
const controller = require('../../controller');


let tracker = require('../tracker');

var elements = controller.getTimers();

var count;

let element = blessed.box({
  scrollable: true,
  children: elements.map((e, i) => {
    let index = count !== undefined ? count + 2 : i;
    count = index;
    return new tracker(e,  index)
  }),
  mouse: true,
  width: '100%',
  height: '80%',
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
  },
  left: '0%',
  top: '20%'
});

TrackerEvents.on('add', function(name) {
  count = count === undefined ? count = 0 : (count + 2)
  element.append(new tracker({"value":0,"name": name,"id": shortid.generate()}, count, true ))
  Screen.render()
});


module.exports = element;