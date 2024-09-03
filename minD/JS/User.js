class UserProfile {
	constructor() {
		this._img = document.getElementById('userFace');
		this._name = document.getElementById('username');
		this._init();
	}
	
	_init() {
		this._name.innerHTML = lightdm.users[0].name;
		this._img.src = lightdm.users[0].image;
	}
	
	get_name() {
		return this._name.innerHTML;
	}
}
