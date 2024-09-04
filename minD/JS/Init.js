async function init() {
	logger = new Logger();
	session = new UserSession();
	userProfile = new UserProfile();
	authentication = new Authentication();
	login = new Login();
	ui = new UI();
}


window.addEventListener("GreeterLoaded", init)
const greeterLoaded = new Event("GreeterLoaded");

window.dispatchEvent(greeterLoaded);