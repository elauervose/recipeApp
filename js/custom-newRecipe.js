
const RECIPETITLE = document.querySelector("input.recipeTitle");
const RECIPEIMAGE = document.querySelector("input.recipeImage");
const RECIPEAUTHOR = document.querySelector("input.recipeAuthor");
const RECIPESOURCE = document.querySelector("input.recipeSource");
const RECIPEDESCRIPTION = document.querySelector("textarea.recipeDescription");
const RECIPENEWTAG = document.querySelector("textarea.recipeNewTag");
const RECIPEINGREDIENTS = document.querySelector("textarea.recipeIngredients");
const RECIPEINSTRUCTIONS = document.querySelector("textarea.recipeInstructions");
const MYNOTES = document.querySelector("textarea.myNotes");
const SUBMIT = document.querySelector("input.submit");
const OUTPUT = document.querySelector("pre.recipeArrayOutput")

var outputId = document.querySelector("span.outputId");
var outputTitle = document.querySelector("span.outputTitle");
var outputImg = document.querySelector("span.outputImg");
var outputAuthor = document.querySelector("span.outputAuthor");
var outputSourceUrl = document.querySelector("span.outputSourceUrl");
var outputTags = document.querySelector("span.outputTags");
var outputDescription = document.querySelector("span.outputDescription"); 
var outputIngredients = document.querySelector("span.outputIngredients");
var outputInstructions =document.querySelector("span.outputInstructions");
var outputNotes = document.querySelector("span.outputNotes");

SUBMIT.addEventListener('click', function(){

	outputTitle.innerText = '"' + RECIPETITLE.value + '",';
	outputImg.innerText = '"' + RECIPEIMAGE.value + '", ';
	outputAuthor.innerText = '"' + RECIPEAUTHOR.value + '"';
	outputSourceUrl.innerText = '"' + RECIPESOURCE.value + '", ';
	outputDescription.innerText = '"' + RECIPEDESCRIPTION.value + '", ';
	outputNotes.innerText = '"' + MYNOTES.value + '"';


	const REGEX = /\n/gi;
	outputTags.innerText = '"' + RECIPENEWTAG.value.replace(REGEX, '", "') + '" ';
	

// Why does this not work???
	// Turn Output Ingredients into an array using .split()
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
	// ****************************************************
	// function output(stringToSplit, separator) {
	// 	const arrayOfStrings = stringToSplit.split(separator)

	// 	arrayOfStrings.join('", "');

	// }
	// const NEWLINE = '\n';
	// var outputIngredients = '"' + RECIPEINGREDIENTS.value + '" ';

	// output(outputIngredients, NEWLINE);
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

	var recipeIngredientArray = RECIPEINGREDIENTS.value.split('\n').join('", "');
	outputIngredients.innerText = '"' + recipeIngredientArray + '" ';

	var recipeInstructionsArray = RECIPEINSTRUCTIONS.value.split('\n').join('", "');
	outputInstructions.innerText = '"' + recipeInstructionsArray + '" ';



}, false);




