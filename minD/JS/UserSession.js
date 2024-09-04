class UserSession {
	constructor() {
		this._init();
	}
	
	_init() {
		this._actual_session = null;
		
		if (lightdm.sessions.length == 1) {
			this.change_to(lightdm.sessions[0]);
		}
	}
	
	change_to(session) {
		logger.show_message("Change to " + session.name + " session");
		this._actual_session = session;
	}
	
	get_name() {
		return this._actual_session.name;
	}
	
	get_actual() {
		return this._actual_session;
	}
}