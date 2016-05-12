// “EventEmitter” is in scope at this time
function FriendsEmitter(options) {
	EventEmitter.call(this, options);
	for (option in options) {
		type = typeof config[option];
		if (type === ‘string’ || type === ‘array’) {
			this[option] = options[option];
		}
	}
}
FriendsEmitter.prototype = Object.create(EventEmitter.prototype);
FriendsEmitter.prototype.constructor = FriendsEmitter;
var instance = FriendsEmitter(auth : new String(‘XF - 254’));