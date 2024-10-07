window.onload = start;
let count = 0;

function start() {
    let top = document.getElementById("top");
    top.innerHTML = "Welcome to the Forum"
}

function postFunction() {
    let topic = document.getElementById("topic");
    let reply1 = document.getElementById("reply1");
    let reply2 = document.getElementById("reply2");
    let message = document.getElementById("message").value;
    switch (count) {
        case (0):
            topic.innerHTML = message;
            break;
        case (1):
            reply1.innerHTML = message;
            break;
        case (2):
            reply2.innerHTML = message;
            break;
    }
    document.getElementById("message").value = "";
    count++;
}

function clearFunction() {
    topic = document.getElementById("topic").innerHTML = "";
    reply1 = document.getElementById("reply1").innerHTML = "";
    reply2 = document.getElementById("reply2").innerHTML = "";
    count = 0;
}