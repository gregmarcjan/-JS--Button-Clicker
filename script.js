console.log("Connected to JS");

function hide(element) {
    element.remove();
}

function login(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout"
    } 
    else {
            element.innerText = "Login";
        }
}

