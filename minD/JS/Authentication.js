class Authentication {
	constructor() {
		this._init();
	}

	_init() {
		window.authentication_complete  = function() {
			if (lightdm.is_authenticated) {
				login.login();
			} else {
				window.alert("Password incorrect");
			}
		}
		
		window.start_authentication = function (username) {
        		lightdm.cancel_timed_login();
        		lightdm.start_authentication(username);
		}
		
		document.getElementById('form').addEventListener('change', function(e) {
			lightdm.authenticate(userProfile.get_name());
		});
	}
	
	
	
}