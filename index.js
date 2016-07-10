#!/usr/bin/env node

var EventEmitter = require('events').EventEmitter;

global.TrackerEvents = new EventEmitter();


require('./view')