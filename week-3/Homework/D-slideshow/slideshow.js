// Write your code here
let images = ["https://i.picsum.photos/id/363/500/300.jpg?hmac=LZnmPmpU0TqF3LE_p3fn--rmS-Qwlc3pXmBS-Aax_2k",
    "https://i.picsum.photos/id/873/500/300.jpg?hmac=MaOLNl8Rq7sIFnpBxV3uQew2CnvIrLwwemAL0x2m3Ro",
    "https://i.picsum.photos/id/986/500/300.jpg?hmac=VNdFf-SwoXXp9atenZEY4ONnQq4p6sv2aSBazDbzpFA",
    "https://i.picsum.photos/id/404/500/300.jpg?hmac=Ahiv5FvBIWej0gwMR4rBSjLtQ6kbOyd6zblZ8cxGbF0"
]
let counter = 0;
let image = document.createElement("img");
image.src = images[counter];
let backInterval;
let forwardInterval;

let mainContainer = document.querySelector(".main-container");
let buttonsGroup = document.createElement("div");
let buttonManualBack = document.createElement("button");
let buttonManualForward = document.createElement("button");
let buttonAutoBack = document.createElement("button");
let buttonStop = document.createElement("button");
let buttonAutoForward = document.createElement("button");

buttonsGroup.classList.add("buttons-group");
buttonManualForward.innerHTML = "Forward";
buttonManualBack.innerHTML = "Back";
buttonStop.innerHTML = "Stop";
buttonAutoBack.innerHTML = "Auto-back";
buttonAutoForward.innerHTML = "Auto-forward";

mainContainer.appendChild(image);
buttonsGroup.appendChild(buttonManualBack);
buttonsGroup.appendChild(buttonAutoBack);
buttonsGroup.appendChild(buttonStop);
buttonsGroup.appendChild(buttonAutoForward);
buttonsGroup.appendChild(buttonManualForward);
mainContainer.appendChild(buttonsGroup);

buttonManualBack.addEventListener("click", moveBack);
buttonManualForward.addEventListener("click", moveForward);


function moveBack() {
    if (counter === 0) {
        counter = images.length - 1;
    } else {
        counter = counter - 1
    }
    return image.src = images[counter];
}

function moveForward() {
    if (counter === images.length - 1) {
        counter = 0
    } else {
        counter = counter + 1
    }
    return image.src = images[counter];
}
buttonAutoForward.addEventListener("click", () => {
    clearInterval(backInterval);
    forwardInterval = setInterval(moveForward, 1500)
})
buttonAutoBack.addEventListener("click", () => {
    clearInterval(forwardInterval);
    backInterval = setInterval(moveBack, 1500)
})
buttonStop.addEventListener("click", () => {
    for (i = 0; i < 100; i++) {
        window.clearInterval(i);
    }
})