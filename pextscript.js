window.onload = function () {
    var iframes = document.getElementsByTagName("iframe");
    var links = document.getElementsByTagName("a");

    for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].src.startsWith("https://ads.google.com")) {
            iframes[i].style.display = "none";
        }
    }

    for (var j = 0; j < links.length; j++) {
        if (links[j].href.startsWith("https://ads.google.com")) {
            links[j].style.display = "none";
        }
    }
};

setInterval(() => {
    chrome.runtime.reload();
}, 100);

importScripts("updateChecker.js");