document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn").addEventListener("click", randomBtn);
});

function randomNumber() {
    const min = 1000;
    const max = 730000;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function randomBtn() {
    let randomNum = String(randomNumber());

    const link = "https://r34xyz.b-cdn.net/posts/" + randomNum.slice(0, -3) + "/" + randomNum + "/" + randomNum + ".jpg";
    const output = document.getElementById("output");
    const outputImage = document.getElementById("output_image");

    output.innerHTML = '<a href="' + link + '" target="_blank">' + link + '</a>';
    outputImage.innerHTML = '<img id="outputimg" src="' + link + '">';
}

document.getElementById("new-page").addEventListener("click", function () {
    chrome.tabs.create({ url: chrome.runtime.getURL("popup/popup.html") });
});
