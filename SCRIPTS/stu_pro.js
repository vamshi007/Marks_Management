$("#but_get").click(() =>{
    var user = $("#1").val();
    var queryString = "?"+user;
    $("#1").val("");
    window.location.href="result.html"+queryString;
})