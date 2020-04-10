var outputArea = document.getElementById("body-content")
var header = document.getElementById("header")


$(function () {
    $('#terminal').terminal(doCommand, {
        greetings: " * portfolio-nix v. 0.0.2\n * Enter `help` for help"
    });
});










function doCommand(command) {

    this.echo($.terminal.parse_options(["-x", "foo", "-aby", "bar"], { boolean: ['y'] }));

    console.log("Doing command")
    //create the array of parts of command where first index is command
    var commandArray = command.split(" ")
    var i = 0;
    while (i < commandArray.length) {
        if (commandArray[i] == "") {
            var d = commandArray.splice(i, 1)
            continue //this is not going to do the same index
        }
        i++
    }

    console.log(commandArray)
    //do a switch based on commands and args
    switch (commandArray[0]) {
        case "HELP":
            this.echo(doHelpCommand())
            break;
    }
}

/*
async function prettyDisplay(textToDisplay, placeToDisplay) {
    for (i = 0; i < textToDisplay.length; i++) {
        placeToDisplay.textContent += textToDisplay[i]
        await sleep(100)
    }
}

function output(text, parent) {
    parent = parent || outputArea
    var textElement = document.createElement('p')
    textElement.className = "output"
    textElement.innerHTML = text
    parent.appendChild(textElement)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function logKeyCommand(event) {
    var keyCode = event.keyCode
    var key = event.key
    if (keyCode == 13) {
        //because it is enter, call the right function...
        doCommand(currentCommandString)
        currentCommandString = ""
        document.getElementById("mainInput").text = ""
    } else if (/[a-zA-Z0-9-_ ?!]/gmi.test(String.fromCharCode(keyCode))) {
        currentCommandString += key
        console.log(currentCommandString)
    } else {
        //reject and remove from input.
    }
}
*/
