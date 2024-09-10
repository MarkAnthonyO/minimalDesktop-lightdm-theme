async function init() {
	logger = new Logger();
	cache = new GreeterCache();
	userProfile = new UserProfile();
	userChanger = new UserChanger();
	session = new UserSession();
	authentication = new Authentication();
	background = new Background();
	
	ui = new UI();
	login = new Login();
}


window.addEventListener("GreeterLoaded", init)
const greeterLoaded = new Event("GreeterLoaded");

window.dispatchEvent(greeterLoaded);