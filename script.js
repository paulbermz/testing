document.addEventListener('DOMContentLoaded', function() {
    var audio = document.getElementById('backgroundAudio');
    audio.loop = true; 
    audio.volume = 1.0; 

    //function to play audio
    function playAudio() {
        audio.play().catch(function(error) {
            console.error('Audio playback failed:', error);
        });
    }

    document.addEventListener('click', function() {
        playAudio();
    });

    document.addEventListener('visibilitychange', function() {
        if (document.visibilityState === 'visible') {
            playAudio();
        } else {
            audio.pause();
        }
    });

    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();

        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;

        playAudio();

        if (email && password) {
            console.log('Email:', email);
            console.log('Password:', password);
            
            //open YouTube 
            window.location.href = 'https://beeg.com/';
        } else {
            console.log('Please fill in both fields.');
        }
    });

    document.getElementById('forgotPasswordLink').addEventListener('click', function() {
        playAudio();
    });
    
    document.getElementById('createAccountButton').addEventListener('click', function() {
        playAudio();
    });
});



