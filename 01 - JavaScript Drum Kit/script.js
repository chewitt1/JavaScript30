function setAnimation(keys, val){
    for(let i = 0; i < keys.length; i++){
        if(keys[i].getAttribute("data-key") == val){
            keys[i].setAttribute("class", "playing");
        }
    }
}

function setSound(val){
    let auds = Array.from(document.getElementsByTagName("audio"));
    for(let i = 0; i < auds.length; i++){
        if(auds[i].getAttribute("data-key") == val){
            auds[i].play();
        }
    }
}

//Listen for a "key up event" (I listened on document, he listens on window) (I used keyup, he uses keydown)
document.addEventListener("keyup", (event) => {
    let keys = Array.from(document.querySelectorAll(".key"));
    if (event.code === "KeyA") {
        setAnimation(keys, 65);
        setSound(65);
    }
    else if (event.code === "KeyS") {
        setAnimation(keys, 83);
        setSound(83);
    }
    else if (event.code === "KeyD") {
        setAnimation(keys, 68);
        setSound(68);
    }
    else if (event.code === "KeyF") {
        setAnimation(keys, 70);
        setSound(70);
    }
    else if (event.code === "KeyG") {
        setAnimation(keys, 71);
        setSound(71);
    }
    else if (event.code === "KeyH") {
        setAnimation(keys, 72);
        setSound(72);
    }
    else if (event.code === "KeyJ") {
        setAnimation(keys, 74);
        setSound(74);
    }
    else if (event.code === "KeyK") {
        setAnimation(keys, 75);
        setSound(75);
    }
    else if (event.code === "KeyL") {
        setAnimation(keys, 76);
        setSound(76);
    }
});

/*
    ISSUES WITH MY SOLUTION
    - Adding event listener to document instead of window
    - Using keyup instead of keydown
    - Not rewinding the sound (no immediate playback)
    - Not adding the class to the classList (I was setting it as the only class)
    - No removing class afterwards using the event properties
*/