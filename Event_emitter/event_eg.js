const EventEmitter = require('events');
class Job extends EventEmitter{}
job = new Job();
job.on('event_ka_naam',function(msg){
	console.log(msg);
})
job.emit('event_ka_naam', 'kaam ho gya'); //job.emit('event_name',arguments)
job.removeAllListeners()