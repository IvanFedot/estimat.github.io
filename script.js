const url_photo = document.getElementById("url_photo");
const url_input = document.getElementById("url_input");
const oneBox_input = document.getElementById("1");
const oneBox_name = document.getElementById("1.1");
const oneBox_score = document.getElementById("1.2");
const twoBox_input = document.getElementById("2");
const twoBox_name = document.getElementById("2.1");
const twoBox_score = document.getElementById("2.2");
const threeBox_input = document.getElementById("3");
const threeBox_name = document.getElementById("3.1");
const threeBox_score = document.getElementById("3.2");
const fourBox_input = document.getElementById("4");
const fourBox_name = document.getElementById("4.1");
const fourBox_score = document.getElementById("4.2");
const score = document.getElementById("Score");

function mark() {

    const sum = () => {
        let sum = Number(oneBox_input.value) + Number(twoBox_input.value) + Number(threeBox_input.value * 3) + Number(fourBox_input.value)
        score.innerHTML = sum + " / 100"
    }
    
    oneBox_input.oninput = () => {
        oneBox_score.innerHTML = oneBox_input.value * 0.5 + " / 5"
        sum()
    }
    
    twoBox_input.oninput = () => {
        twoBox_score.innerHTML = twoBox_input.value * 0.25 + " / 5"
        sum()
    }
    
    threeBox_input.oninput = () => {
        threeBox_score.innerHTML = threeBox_input.value + " / 10"
        sum()
    }
    
    fourBox_input.oninput = () => {
        fourBox_score.innerHTML = fourBox_input.value * 0.25 + " / 10"
        sum()
    }
    
    sum()

}

mark()

url_input.onchange = () => {
    url_photo.src = url_input.value
}

const background_random = () => {
    const random = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
    document.body.style.backgroundImage = "url(./background/background_image" + [random] + ".gif)";
}

const score100 = () => {
    if(score.value == 53) {
        score.style.color = "#ff9797"
    }
}

score100()

background_random()