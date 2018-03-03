var casper = require('casper').create({verbose: true , logLevel: "debug" });
var fs = require('fs');
//Path where your mp3 files will be stored.
var dowloadFolderLocation = "mp3/";
var url = "https://www.youtube2mp3.cc/";
var songArray = [];
//File containing urls of the youtube videos to be downloaded.
var file_h = fs.open('UrlList.txt', 'r');
var line = file_h.readLine();
var counter = 0;

while(line) {
    songArray.push(line);
    line = file_h.readLine();
}

casper.start(url).repeat(songArray.length,function(){
    casper.then(function(){
        this.fill('#converter > form', { 'video': songArray[counter] }, true);
        counter++;
    });
    casper.wait(500);
    casper.then(function(){
        this.waitForSelector("#download", function(){
            var filename = this.evaluate(function(){
                return document.getElementById('title').textContent;
            });
            var url = casper.getElementAttribute('#download','href');
            var mp3 = fs.absolute(dowloadFolderLocation + filename+".mp3");
            casper.then(function() { this.download( url, mp3); });
        });
    });
});
casper.run();