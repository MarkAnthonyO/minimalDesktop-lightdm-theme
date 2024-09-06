class GreeterCache {
	get_last_user() {
		let user = localStorage['last-user'];
		
		if(user != null) {
			user = JSON.parse(user);
		}
		
		return user;
	}
	
	set_last_user(user) {
		logger.show_message("Changing last user to:" + user.name);
		localStorage['last-user'] = JSON.stringify(user);
	}
	
	get_last_session() {
		let session = localStorage['last-session'];
		
		if(session != null) {
			session = JSON.parse(session);
		}
	
		return session;
	}
	
	set_last_session(session) {
		logger.show_message("Changing last session to:" + session.name);
		localStorage['last-session'] = JSON.stringify(session);
	}
}