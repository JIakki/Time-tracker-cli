'use strict';

const blessed = require('blessed');

global.Screen = blessed.screen({
	smartCSR: true,
  debug: true,
  dockBorders: true
	cursor: {
    artificial: true,
    shape: {
      bg: 'red',
      fg: 'white',
      bold: true,
      ch: '#'
    },
    blink: true
  }

Screen.key(['q', 'C-c'], (ch, key) => {
	return process.exit(0);
});

module.exports = Screen;