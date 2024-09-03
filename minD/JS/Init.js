async function init() {
	logger = new Logger();
	authentication = new Authentication();
	login = new Login();
	userProfile = new UserProfile();
	sessions = new Sessions();
	
	logger.show_message("Greeter loaded");
	logger.show_message("Actual user: " + userProfile.get_name());
	logger.show_message("Actual session: " + sessions.get_actual().name);
}


window.addEventListener("GreeterLoaded", init)
const greeterLoaded = new Event("GreeterLoaded");

window.dispatchEvent(greeterLoaded);