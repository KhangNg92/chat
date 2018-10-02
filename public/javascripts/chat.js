var socket = io();


$("#chat-input").keydown(function(event) {
      if (event.keyCode == 13) {
          event.preventDefault();
          if ($("#chat-input").val() != "") {
              socket.emit("chat-message", $("#chat-input").val());
              $("#chat-input").val("");
          }
      }
});


socket.on("chat-message", function(message) {
    $("#chat-container").append(message + "<br />")
});
