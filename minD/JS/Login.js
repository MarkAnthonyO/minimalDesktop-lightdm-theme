class Login {
	login() {
		logger.show_message('Logged in: ' + lightdm.authentication_user + ' - ' + session.get_name());

		$("#bg").fadeOut(800, function() {
			setTimeout(function() {lightdm.start_session_sync(session.get_actual());}, 1000);
		});
	}
}
