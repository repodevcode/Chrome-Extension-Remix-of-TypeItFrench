let createDiv
let iframe
let btn
let inputCreation
let dblclicktime = "one"
let createDropDown
let uppercaseCheckedTimes = 0
let characterListMath = ["x", "+", "-", "÷", "=", "²", "³", "°", "½", "⅓", "𝑥", "𝝅"]
let characterList = ["ù", "û", "ü", "ÿ", "à", "â", "æ", "œ", "ç", "é", "è", "ê", "ë", "ï", "î", "ô"]
let characterOptions = ["French", "Russian", "Math/Science"]


createDropDown = document.createElement("select")

function uppercaseChecked(list) {
    let createBri = document.createElement("br")
    createDiv.appendChild(createBri)
    let createBri1 = document.createElement("br")
    createDiv.appendChild(createBri1)
        let uppercaseList = toUppercase(list)
        for (let i = 0; i < uppercaseList.length; i++) {
            createAccentButton(uppercaseList[i])
        }
        document.getElementById("theCheckbox").disabled = true

}

//Create and append the options
for (let i = 0; i < characterOptions.length; i++) {
    var option = document.createElement("option");
    option.value = characterOptions[i];
    option.text = characterOptions[i];
    createDropDown.appendChild(option);
}

function toUppercase(list) {
    let newList = list.toString()
    newList = newList.toUpperCase().replaceAll(",", "")

    // newList = newList.split("")
    return newList
}

function createCheckbox(label, appendLocation, id, onCheckFunc, onCheckFuncDetails) {
    let createCheckbox = document.createElement("input")
    createCheckbox.type = "checkbox"
    createCheckbox.id = id

    createCheckbox.addEventListener("click", function () {
        onCheckFunc(onCheckFuncDetails)
    })
    let createCheckboxLabel = document.createElement("label")
    createCheckboxLabel.innerHTML = label
    appendLocation.appendChild(createCheckbox)
    appendLocation.appendChild(createCheckboxLabel)

}

function createAccentButton(character) {
    btn = document.createElement("input")
    btn.setAttribute("type", "button")
    btn.setAttribute("class", "OurButton")
    btn.style = "cursor: pointer"
    btn.value = character
    btn.addEventListener("click", () => {
        inputCreation.value = character
    })
    createDiv.append(btn);
}

function checkDropDown() {
    console.log(document.getElementsByClassName("OurButton").length)
    let countElements = document.getElementsByClassName("OurButton").length
    for (let i = 0; i < countElements; i++) {
        console.log(document.getElementsByClassName("OurButton")[0] + " - removing")
        document.getElementsByClassName("OurButton")[0].remove()
    }

    try {
        createBR6.remove()
        createBR7.remove()

        createBR6 = document.createElement("br")
        createBR7 = document.createElement("br")

        createDiv.append(createBR6)
        createDiv.append(createBR7)
    } catch (err) {
        createBR6 = document.createElement("br")
        createBR7 = document.createElement("br")

        createDiv.append(createBR6)
        createDiv.append(createBR7)
    }


    if (createDropDown.value == "French") {
        for (let i = 0; i < characterList.length; i++) {
            createAccentButton(characterList[i])
        }
        document.getElementById("theCheckbox").disabled = false
    } else if (createDropDown.value == "Math/Science") {
        for (let i = 0; i < characterListMath.length; i++) {
            createAccentButton(characterListMath[i])
            document.getElementById("theCheckbox").disabled = true

        }
    } else {
        alert("Go to translit.net")
        document.getElementById("theCheckbox").disabled = true

    }
    document.getElementById("theCheckbox").checked = false
}

if (dblclicktime == "one") {
    createDiv = document.createElement('div')
    createDiv.style = "background-color: white;"
    console.log(createDropDown)
    for (let i = 0; i < characterList.length; i++) {
        createAccentButton(characterList[i])
    }
    createBR = document.createElement("br")
    createBR1 = document.createElement("br")
    createBR2 = document.createElement("br")
    createBR3 = document.createElement("br")
    createDiv.append(createBR)
    createDiv.append(createBR1)


    inputCreation = document.createElement('input')
    inputCreation.setAttribute("type", "text")
    inputCreation.setAttribute("readonly", true)
    // iframe = document.createElement('iframe');
    // iframe.src = 'https://french.typeit.org/';
    // iframe.style = "width: 100%"


    createDiv.append(inputCreation)
    createDiv.append(createBR2)
    createDiv.append(createBR3)

    createDropDown.addEventListener("change", () => {
        checkDropDown()
    });
    createDiv.append(createDropDown)
    document.body.append(createDiv)
    dblclicktime = "second"
} else {
    createDiv.remove()
    dblclicktime = "one"
}

createCheckbox("Uppercase", createDiv, "theCheckbox", uppercaseChecked, characterList)
// createCheckbox("Lowercase", createDiv, alert, "")

