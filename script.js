document.addEventListener("DOMContentLoaded", function() {
    const homeLink = document.querySelector('header a[href="index.html"]');
    
    if (homeLink) {
        homeLink.addEventListener("click", function(event) {
            event.preventDefault(); // Prevent the default link behavior
            
            const container = document.querySelector('.container');
            container.classList.add('fade-out'); // Add CSS class for fade-out animation
            
            // After the animation completes, redirect to the homepage
            container.addEventListener('animationend', function() {
                window.location.href = homeLink.getAttribute('href');
            }, { once: true });
        });
    }
});
document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector('form[action="login_process.php"]');
    
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the default form submission
            
            // Get the input values
            const contact = document.getElementById('contact').value;
            const password = document.getElementById('password').value;

            // Client-side validation
            if (!contact || !password) {
                alert('Please fill in all fields.');
                return;
            }

            // Show loading indicator
            const loadingIndicator = document.createElement('div');
            loadingIndicator.classList.add('loading-indicator');
            document.body.appendChild(loadingIndicator);

            // Simulate login process (replace with actual AJAX request)
            setTimeout(() => {
                // After a short delay (simulating server response time), redirect to the home page
                window.location.href = 'index.html';
            }, 2000); // Simulating 2 seconds for login process
            
        });
    }
});
