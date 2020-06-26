/*
 * main.js -- controls the majority of things happening, using plain js.
 * Author: Sheen (ofc)
 * Feel free to copy anything!
 */


//sleep function lmao I rely on this
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// ----------------------------- Fancy Text stuff -------------------------------
// ----------------------------/==================\------------------------------

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
        // UNDONE: THIS!
        for (i = 0; i < string.length; i++) {
            var sliced = string.slice(0, i+1)
            element.innerHTML = baseString + sliced + endString
            await sleep(100)
        }
    }
}


// can use U+258F &#x258F; (▏) or U+2588 &#x2588; (█) as a cursor

/**
 * Does the "Hi. I'm Sheen." intro sequence
 * Function will not be generalized as it is too specific for this usage.
 */
async function doIntroSequence() {
    var inputarea = document.getElementById("sequence")
    const cursorChar = "&#x2588;"
    const speed = 200

    //output the Hi
    const string = "Hi!"
    for (i = 0; i < string.length; i++) {
        inputarea.innerHTML = string.slice(0, i) + cursorChar
        await sleep(speed)
    }

    //now do a cursor blink after a line break
    inputarea.innerHTML = string + "<br />" + cursorChar
    await sleep(450) //cursor blink speed
    inputarea.innerHTML = string + "<br />"
    await sleep(450) //cursor blink speed
    inputarea.innerHTML = string + "<br />" + cursorChar

    //now add "I'm Sheen"
    const string2 = "I'm Sheen"
    for (i = 0; i <= string2.length; i++) {
        inputarea.innerHTML = string + "<br />" + string2.slice(0, i) + cursorChar
        await sleep(speed)
    }

    //infinitely blink because no more <blink> :( (honestly tho that was probably for the best)
    const wholeThing = inputarea.innerHTML.slice(0, inputarea.innerHTML.length-1) //don't want the cursor in it! 
    while (true) {
        inputarea.innerHTML = wholeThing
        await sleep(450) //cursor blink time
        inputarea.innerHTML = wholeThing + "<br />" + cursorChar
        await sleep(450)

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
