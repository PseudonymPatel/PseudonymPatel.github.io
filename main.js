//var outputArea = document.getElementById("body-content")
//var header = document.getElementById("header")

//Adds terminal object to class terminal.
$(function () {
    $('#terminal').terminal(doCommand, {
        greetings: " * portfolio-nix v. 0.0.2\n * Enter `help` for help"
    });
});

//Handles what happens when the user types in a command (raw string)
function doCommand(command) {

    //this.echo($.terminal.parse_options(["-x", "foo", "-aby", "bar"], { boolean: ['y'] }));

    console.log("Doing command")
    //create the array of parts of command where first index is command
    var commandArray = command.split(" ")
    var i = 0;
    while (i < commandArray.length) {
        if (commandArray[i] == "") {
            var d = commandArray.splice(i, 1)
            continue //this is not going to do the same index <- this should be fixed, Imma leave it here just in case because I haven't touched this in months and have not written any notes about it lol. I'm turning into a valve programmer oh god.
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


/**
 * This function handles the Google-Docs like deletion and reprinting of text.
 * It will rotate the text between startIndex and endIndex with an array of strings.
 * 
 * @param {HTMLElement} element The element that will be continuously modified by the function.
 * @param {[String]} textToRotate A array of strings to cycle through
 * @param {Number} startIndex The index of the innerHTML in element where the text rotation replacement should start.
 * @param {Number} endIndex The index of the inerHTML in element where the text replacement should end.
 * @param {Boolean} forever Whether or not to repeat replacement forever, default = true
 * 
*/
async function rotatingText(element, textToRotate, startIndex, endIndex = startIndex, forever = true) {
    var index = 0
    var baseString = element.innerHTML.slice(0, startIndex)
    var endString = element.innerHTML.slice(startIndex)
    if (endIndex != startIndex) {
        var offset = endIndex - startIndex
        endString = element.innerHTML.slice(startIndex + offset)
    }

    //do the text replacement
    while (true) {

        //reset index if out of bounds, end if not forever.
        if (index >= textToRotate.length) {
            if (!forever) {
                return
            }
            index = 0
        }

        //string to use on this iteration
        var string = textToRotate[index]

        //need to set each character individually
        for (i = 0; i < string.length; i++) {
            var sliced = string.slice(0, i+1)
            element.innerHTML = baseString + sliced + endString
            await sleep(100)
        }
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
