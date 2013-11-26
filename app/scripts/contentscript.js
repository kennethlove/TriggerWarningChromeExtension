'use strict';

(function($) {
    var title = $('.titleArea .title-wrapper h1.title').text(),
        year = $('.titleArea .year').text(),
        search_url = 'http://movietriggers.com/movies';

    $.ajax({
        url: search_url,
        data: {q: title},
        dataType: 'html',
        contentType: 'text/javascript',
        processData: false,
        success: function(data, status, xhr) {
            console.log(data);
            var search_doc = $(data),
                poster = $('.poster-listings .span3:eq(0) a', search_doc);
            console.log(poster.attr('url'));
        },
        error: function(xhr, errorType, error) {
            console.log('error', error);
        }
    });
})($);
