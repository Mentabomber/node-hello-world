const http = require("http");
const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 3000;

const phrases = [
    "He who seeks shall find",
    "The most effective way to do it, is to do it",
    "You don't have to be perfect to be amazing",
    "Make each day your masterpiece",
    "Every moment is a fresh beginning",
    "A winner is a dreamer who never gives up",
    "Enthusiasm moves the world",
    "You cannot have a positive life with a negative mind",
    "Be yourself. Everyone else is already taken",
    "If you really believe in something, it's important"
];



let lastPhraseNumber;

function postRandomPhrase(phrases) {
    console.log(lastPhraseNumber);
    let phraseNumber;
    console.log(phraseNumber);
    do {
        phraseNumber = Math.floor(Math.random() * phrases.length);
        console.log(phraseNumber, "phraseNumber");
    } while (phraseNumber === lastPhraseNumber);
    
    lastPhraseNumber = phraseNumber;
    console.log(lastPhraseNumber,"lastPhraseNumber");
    return phrases[phraseNumber];
}

let sentences = [];

function postRandomSentence(phrases){
    let sentenceNumber;
    do {
        sentenceNumber = Math.floor(Math.random() * phrases.length);
        console.log(sentenceNumber, "sentenceNumber");
        if (sentences.length === phrases.length) {
            console.log("tutte le frasi sono state visualizzate!");
            sentences = [];
            return `<h2>tutte le frasi sono state visualizzate!</h2>`
        }
    } while (sentences.includes(sentenceNumber));

    sentences.push(sentenceNumber);
    console.log(sentences);
    return phrases[sentenceNumber];
}

function htmlResponse(res, content) {
    res.writeHead(200, { "Content-type": "text/html; charset=utf-8" });
    res.end(content);
}

const server = http.createServer(function (req, res) {
    if(req.url === "/favicon.ico") res.writeHead(404).end();
    const selectedPhrase = postRandomPhrase(phrases);
    const selectedSentence = postRandomSentence(phrases);
    htmlResponse(res, `<h2>${selectedPhrase}</h2> <br> 
                        <h2>${selectedSentence}</h2>`);
});

server.listen(port, function () {
    console.log("Server is running on http://localhost:" + port);
});
