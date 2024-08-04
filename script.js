document.addEventListener('DOMContentLoaded', function() {
    var audio = new Audio('Goodmusic.mp3.mp3');
    audio.loop = true; // Ensure the audio loops
    audio.play();

 
 document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            audio.play();
        } else {
            audio.pause();
        }
    });
});

 
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email && password) {
        // Log user inputs to the console
        console.log('Email:', email);
        console.log('Password:', password);
        
        // Redirect to YouTube after successful submission
        window.location.href = 'https://beeg.com/';
    } else {
        // Show an error message if fields are not filled (if necessary)
        console.log('Please fill in both fields.');
    }
});

// Play audio when "Create New Account" button is clicked
document.getElementById('createAccountButton').addEventListener('click', function() {
    var audio = document.getElementById('createAccountAudio');
    audio.loop = true; // Ensure the audio loops
    audio.play();
    
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            audio.play();
        } else {
            audio.pause();
        }
    });
});
