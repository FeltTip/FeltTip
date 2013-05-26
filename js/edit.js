document.onready = function () {
    var opts = {
        lang:'en', // set your language
        styleWithCSS:false,
        height:400,
        toolbar:'maxi'
    };
    // create editor
    $('#content').elrte(opts);

    var get = window.location.search.substr(1).split('=');
    var fileName = get[1];
    var file = JSON.parse(localStorage[fileName]);
    $('#content').elrte('val', file.content);
    for (var i = 0; i < file.quotes.length; i++) {
        var quote = file.quotes[i];
        $('#quotes').append('<div class="quote-block">&rdquo; <div class="quote">'
            + quote.quote + '</div>&rdquo;' +
            '<div class="quote-link">' + quote.author + '. ' + quote.title + ': ' + quote.source + ' (' + quote.year + ')</div>' +
            '</div>');
    }

    this.title = '"' + fileName + '"' + document.title;
    $('#quotes').css('height', window.innerHeight - 50 + 'px');

    $('.save').on('click', function () {
        file.content = $('#content').elrte('val');
        localStorage[fileName] = JSON.stringify(file);
        return false;
    });

    $('.quote, .quote-link').on('click', function () {
        var selection, range;
        selection = window.getSelection();
        range = document.createRange();
        range.selectNodeContents(this);
        selection.removeAllRanges();
        selection.addRange(range);

        $('.quote-block.active').removeClass('active');
        $(this).parent('.quote-block').addClass('active');
    });
};