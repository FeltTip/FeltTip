$(document).ready(function(){
    chrome.contextMenus.create({
        id: 'FeltTip',
        title: 'Send to FeltTip...',
        contexts: ['selection']
    });

    for (var file in localStorage) {
        chrome.contextMenus.create({
            title: 'send'
        });
    }
});