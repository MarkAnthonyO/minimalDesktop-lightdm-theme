class Sessions {
	constructor() {
		this._init();
	}
	
	_init() {
		this._actual_session = lightdm.sessions[0];
		document.getElementById('session').value = this._actual_session.name;
	}
	
	change(id) {
		logger.show_message("Change to " + lightdm.sessions[id].name + " session");
		this._actual_session = lightdm.sessions[id];
		document.getElementById('session').innerHTML = this._actual_session.name;
	}
	
	get_actual() {
		return this._actual_session;
	}

	get_sessions() {
		return lightdm.sessions;
	}
}