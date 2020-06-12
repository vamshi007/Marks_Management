$("#but_get").click(() =>{
    var user = $("#1").val();
    var password = $("#2").val();
    $("#1").val("");
    if (!user.localeCompare("19MCMI05") && !password.localeCompare("123456789")) {
        window.location.href="selectOption.html";        
    } else {
        alert("invalid username or password");   
    }
})