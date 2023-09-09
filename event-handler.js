const EventEmitter = require('events');

class EventLogger extends EventEmitter {
  constructor() {
    super();
    this.totalEvents = [];
  }

  logEvent(title, description) {
    const timestamp = new Date();
    const event = { title, description, timestamp };
    this.totalEvents.push(event);
    this.emit('eventLogged', event);
  }

  displayEvents() {
    console.log('| event index. | event title | event timestamp |');
    this.totalEvents.forEach((event, index) => {
      console.log(`| ${index + 1} | ${event.title} | ${event.timestamp} |`);
    });
  }
}

const eventLogger = new EventLogger();

eventLogger.on('eventLogged', (event) => {
  console.log(`Event logged: ${event.title}`);
});

// Example Usage
eventLogger.logEvent('Meeting', 'Team meeting at 2 PM');
eventLogger.logEvent('Presentation', 'Client presentation at 4 PM');

eventLogger.displayEvents();







