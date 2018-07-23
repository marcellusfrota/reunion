

function SpeechRecognizer() {
    if (!('webkitSpeechRecognition' in window)) {
        alert('Speech recognition is not supported by this browser.');
    }
    this.listening = false;
    this.startedOn = null;
    this.resultHandler = null;
    this.errorHandler = null;
    this.configureRecognizer();
};

SpeechRecognizer.prototype.configureRecognizer = function () {
    this.recognizer = new webkitSpeechRecognition();
    this.recognizer.continuous = true;
    this.recognizer.interimResults = true;
    
    this.recognizer.onstart = this.onStart.bind(this);
    this.recognizer.onerror = this.onError.bind(this);
    this.recognizer.onend = this.onEnd.bind(this);
    this.recognizer.onresult = this.onResults.bind(this);

    this.recognizer.onspeechstart = function (event) {
        console.log('Speech started!', event);
    }
    this.recognizer.onspeechend = function (event) {
        console.log('Speech ended!', event);
    }

    this.recognizer.onaudiostart = function (event) {
        console.log('Audio started!', event);
    }
    this.recognizer.onaudioend = function (event) {
        console.log('Audio ended!', event);
    }

    this.recognizer.onsoundstart = function (event) {
        console.log('Sound started!', event);
    }
    this.recognizer.onsoundend = function (event) {
        console.log('Sound ended!', event);
    }

};

SpeechRecognizer.prototype.start = function () {
    this.recognizer.start();
};

SpeechRecognizer.prototype.stop = function () {
    this.recognizer.stop();
};

SpeechRecognizer.prototype.isListening = function () {
    return this.listening;
};

SpeechRecognizer.prototype.onStart = function (event) {
    this.listening = true;
    this.startedOn = event.timeStamp;
};

SpeechRecognizer.prototype.onError = function (event) {
    this.listening = false;

    console.log('Error:', event.error);

    switch (event.error) {
        case 'no-speech':
            break;
        case 'audio-capture':
            break;
        case 'not-allowed':
            break;
    }
    
    var listenDuration = event.timeStamp - this.startedOn;
    if (listenDuration < 100) {
        console.log('Auto-Blocked!')
    } else {
        console.log('Denied by user!');
    }
    if (this.errorHandler) {
        this.errorHandler(event.error);
    }
};

SpeechRecognizer.prototype.setErrorHandler = function (errorHandler) {
    this.errorHandler = errorHandler;
};

SpeechRecognizer.prototype.setResultHandler = function (resultHandler) {
    this.resultHandler = resultHandler;
};

SpeechRecognizer.prototype.onResults = function (event) {
    if (this.resultHandler) {
        this.resultHandler(event.results);
    }
};

SpeechRecognizer.prototype.onEnd = function () {
    this.listening = false;
};

