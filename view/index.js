


const blessed = require('blessed');

global.Screen = blessed.screen({
	smartCSR: true
});

Screen.key(['q', 'C-c'], (ch, key) => {
	return process.exit(0);
});

// UI
const control = require('./control');
const list = require('./list');

// Append to screen
Screen.append(control);
Screen.append(list);

Screen.render();

