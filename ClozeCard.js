//This file should define a Node module that exports a constructor for creating
//cloze-deletion flashcards, e.g.: module.exports = ClozeCard;

//The constructor should accept two arguments: text and cloze.
//This contructor must 1) compare 'text' and 'cloze' to find which words match
// 2) remove the matched words from 'text' to find 'partial' and 3) replace the
// missing words in 'partial' with an ellipsis
var ClozeCard = function(text, cloze) {
  //The constructed object should have a cloze property that contains only the
  //cloze-deleted portion of the text.
  this.cloze = cloze;
  //The constructed object should have a fullText property that contains only the
  //full text.
  this.fullText = text;
};

//The constructed object should have a partial property that contains only the
  //partial text.
// Place methods on the constructors prototype to save memory and increase performance
ClozeCard.prototype.partial = function() {
  // Always default to ‘===’
  if (text.includes(cloze) === true) {
    text.replace(cloze, "...");
  } else {
    console.log("Error!!!");
  }
};


//The constructor should throw or log an error when the cloze deletion does not
//appear in the input text.

//Use prototypes to attach these methods, wherever possible.
module.exports = ClozeCard;
