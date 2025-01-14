let createDiv
let iframe
let btn
let inputCreation
let dblclicktime = "one"

let characterList = ["ù","û", "ü", "ÿ", "à", "â", "æ", "œ", "ç", "é", "è", "ê", "ë" , "ï", "î", "ô"]


function createAccentButton(character){
    btn = document.createElement("input")
    btn.setAttribute("type", "button")
    btn.style="cursor: pointer"
    btn.value = character
    btn.addEventListener("click", () => {
        inputCreation.value = character
    })
createDiv.append(btn);
    
}
if(dblclicktime == "one"){
    createDiv = document.createElement('div')
    createDiv.style="background-color: white;"
    for(let i=0; i<characterList.length; i++){
        createAccentButton(characterList[i])
    }

    createBR = document.createElement("br")
    createBR1 = document.createElement("br")
    createDiv.append(createBR)
    createDiv.append(createBR1)

    inputCreation = document.createElement('input')
    inputCreation.setAttribute("type", "text")
    inputCreation.setAttribute("readonly", true)

    createDiv.append(inputCreation)
    document.body.append(createDiv)
    dblclicktime = "second"
}
else{
    createDiv.remove()
    dblclicktime = "one"
}