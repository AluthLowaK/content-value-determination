      var fs = require('fs');
      var unique = require('array-unique');

      fs.readFile("test.html", function (err, str) {

      const jsdom = require("jsdom");
      const { JSDOM } = jsdom;
      var j = new JSDOM(str);
      var document = j.window.document;
      var titles = document.getElementsByClassName("media__title");
      var summaries = document.getElementsByClassName("media__summary");

      var p = [];
      for (var i = 0 ; i < titles.length; i ++) {
          p.push(titles[i].textContent.trim());
      }

      for (var i = 0 ; i < summaries.length; i ++) {
          p.push(summaries[i].textContent.trim());
      }

      var words = p.join(" ").split(" ");
      var unq = unique(words);
      fs.writeFile("words.json", JSON.stringify(unq), function (err, out) {
          console.log("words.json created: " + unq.length);
      });



      //var englishWords = words.filter(isEnglish);
      /*console.log("Words: " + words.length);
      console.log("English Words: " + englishWords.length);
      console.log("Sum english words" + englishWords.slice(10));*//*console.log("Words: " + words.length);
      console.log("English Words: " + englishWords.length);
      console.log("Sum english words" + englishWords.slice(10));*/
      /*console.log("English Letter: " + content.textContent.split().filter(
            function (ch)  {
                var isEnglish = ch.match(/A-Za-z/);
                console.log(isEnglish);
                return (isEnglish && isEnglish.length === 1); }
            ).length);*/
    });


var isEnglish = function (word) {
    if (word.length === 1 && word.match("/[\nx2c]/")) return false;
    var e = word.match("/[A-Za-z]+/") || [];
    return (e.length >= word.length - 1)
};
