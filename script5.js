let createDiv
let iframe
let btn
let inputCreation
let dblclicktime = "one"
let createDropDown
let createBR8 = document.createElement("br")
let createBR9 = document.createElement("br")
let characterListMath = ["x", "+", "-", "÷", "=", "²", "³", "°", "½", "⅓", "𝑥", "𝝅"]
let characterList = ["ù", "û", "ü", "ÿ", "à", "â", "æ", "œ", "ç", "é", "è", "ê", "ë", "ï", "î", "ô"]
let characterOptions = ["French", "Russian", "Math/Science"]
let createX = document.createElement("p")
doubleExit = false

createX.innerHTML = "X"
createX.title = "Close popup"
createX.addEventListener("click", () => {
    createDiv.remove()
    dblclicktime = "one"
})

let createOpen = document.createElement("p")


createOpen.innerHTML = "O"
createOpen.title = "Go to TypeIt"
createOpen.addEventListener("click", () => {
    location.href = "https://www.typeit.org"
})
createOpen.style = "cursor: pointer; color: blue; width: 5%; position: absolute; top: -10%; left: 92.03%"

createOpen.addEventListener("mouseover",() => {
    createOpen.style = "cursor: pointer; color: red; width: 5%; position: absolute; top: -10%; left: 92.03%"
})
createOpen.addEventListener("mouseout",() => {
    createOpen.style = "cursor: pointer; color: blue; width: 5%; position: absolute; top: -10%; left: 92.03%"
})
createX.style = "cursor: pointer; color: blue; width: 5%; position: absolute; top: -10%; left: 95.03%"
createX.addEventListener("mouseover",() => {
    createX.style = "cursor: pointer; color: red; width: 5%; position: absolute; top: -10%; left: 95.03%"
})
createX.addEventListener("mouseout",() => {
    createX.style = "cursor: pointer; color: blue; width: 5%; position: absolute; top: -10%; left: 95.03%"
})



let createDouble = document.createElement("p")


createDouble.innerHTML = "|"
createDouble.addEventListener("click", () => {
    if(doubleExit == true){
        doubleExit = false
        createDouble.innerHTML = "|"
    }
    else{
        doubleExit = true
        createDouble.innerHTML = "—"
    }
})
createDouble.style = "cursor: pointer; color: blue; width: 5%; position: absolute; top: -10%; left: 89.03%"

createDouble.addEventListener("mouseover",() => {
    createDouble.style = "cursor: pointer; color: red; width: 5%; position: absolute; top: -10%; left: 89.03%"
})
createDouble.addEventListener("mouseout",() => {
    createDouble.style = "cursor: pointer; color: blue; width: 5%; position: absolute; top: -10%; left: 89.03%"
})









let createCheckBox = document.createElement("input")
createCheckBox.setAttribute("type", "checkbox")
createCheckBox.setAttribute("name", "dblcheckbox")
createCheckBox.setAttribute("id", "doublecheckbox")
createCheckBox.checked = true

createCheckBox.disabled = true

let createLabel = document.createElement("label")
createLabel.setAttribute("for", "createCheckBox")
createLabel.innerHTML = "4x Click Popup"


createDropDown = document.createElement("select")

if (localStorage.getItem("dblClickEnabled") == true) {
    createCheckBox.checked = true
}
function check_check() {
    if (createCheckBox.checked == true) {
        localStorage.setItem("dblClickEnabled", true)
    }
    else {
        localStorage.setItem("dblClickEnabled", false)
    }
}

// Set LocalStorage
if (localStorage.getItem("dblClickEnabled") == null || localStorage.getItem("dblClickEnabled") == true) {
    check_check()
}


createCheckBox.addEventListener("change", () => {
    check_check()
})

window.addEventListener("dblclick", () => {
    window.addEventListener("dblclick", () => {
    // if (localStorage.getItem("dblClickEnabled") == true) {

        createDropDown = document.createElement("select")

        //Create and append the options
        for (let i = 0; i < characterOptions.length; i++) {
            var option = document.createElement("option");
            option.value = characterOptions[i];
            option.text = characterOptions[i];
            createDropDown.appendChild(option);
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
            console.log("in check drop down")
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
            }
            catch (err) {
                createBR6 = document.createElement("br")
                createBR7 = document.createElement("br")

                createDiv.append(createBR6)
                createDiv.append(createBR7)
            }


            
            if (createDropDown.value == "French") {
                for (let i = 0; i < characterList.length; i++) {
                    createAccentButton(characterList[i])
                }
            }
            else if(createDropDown.value == "Math/Science"){
                for (let i = 0; i < characterListMath.length; i++) {
                    createAccentButton(characterListMath[i])
                }
            }
            else{
                alert("Go to translit.net")
            }
        }

        if (dblclicktime == "one") {
            createDiv = document.createElement('div')
            createDiv.append(createBR8)
            createDiv.append(createBR9)
            createDiv.style = "z-index: 10; background-color: white; position: absolute; top: 1%; width: 41%; overflow: auto; resize: both"
            console.log(createDropDown)
            for (let i = 0; i < characterList.length; i++) {
                createAccentButton(characterList[i])
            }

            createDiv.append(createCheckBox)
            createDiv.append(createLabel)

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
            createDiv.append(createX)
            createDiv.append(createOpen)
            createDiv.append(createDouble)

            createDiv.append(createDropDown)
            document.body.append(createDiv)

            createDropDown.addEventListener("change", () => {
                checkDropDown()
            });

            dblclicktime = "second"
        }
        else {
            if(doubleExit == true){
                createDiv.remove()
                dblclicktime = "one"
            }
        }
    // }
    // else{
    //     alert("TypeItFrench: Double-click disabled")
    // }
    })
})
// };
