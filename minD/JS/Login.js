class Login {
	login() {
		logger.show_message('Logged in: ' + lightdm.authentication_user + '-' + session.get_name());
		document.getElementById('bg').style.visibility = 'hidden';
		lightdm.start_session_sync(session.get_actual());
	}
}
