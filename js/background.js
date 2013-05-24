/**
 * Returns a handler which will open a new window when activated.
 */
function getClickHandler() {
  return function(info, tab) {
    // The srcUrl property is only available for image elements.
    var url = 'info.html#' + info.srcUrl;
    // Create a new window to the info page.
    chrome.windows.create({ url: url, width: 520, height: 660 });
  };
};
/**
 * Create a context menu which will only show up for selection.
 */
chrome.contextMenus.create({
  "id" : "mainMenu",
  "title" : "Save to FeltTip",
  "type" : "normal",
  "contexts" : ["image", "selection"]
});

chrome.contextMenus.create({
  "id" : "sub1Menu",
  "title" : "Common storage",
  "type" : "normal",
  "contexts" : ["image", "selection"],
  onclick: function(info, tab) {
            chrome.tabs.executeScript(tab.id, { 
                code: "googleMarker.markUrl('" + info.linkUrl + "', 'yellow')" 
            });
        },
  "parentId" : "mainMenu"
});

chrome.contextMenus.create({
  "id" : "sub2Menu",
  "title" : "Document 1",
  "type" : "normal",
  "contexts" : ["image", "selection"],
  onclick: function(info, tab) {
            chrome.tabs.executeScript(tab.id, { 
                code: "googleMarker.markUrl('" + info.linkUrl + "', 'red')" 
            });
        },
  "parentId" : "mainMenu"
});

chrome.contextMenus.create({
  "id" : "sub3Menu",
  "title" : "Document 2",
  "type" : "normal",
  "contexts" : ["image", "selection"],
  onclick: function(info, tab) {
            chrome.tabs.executeScript(tab.id, { 
                code: "googleMarker.markUrl('" + info.linkUrl + "', 'blue')" 
            });
        },
  "parentId" : "mainMenu"
});

/**function createMenu() {
    var urls = [
        "*://*.google.com/*",
        "*://*.google.ru/*"
    ];
    
    var root = chrome.contextMenus.create({
        title: "Mark as",
        contexts: [ "link", "selection" ],
        documentUrlPatterns: urls
    });
    
    chrome.contextMenus.create({
        title: "Green",
        contexts: [ "link", "selection" ],
        parentId: root,
        documentUrlPatterns: urls,
        onclick: function(info, tab) {
            chrome.tabs.executeScript(tab.id, { 
                code: "googleMarker.markUrl('" + info.linkUrl + "', 'green')" 
            });
        }
    });
    
    chrome.contextMenus.create({
        title: "Yellow",
        contexts: [ "link", "selection" ],
        parentId: root,
        documentUrlPatterns: urls,
        onclick: function(info, tab) {
            chrome.tabs.executeScript(tab.id, { 
                code: "googleMarker.markUrl('" + info.linkUrl + "', 'yellow')" 
            });
        }
    });
    
    chrome.contextMenus.create({
        title: "Red",
        contexts: [ "link", "selection" ],
        parentId: root,
        documentUrlPatterns: urls,
        onclick: function(info, tab) {
            chrome.tabs.executeScript(tab.id, { 
                code: "googleMarker.markUrl('" + info.linkUrl + "', 'red')"
            });
        }
    });
}
createMenu();*/

