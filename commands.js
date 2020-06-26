// JavaScript source code
function doHelpCommand() {
    console.log("help function")
    return "help -- this help"
}

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