document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('thank-you-message').style.display = 'block';
});
