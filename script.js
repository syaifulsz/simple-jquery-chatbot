$(document).ready(function() {

    $('#btnDownloadTop').on('click', function() {
        _gaq.push(['_trackEvent', 'Annoying Chatbot', 'Download', 'Button Download - Top']);
    });

    $('#btnDownloadBottom').on('click', function() {
        _gaq.push(['_trackEvent', 'Annoying Chatbot', 'Download', 'Button Download - Bottom']);
    });

});