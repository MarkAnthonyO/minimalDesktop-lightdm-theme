class UserChanger {
	constructor() {
		this._init();
	}

	_init() {
		this.add_all_users();
	}
	
	add_all_users() {
		let id = 0;
		for (var user of lightdm.users) {
			const user_selector = document.createElement('img');
			
			if(user.image == null) {
				user_selector.src = "./src/user.png";
			} else {
				user_selector.src = user.image;
			}
			
			user_selector.className = "user-selector";
			user_selector.id = id;
			user_selector.addEventListener('click', this.change_to);
			
			id++;
			
			user_selector.style.cursor = 'pointer';
			document.getElementById('user-carousel').appendChild(user_selector);
		}
	}
	
	change_to(e) {
		userProfile.change_to(lightdm.users[e.target.id]);
		ui.hide_all();
		ui.show_login_view();
	}
}