var outputArea = document.getElementById("body-content")
var header = document.getElementById("header")

main()
async function main() {
    header.innerHTML = `<pre>
  ______ _                          ______                   _
 / _____) |                        (_____ \\        _        | |
( (____ | |__  _____ _____ ____     _____) )____ _| |_ _____| |
 \\____ \\|  _ \\| ___ | ___ |  _ \\   |  ____(____ (_   _) ___ | |
 _____) ) | | | ____| ____| | | |  | |    / ___ | | |_| ____| |
(______/|_| |_|_____)_____)_| |_|  |_|    \\_____|  \\__)_____)\\_)</pre>`
    output(" * portfolio-nix v. 0.0.1<br /> * Enter `help` for help", outputArea)
}

async function prettyDisplay(textToDisplay, placeToDisplay) {
    for (i = 0; i < textToDisplay.length; i++) {
        placeToDisplay.textContent += textToDisplay[i]
        await sleep(100)
    }
}

function output(text, parent) {
    var textElement = document.createElement('p')
    textElement.className = "output"
    textElement.innerHTML = text
    parent.appendChild(textElement)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}