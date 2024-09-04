class UserProfile {
	constructor() {
		this._init();
	}
	
	_init() {
		this._user = null;
		
		if (lightdm.num_users == 1) {
			this.change_to(lightdm.users[0]);
		}
	}
	
	change_to(user) {
		this._user = user;
	}
	
	get_name() {
		return this._user.name;
	}
	
	get_face() {
		return this._user.image;
	}
}
