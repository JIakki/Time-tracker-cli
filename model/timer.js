const json = require('jsonfile')
const path = require('path')
const jsonFile =  path.join(__dirname ,  '../data/timer.json');

const format = require('../service/secondToTime') 

class Timer {
	constructor(timer) {
		this.data = timer;
		this.working = false;
	}

	start() {
		this.interval = setInterval(() => {
			this.data.value++;
			this.save()
		}, 1000);

		this.working = true;
	}

	stop() {
		clearInterval(this.interval)
		this.working = false;
	}

	clear() {
		this.data.value = 0;
	}

	remove() {
		this.stop();
		var object = remove(this.data);
		json.writeFile(jsonFile, object)
	}

	getTime() {

		return format(this.data.value);
	}

	save() {
		var object = objectToSave(this.data);

		json.writeFile(jsonFile, object)
	}
}

module.exports = Timer;


//-------------------- Secondary -----------------------
//


/**
 * push or change array in existing file
 * @param  {Object} object [description]
 * @return {Object}        [description]
 */
function objectToSave(object) {
	var file = json.readFileSync(jsonFile)
	var isChanged = false;

	for(var key in file) {
		if(file[key].id === object.id) {
			file[key] = object;
			isChanged = true;
			break;
		}
	}

	if(!isChanged) {
		file.push(object);
	}

	return file;
}

function remove(object) {
	var file = json.readFileSync(jsonFile)

	for(var key in file) {
		if(file[key].id === object.id) {
			file.splice(key, 1)
			break;
		}
	}

	return file;
}