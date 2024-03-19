var currentDate = new Date();

var options = { day: '2-digit', month: 'short', year: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', options);

// Update the content of the h5 element with the current date
document.getElementById('datePlaceholder').textContent = formattedDate;


document.getElementById('showModalButton').addEventListener('click', function() {
$('#exampleModal').modal('show');
});

document.getElementById('closebutton1').addEventListener('click', function() {

$('#exampleModal').modal('hide');
});

document.getElementById('closebutton2').addEventListener('click', function() {
$('#exampleModal').modal('hide');
});

function login() {
    var email = document.getElementById('email').value;
    console.log(email);
    var password = document.getElementById('password').value;

    if (email.endsWith("@pec.edu.in")) {
        alert("Welcome!");
        
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid ID");
    }

}

function saveChanges() {
    var title = document.getElementById('titleInput').value;
    console.log(title);
    var message = document.getElementById('messageInput').value;
    var club = document.getElementById('clubInput').value;

    var data = {
        title: title,
        message: message,
        club: club
    };

    fetch('your-backend-endpoint', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);

        $('#exampleModal').modal('hide');
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}
function popOut() {
    var email = document.getElementById("email").value;

    if (email.endsWith("@pec.edu.in")) {
        alert("Mail Sent");
    } else {
        alert("Invalid Email ID");
    }
}
