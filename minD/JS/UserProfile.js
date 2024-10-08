class UserProfile {
	constructor() {
		this._init();
	}
	
	_init() {
		this._user = null;
	}
	
	change_to(user) {
		this._user = user;
	}
	
	get_name() {
		return this._user.name;
	}
	
	get_face() {
		let img;
		
		if(this._user.image == null) {
			console.log("Is null");
			img = "./src/user.png";
		} else {
			img = this._user.image;
		}
		
		return img;
	}
}
