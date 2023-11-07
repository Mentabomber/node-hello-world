
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
    "You cannot have positive life and negative mind",
    "Be yourself. Everyone else is already taken",
    "If you really believe in something, it's important"
];
let lastPhraseNumber;
function postRandomPhrase(phrases){

        console.log(phrases, "array");
        console.log(phrases.length, "lunghezza array");
        let phraseNumber = Math.floor(Math.random() * phrases.length);
        console.log(lastPhraseNumber);
        if (phraseNumber === lastPhraseNumber){
            phraseNumber = Math.floor(Math.random() * phrases.length);
        }
        else {
            lastPhraseNumber = phraseNumber;
            return phrases[phraseNumber];
        }
        
    
}
function htmlResponse(res, content){
    res.writeHead(200, {"Content-type": "text/html; charset=utf-8"})
    res.end(content);
}
const server = http.createServer(function (req, res) {
    const selectedPhrase = postRandomPhrase(phrases);
    htmlResponse(res, `<h2>${selectedPhrase}</h2>`);
})

server.listen(port, function(){
    console.log("Server is running on http://localhost:" + port);
} )

