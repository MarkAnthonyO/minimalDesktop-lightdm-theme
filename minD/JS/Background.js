class Background {
	constructor() {
		this._init();
	}

	async _init() {
		this.back_file = document.getElementById('back-file');

		document.getElementById('bg').style.setProperty('background-image', 'url("file:///usr/share/backgrounds/gnome/drool-d.svg")');
	}
}