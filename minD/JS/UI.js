class UI {
	constructor() {
		this._init();
	}

	_init() {
		this._login_view = document.getElementById("login-form");
		this._all_users_view = document.getElementById("all-users-view");
		
		this.hide_all();
		
		if(cache.get_last_user() == null) {
			this.show_all_users();
		} else {
			userProfile.change_to(cache.get_last_user());
			cache.set_last_user(cache.get_last_user());
			this.show_login_view();
		}
	}
	
	hide_all() {
		this._login_view.style.display = 'none';
		this._all_users_view.style.display = 'none';
	}
	
	show_all_users() {
		logger.show_message("Showing users selector");
		this._all_users_view.style.display = 'flex';
	}
	
	show_login_view() {
		logger.show_message("Showing login");
		document.getElementById("login-userFace").src = userProfile.get_face();
		document.getElementById("login-username").innerHTML = userProfile.get_name();
		document.getElementById("login-session").value = session.get_name();
		this._login_view.style.display = 'flex';
	}
}