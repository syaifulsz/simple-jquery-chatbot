$(document).ready(function() {

    // Annoying Chatbot
    //==================================================================================================================

    $('#chatbot').on('click', '#chatbot-submit', function(e) {
        e.preventDefault();

        message = $('#chatbot-input').val();
        message = message.toLowerCase();
        sendMessage();
        bot(message);
        clearInterval(botAuto);
    });


    function botAutoMessage() {
        var messageArray = [
            'Are you there?',
            'Why are you here?',
            'Come on, say something.'
        ];

        sendMessage(messageArray);
    }

    var botAuto = setInterval(botAutoMessage, 8000);

    function bot(message) {
        if (message.indexOf('hello') >= 0) {

            var messageArray = [
                'Hello to you too!',
                'I said hello first :)',
                'Greeting, human.'
            ];

            sendMessage(messageArray);
        }

        else if (message.indexOf('good morning') >= 0) {

            var messageArray = [
                'Good morning to you too. How are you this morning?',
                'Yeah, its good ',
                'Greeting, human.'
            ];

            sendMessage(messageArray);
        }

        else if (message.indexOf('good fine') >= 0) {

            var messageArray = [
                'Okay, so what do you want to talk about?',
                'Okay, what is your problem? Tell me.',
                'Do you have something to say? Say it. Let it out your chest.'
            ];

            sendMessage(messageArray);
        }

        else if (message.indexOf('nothing') >= 0) {

            var messageArray = [
                'If nothing than you won\' be here, right?',
                'Please continue.',
                'Just say it.',
                'Have you watch Pacific Rim?',
                'Have you watch The Conjuring',
            ];

            sendMessage(messageArray);
        }

        else if (message.indexOf('scare') >= 0 || message.indexOf('scary') >= 0) {

            var messageArray = [
                'Does it scares you?',
                'Which part that you like?',
                'Its an awesome movie, yeah?',
            ];

            sendMessage(messageArray);
        }

        else if (message == '') {

            var messageArray = [
                'Can you at least say something?',
            ];

            sendMessage(messageArray);
        }

        else {

            var messageArray = [
                'Oops... I don\'t really know what that means yet.',
                'Developer who did this plugin should "teach" me with more words.',
                'I\'m pretty stupid at this point, I don\'t really know what to respond to you. Say something else.',
            ];

            sendMessage(messageArray);

        }
    }

    // scroll to the bottom of chat box
    function scrollToMessage() {
        var msgBox = $('#chatbot-message');
        var height = msgBox[0].scrollHeight;
        msgBox.scrollTop(height);
    }

    // sending message
    function sendMessage(message) {
        if (message) {

            $('#chatbot-input').addClass('disabled');
            $('#chatbot-input').attr('disabled', 'disabled');
            $('#chatbot-submit').addClass('disabled');
            $('#chatbot-submit').attr('disabled', 'disabled');

            var respond = message[Math.floor(Math.random() * message.length)];

            setTimeout(function() {
                botPre     = '<span class="message">Bot is writing... <i class="glyphicon glyphicon-pencil"></i></span>';
                botVal     = respond;
                botMessage = $('#chatbot-message').html() + '<p class="from-bot"><span class="user">Bot: </span>' + botPre + '</p>';
                $('#chatbot-input').attr('placeholder', 'Bot is writing...');
                $('#chatbot-message').html(botMessage);
                scrollToMessage();
            }, 800);

            setTimeout(function() {
                botMessageReplace = $('#chatbot-message .from-bot:last-child()');
                botMessage = '<span class="user">Bot: </span>' + botVal;
                $('#chatbot-input').attr('placeholder', 'message...');
                botMessageReplace.html(botMessage);
                scrollToMessage();
                $('#chatbot-input').removeClass('disabled');
                $('#chatbot-input').removeAttr('disabled');
                $('#chatbot-submit').removeClass('disabled');
                $('#chatbot-submit').removeAttr('disabled');
            }, 2800);

        } else {

            userVal     = $('#chatbot-input').val();
            userMessage = $('#chatbot-message').html() + '<p class="from-user"><span class="user">You: </span>' + userVal + '</p>';
            $('#chatbot-message').html(userMessage);
            scrollToMessage();
            $('#chatbot-input').val('');

        }
    }
});