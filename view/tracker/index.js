'use strict';


const blessed = require('blessed');
const Timer = require('../../model/timer')
const format = require('../../service/secondToTime') 

class Tracker {
  constructor(data, number, isNew) {
    this.track = new Timer(data);

    if(isNew) {
      this.track.save();
    }

    this.play = blessed.box({
      mouse: true,
      keys: true,
      style: {
        fg: '#2980B9'
      },
      content: "▶",
      width: '10%',
      left: '80%'
    });

    this.name = blessed.box({
      mouse: true,
      keys: true,
      style: {
        fg: '#2980B9'
      },
      content: "Tracker's name",
      width: '50%',
      left: '0%'
    })

    this.timer = blessed.box({
      mouse: true,
      keys: true,
      style: {
        fg: '#2980B9'
      },
      content: "11:33:33",
      width: '30%',
      left: '50%'
    })

    this.delete = blessed.box({
      mouse: true,
      keys: true,
      style: {
        fg: '#2980B9'
      },
      content: "✖",
      width: '2%',
      left: '95%'
    });
  
    if(data) {
      this.timer.setContent(`${format(data.value)}`)
      this.name.setContent(data.name)
    }
    
   this.parent = blessed.box({
      children: [this.play, this.timer, this.name, this.delete],
      mouse: true,
      style: {
        fg: '#2980B9'
      },
      width: '90%',
      left: '5%',
      height: '10%',
      top: number
    });

    this.events();

    return this.parent;
  }

  events() {
    this.play.on('click', () => {
      if( this.track.working) {
        this.play.setContent('▶')
        Screen.render()

        return this.track.stop()
      };

      this.track.start();
      this.play.setContent('■')
      Screen.render()

      this.interval = setInterval(() => {

        this.timer.setContent(this.track.getTime().toString());

        Screen.render();
      }, 1000)

    });

    this.delete.on('click', () => {
      this.parent.detach()
      this.track.remove()
      clearInterval(this.interval);
      Screen.render()
    });
  }


}

module.exports = Tracker;

