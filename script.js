let createDiv
let iframe
let btn
let inputCreation
let dblclicktime = "one"

let characterList = ["ù","û", "ü", "ÿ", "à", "â", "æ", "œ", "ç", "é", "è", "ê", "ë" , "ï", "î", "ô"]


window.addEventListener("dblclick", () => {
    function createAccentButton(character){
        btn = document.createElement("input")
        btn.setAttribute("type", "button")
        btn.style="cursor: pointer"
        btn.value = character
        createDiv.append(btn);
    
    }
    if(dblclicktime == "one"){
        createDiv = document.createElement('div')
        createDiv.style="background-color: white; position: absolute; top: 1%; width: 100%"

        createAccentButton("à")
        createAccentButton("ù")
        createBR = document.createElement("br")
        createBR1 = document.createElement("br")
        createDiv.append(createBR)
        createDiv.append(createBR1)

        inputCreation = document.createElement('input')
        inputCreation.setAttribute("type", "text")
        // iframe = document.createElement('iframe');
        // iframe.src = 'https://french.typeit.org/';
        // iframe.style = "width: 100%"


        createDiv.append(inputCreation)
        document.body.append(createDiv)
        dblclicktime = "second"
    }
    else{
        createDiv.remove()
        dblclicktime = "one"
    }
  });