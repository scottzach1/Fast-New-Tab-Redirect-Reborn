chrome.webRequest.onBeforeRequest.addListener((function () {
    return {
        redirectUrl: localStorage.redirectUrl || chrome.extension.getURL("options.html")
    };
}), {
    urls: [chrome.extension.getURL("dummy.html")]
}, ["blocking"]);
