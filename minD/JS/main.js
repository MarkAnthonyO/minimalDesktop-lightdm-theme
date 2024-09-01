let img = document.getElementById('userFace');
let username = document.getElementById('username');
let bg = document.getElementById('bg');
let password = document.getElementById('password');
let sessions = document.getElementById('sessions');

username.innerHTML = lightdm.users[0].name;
img.src = lightdm.users[0].image;

for(var session of lightdm.sessions) {
	var opt = document.createElement('option');
	opt.value = session;
	opt.innerHTML = session.name;
	sessions.appendChild(opt);
}

form.addEventListener('submit', function(e) {
	lightdm.respond(password.value);
});

form.addEventListener('change', function(e) {
	lightdm.authenticate(username.innerHTML);
});

window.show_error = function (e) {
        console.log('Error: ' + e);

    };
    window.show_prompt = function (e) {
        console.log('Prompt: ' + e);
    };

window.authentication_complete  = function() {
	if (lightdm.is_authenticated) {
		show_prompt('Logged in: ' + lightdm.authentication_user + '-' + lightdm.sessions[0].name);
		bg.style.visibility = 'hidden';
		lightdm.start_session_sync(lightdm.sessions[0]);
	} else {
		window.alert("Algo no esta bien");
	}
}

window.start_authentication = function (username) {
        lightdm.cancel_timed_login();
        lightdm.start_authentication(username);
};
