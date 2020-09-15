// JavaScript source code
var basicMode = true;
var currentDirectory = "/";

//the directory map that controlls what is seen when ls-ing, includes both files and folders. Everything is in the home directory (~ just completes to "home")
var directoryStructure = {
    "projects": {
        "_files": ["portfolio", "Yardies", "CBT", "Traincraft"],
        "folder": {
            "_files":["nope"]
        }
    },
    "anotherFolder": {
        "_files": ["thing"]
    }
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
    switch (commandArray[0].toLowerCase()) {
        case "help":
            this.echo(doHelpCommand())
            break;
        case "echo":
            this.echo(commandArray)
            break;
        case "whoami":
            this.echo("The guy sitting behind his computer/mobile phone.")
            break;
        case "whoissheen":
            doWhoIsSheen(this)
            break;
        case "ls":
            dols(this, commandArray.splice(1))
            break;
        default:
            this.error("Not a valid command: " + commandArray[0])
            break;
    }
}

function doHelpCommand() {
    console.log("help function")
    return "help -- this help\n" +
        "echo params... -- echos any parameters given in the given order, without and characters between\n" +
        "whoami -- you, the user\n" +
        "whoissheen -- idk, who is sheen? (TRY IT)\n" +
        "ls -- the classic! lists the files that you can see from where you are.\n" +
        "cd -- another classic! moves into a directory, if you can see it when you run ls then you can move into it\n" +
        "cat -- outputs the contents of a file. you can see files by also doing ls"
}

async function doWhoIsSheen(term) {
    term.pause() //Don't accept new input while sequence is running
    term.echo("Oh, you mean")
    await sleep(500)
    var sheenstring = `
      ______ _                          ______                   _
     / _____) |                        (_____ \\        _        | |
    ( (____ | |__  _____ _____ ____     _____) )____ _| |_ _____| |
     \\____ \\|  _ \\| ___ | ___ |  _ \\   |  ____(____ (_   _) ___ | |
     _____) ) | | | ____| ____| | | |  | |    / ___ | | |_| ____| |
    (______/|_| |_|_____)_____)_| |_|  |_|    \_____|  \\__)_____)\\_)
    `
    term.echo(sheenstring, "raw")
    await sleep(1000)
    term.echo("Yes, I am he. Yes, that was unneccesary.")
    await sleep(250)
    term.echo("<C O M M E N C I N G   I N T R O   S E Q U E N C E>")
    term.echo("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~")
    await sleep(500)
    term.echo("lmao nothing here yet, sorry people. try exploring? Hint: use the ls and cd commands")
    term.resume()
}

function dols(term, arguments) {
    let parsedArgs = $.terminal.parse_options(arguments, { boolean: ['l', 'a'] })
}

function docd(term, arguments) {

}

function docat(term, arguments) {

}