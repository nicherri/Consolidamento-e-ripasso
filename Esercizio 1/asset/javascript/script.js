let ChangeColor = function(){
let newColor = randomfunction()

document.body.style.background = newColor;
ChangeColorText(newColor)
}


let randomfunction= function(){
    let letters= "123456789ABCDEF";
    let color= '#';
    for (let i=0; i<6; i++){
        color+= letters[Math.floor(Math.random() * 16)];
    }
    return color;

}

let ChangeColorText= function(newColor){
    let buttonText= document.querySelector('button')
    buttonText.style.color=newColor;
}