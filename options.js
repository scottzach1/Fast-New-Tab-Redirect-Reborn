const inputRedirectUrl = document.querySelector("input");
inputRedirectUrl.value = localStorage.redirectUrl || "";

document.querySelector("form").addEventListener("submit", function () {
    localStorage.redirectUrl = inputRedirectUrl.value;
}, false);
