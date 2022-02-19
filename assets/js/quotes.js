function randomQuote(){
        var url = window.location.origin +"/quotes.json";
        $.getJSON(url, success = function(data){
            var arrayRandom = Math.floor(Math.random() * data.length);
            var quote = "<blockquote id=\"quote-text\">" + data[arrayRandom].quote + "<br/> <p id=\"quote-author\" class=\"text-right\"><strong>" + data[arrayRandom].author + "</strong></p></blockquote>";
            $('#quote').append(quote);
        });
    }
randomQuote();
