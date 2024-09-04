class Authentication {
	constructor() {
		this._init();
	}

	_init() {
		window.authentication_complete  = function() {
			logger.show_message("Authentication complete");
			if (lightdm.is_authenticated) {
				login.login();
			} else {
				window.alert("Password incorrect");
			}
		}
		
		window.start_authentication = function (username) {
			logger.show_message("Starting authentication");
        		lightdm.cancel_timed_login();
        		lightdm.start_authentication(username);
		}
		
		document.getElementById('login-form').addEventListener('change', function(e) {
			start_authentication(userProfile.get_name());
			lightdm.authenticate(userProfile.get_name());
		});
		
		document.getElementById('login-form').addEventListener('submit', function(e) {
			let password = document.getElementById('login-password');
			lightdm.respond(password.value);
		});
	}
	
	
	
}