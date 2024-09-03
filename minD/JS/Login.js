class Login {
	login() {
		logger.show_message('Logged in: ' + lightdm.authentication_user + '-' + sessions.get_actual().name);
		bg.style.visibility = 'hidden';
		lightdm.start_session_sync(sessions.get_actual());
	}
}
