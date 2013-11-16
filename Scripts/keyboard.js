var Key = {
	_pressed: {},

	A: 65,
	W: 87,
	D: 68,
	S: 83,
	P: 80,
	R: 82,
	ENTER: 13,
	SPACE: 32,


	isDown: function(keyCode) {
		return Key._pressed[keyCode];
	},

	onKeydown: function(event) {
		Key._pressed[event.which] = true;
	},

	onKeyup: function(event) {
		delete Key._pressed[event.which];
	}
};


