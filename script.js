   document.addEventListener('DOMContentLoaded', function() {
      var audio = document.getElementById('backgroundAudio');
      audio.loop = true; // Ensure the audio loops
      audio.volume = 1.0; // Set volume to 100%

      // Play the audio when the page loads
      audio.play().catch(function(error) {
        console.error('Audio playback failed:', error);
    });

    // Ensure the audio continues to play when the tab is active and stops when the tab is not active
    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            audio.play().catch(function(error) {
                console.error('Audio playback failed:', error);
            });
        } else {
            audio.pause();
        }
    });

    // Play audio when "Log In" button is clicked
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });

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
      
    // Play audio when "container" is clicked
    document.getElementById('container').addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    });
      
    // Play audio when "header" is clicked
    document.getElementById('header').addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    });
      
    // Play audio when "login-box" is clicked
    document.getElementById('login-box').addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    });
      
    // Play audio when "loginForm" is clicked
    document.getElementById('loginForm').addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    });
      
    // Play audio when "email" is clicked
    document.getElementById('email').addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    });
      
    // Play audio when "password" is clicked
    document.getElementById('password').addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    });
      
    // Play audio when "loginButton" is clicked
    document.getElementById('loginButton').addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    });
      
    // Play audio when "Forgotten password?" link is clicked
    document.getElementById('forgotPasswordLink').addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    });

    // Play audio when "Create New Account" button is clicked
    document.getElementById('createAccountButton').addEventListener('click', function() {
        audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    });
});











