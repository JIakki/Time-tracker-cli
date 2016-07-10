'use strict';

const blessed = require('blessed');
	
// Child

var apply = blessed.box({
	mouse: true,
	keys: true,
	style: {
		fg: '#2980B9'
	},
	content: "Apply",
	left: '100%',
	width: 10,
});

let element = blessed.textbox({
  label: ' New Task ',
  children: [apply],
  padding: {
  	left: 3
  },
	content: '',
	border: 'line',
	style: {
		fg: 'blue',
		bg: 'default',
		bar: {
			bg: 'default',
			fg: 'blue'
		},
		border: {
			fg: 'default',
			bg: 'default'
		}
	},
	width: '50%',
	height: 3,
	top: 0,
	keys: true,
	vi: true,
	mouse: true
});


element.on('focus', function() {
  element.readInput();
});

element.on('submit', () => {
	TrackerEvents.emit('add', element.value)
})
apply.on('click', () => {
	TrackerEvents.emit('add', element.value)
})


module.exports = element;