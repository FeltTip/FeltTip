document.onready = function(){
    var files = [];

    for (var file in localStorage) {
        $('#file').append('<option>' + file + '</option>');
    }

    var quote = chrome.extension.getBackgroundPage().document.getElementById('quote').innerHTML;
    var source = chrome.extension.getBackgroundPage().document.getElementById('source').innerHTML;
    $('#quote').html(quote);
    var shortLink = source;
    if (source.length > 60) {
        shortLink = shortLink.substr(0, 59) + '...';
    }
    $('#source').html('<a href="' + source + '" target="_blank" >' + shortLink + '</a>');

    $('#send').on('click', function(){
        var fileName = $('#file').val();
        if (fileName == '') {
            alert('Please, select file to send the quote');
            return false;
        }

        var tab = $('.tab-pane.active ');
        var author = $(tab).find('input[name="author"]').val();
        var title = $(tab).find('input[name="title"]').val();
        var year = $(tab).find('input[name="year"]').val();
        var publisher = $(tab).find('input[name="publisher"]').val();
        var quote = $('#quote').html();

        var file = JSON.parse(localStorage[fileName]);
        var key = file.quotes.length;
        file.quotes[key] = {
            quote: quote,
            source: source,
            author: author,
            title: title,
            year: year,
            publisher: publisher
        };

        localStorage[fileName] = JSON.stringify(file);

        chrome.tabs.getCurrent(function(tab){
            var notification = webkitNotifications.createNotification(
                'i/48x48.png',
                'Success',
                'Quote sended to "' + fileName + '"'
            );
            notification.show();
            chrome.tabs.update(tab.id, {url: 'edit.html?file=' + fileName});

        });
    });
}