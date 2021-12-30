(function () {

    $.connection.hub.start()
        .done(function () {
            console.log("It Worked!");
            $("#chatBtn").click(function () {
                if (document.getElementById("message").value === "") {
                    alert("Please enter some value");
                    return false;
                }
                $.connection.myHub.server.announce(
                    document.getElementById("message").value
                );
                document.getElementById("message").value = "";
            });
            // $.connection.myHub.server.announce("Connected!");
        })
        .fail(function () {
            console.log("It Failed!");
        });

    $.connection.myHub.client.announce = function (message) {
        $("#welcomeMesg").append(message + "<br>");
    }

})()
