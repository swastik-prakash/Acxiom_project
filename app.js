document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userType = document.getElementById('user-type').value;

        // Implement authentication logic here, e.g., sending a request to the backend
        // You can use Fetch API or Axios for making HTTP requests

        // Example of making a fetch request to the backend
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password, userType }),
        })
        .then(response => response.json())
        .then(data => {
            // Handle the response from the server, e.g., redirect to the user dashboard
            if (data.success) {
                if (userType === 'user') {
                    window.location.href = '/user-dashboard';
                } else if (userType === 'vendor') {
                    window.location.href = '/vendor-dashboard';
                } else if (userType === 'admin') {
                    window.location.href = '/admin-dashboard';
                }
            } else {
                alert('Login failed. Please check your credentials.');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission

    const userType = document.getElementById('user-type').value;

    switch (userType) {
        case 'user':
            window.location.href = 'user.html'; // Redirect to the user page
            break;
        case 'vendor':
            window.location.href = 'vendor.html'; // Redirect to the vendor page
            break;
        case 'admin':
            window.location.href = 'adminpanel.html'; // Redirect to the admin page
            break;
        default:
            alert('Invalid user type');
    }
});

// Add an event listener for the Signup link
document.getElementById('signup-link').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the default link behavior

    const userType = document.getElementById('user-type').value;

    switch (userType) {
        case 'user':
            window.location.href = 'user-signup.html'; // Redirect to the user signup page
            break;
        case 'vendor':
            window.location.href = 'vendor-signup.html'; // Redirect to the vendor signup page
            break;
        case 'admin':
            window.location.href = 'admin-signup.html'; // Redirect to the admin signup page
            break;
        default:
            alert('Invalid user type');
    }
});