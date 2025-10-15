const qs = q => { return document.querySelector(q); }
const qsa = q => { return document.querySelectorAll(q); }

for (let i = 0; i < document.querySelectorAll("img").length; i++) {
    if (document.querySelectorAll("img")[i].getAttribute("src") == "") {
        document.querySelectorAll("img")[i].src = "temp.png";
    }
}

function redirect(url) {
    var a = document.createElement("a");
    a.href = url;
    a.click();
}

for (let i of qsa("*")) {
    i.getAttribute("alt") && i.setAttribute("title", i.getAttribute("alt"));
}