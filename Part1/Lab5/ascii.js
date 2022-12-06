const NORMAL_SPEED = 250;
const TURBO_SPEED = 50;
let duration = NORMAL_SPEED;
let objInterval;
let currentFrame = 0;
let presetAnimation;

function onStart(){
    if(presetAnimation !== "changeanimation"){
        presetAnimation = document.getElementById('textBox').value;
    }
    //generateAnimation();
    objInterval = setInterval(generateAnimation, duration);
}

function generateAnimation(){
    let aminationOption = document.getElementById('animation');
    let whichOne = aminationOption.options[aminationOption.selectedIndex].value;
    if(ANIMATIONS[whichOne] !== null && ANIMATIONS[whichOne] !==""){
        let arrAnimation = ANIMATIONS[whichOne].split("=====\n");
        if(presetAnimation !== null && presetAnimation !== "changeanimation"){
            arrAnimation.unshift(presetAnimation);
        }
        if(currentFrame >= arrAnimation.length){
            currentFrame = 0;
        }
        document.getElementById('textBox').value = arrAnimation[currentFrame++];
        disableAnimation(true);
    } else if(ANIMATIONS[whichOne] === null){

    } else{
        clearInterval(objInterval);
    }
}

function disableAnimation(isStart){
    document.getElementById("start").disabled = isStart;
    document.getElementById("stop").disabled = !isStart;
    document.getElementById("animation").disabled = isStart;
}

function onChangeAnimation() {
    document.getElementById("textBox").value = "";
    presetAnimation = "";
}

function onStop(){
    disableAnimation(false);
    clearInterval(objInterval);
    if(presetAnimation !== null && presetAnimation !=="" && presetAnimation !== "changeanimation"){
        document.getElementById('textBox').value = presetAnimation;
    }
}

function onChangeSize(){
    document.getElementById("textBox").style.fontSize = document.getElementById("size").value;
}

function onCheckSpeed(){
    let valueChecked = document.getElementById("speed").checked;
    duration = valueChecked ? TURBO_SPEED : NORMAL_SPEED;
    let myTextArea = document.getElementById("textBox").value;
    if(myTextArea !== null && myTextArea === ""){
        clearInterval(objInterval);
        objInterval = setInterval(generateAnimation, duration);
    }
}