document.getElementById('greetButton').addEventListener('click', function() {
    var name = document.getElementById('nameInput').value;
    var quotation = "Early to bed and early to rise, makes a man healthy, wealthy and wise!!";
    var greetingMessage = "Hello, " + name + "! Here's a quote for you: \"" + quotation + "\"";
    document.getElementById('greetingMessage').innerText = greetingMessage;
    });