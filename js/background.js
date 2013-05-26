$(document).ready(function(){
    chrome.contextMenus.create({
        id: 'FeltTip',
        title: 'Send to FeltTip...',
        contexts: ['selection'],
        onclick: function(data){
            console.log(data);
            chrome.extension.getBackgroundPage().document.getElementById('quote').innerHTML = data.selectionText;
            chrome.extension.getBackgroundPage().document.getElementById('source').innerHTML = data.pageUrl;
            chrome.tabs.create({
                active: true,
                url: "form.html"
            });
        }
    });
});