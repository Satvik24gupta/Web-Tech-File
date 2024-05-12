document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var gender = document.getElementById("gender").value;
    var color = document.getElementById("color").value;

    if (name.trim() === '' || email.trim() === '' || mobile.trim() === '' || gender.trim() === '' || color.trim() === '') {
        alert("Please fill in all fields.");
        return;
    }

    var resultText = "Name: " + name + "\n";
    resultText += "Email: " + email + "\n";
    resultText += "Mobile No: " + mobile + "\n";
    resultText += "Gender: " + gender + "\n";
    resultText += "Favourite Colour: " + color;

    document.getElementById("result").innerText = resultText;
});