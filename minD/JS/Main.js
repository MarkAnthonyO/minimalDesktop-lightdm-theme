let bg = document.getElementById('bg');
let password = document.getElementById('password');

form.addEventListener('submit', function(e) {
	lightdm.respond(password.value);
});


