
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

// Array of all the recipes listed in the app
// *****************************************************
var recipesMeta = [
	new IndexItem("gingerBeef", "Ginger Beef Stir-Fry", "img/ginger-beef.png", "HelloFresh", "https://www.hellofresh.com/recipes/ginger-beef-stir-fry-54d39fa96ced6e83368b4567", ["HelloFresh", "spring", "summer", "reheats well", "beef", "difficulty level: medium"], "Tender beef and crisp asparagus are quickly stir-fried with warming ginger and served over fluffy basmati rice. Hoisin sauce adds a touch of sweetness and depth of flavor.", "/ginger-beef-stir-fry", ["1/2 lb Sirloin Steak", "¾ C. Basmati Rice", "1 bunch (~ 2 cups chopped) Asparagus", "2 clove Garlic", "1 thumb Ginger", "1 T. Hoisin Sauce", "2 T. Soy Sauce", "1 T. Vegetable Oil", "Salt", "Pepper"], ["In a small pot, bring 1 1/2 cups water to a boil with a pinch of salt. Take the steak out of the fridge to bring to room temperature. Cut the asparagus spears into 2-inch pieces, discarding the bottom inch. Mince or grate the garlic. Peel the ginger with a spoon, then mince or grate 1 T..", "Add the rice to the boiling water. Return to a boil, reduce to a simmer, and cover. Cook for 15 minutes, then set aside off the heat for 5 minutes. No peeking!", "Meanwhile, heat 1 T. oil in a non-stick pan over medium-high heat. Season the steak with salt and pepper on each side. Sear for 2-3 minutes on each side until golden brown. Set aside.", "In a bowl, combine garlic, ginger, soy sauce, hoisin, and 2 T.s water. Stir until thoroughly combined.", "In the same pan you cooked the steak in, cook the asparagus over medium heat for about 5 minutes, tossing constantly.", "While the asparagus cooks, thinly slice the steak against the grain.", "Add the steak to the pan with the soy sauce mixture. Cook, tossing, for about 5 minutes, until steak is cooked, asparagus are tender, and sauce has slightly thickened.", "Fluff the rice with a fork. Serve the ginger beef stir-fry on top and drizzle with any remaining sauce."], "Substitute green beans if you can't get fresh asparagus. I like to add more ginger than the recipe calls for."),
	new IndexItem("blackBeanFarroSalad", "Black Bean and Farro Salad with Apples and Cilantro Vinaigrette", "img/black-bean-farro-salad.png", "HelloFresh", "https://www.hellofresh.com/recipes/black-bean-and-farro-salad-55ae8b1ff8b25e10218b4567", ["HelloFresh", "summer", "hot weather", "difficulty level: easy"], "Black beans and farro team up beautifully in this ultra-hearty grain salad. The duo pairs unexpectedly well with crunchy Granny Smith apple and creamy avocado. A bright cilantro and shallot vinaigrette ties the whole dish together.", "/black-bean-farro-salad", ["¾ C. Farro", "1 can Black Beans", "1 Avocado", "1 Apple", "1 Shallot", "1 bunch Cilantro", "2 T. White Wine Vinegar", "2 T. Olive Oil"], ["Cook the faro: combine the farro in a large pot of water with a large pinch of salt. Bring to a boil, reduce to a simmer, cover, and cook 30-35 minutes until tender. Drain and rinse under cold water.", "While the faro cooks drain and rinse the beans. Finely chop the cilantro. Halve, peel, and mince the shallot.", "Make the cilantro vinaigrette: in a large bowl, combine the cilantro, shallot, and 1 T. white wine vinegar. Whisk in 2 T.s olive oil and season with salt and pepper.", "Halve, pit, and dice the avocado. Cut the apple into ½-inch cubes, discarding the apple core. Toss the apple into the vinaigrette.", "When the farro is ready, toss it into the vinaigrette along with the black beans. Season with salt and pepper", "Plate the farro mixture, then top with the avocado. Dig in and enjoy!"],  "The farro takes MUCH longer to took than the recipe indicates - I find I need to double the time. You can also substitute other grains (quinoa, barley, etc.), or you can use orzo or couscous."),
	new IndexItem("coconutCrustedChicken", "Coconut-Crusted Chicken Fingers with Garlic Green Beans and Spiced Sweet Potato Fries", "img/coconut-crusted-chicken-fingers.png", "HelloFresh", "https://www.hellofresh.com/recipes/coconut-crusted-chicken-fingers-with-garlic-green-beans-and-spiced-sweet-potato-fries-565dc20179a23cdd658b4567", ["HelloFresh", "summer", "comfort food", "chicken", "difficulty level: medium-hard"], "Crispy panko and lightly sweet coconut give ordinary chicken fingers a major boost. For a smoky-sweet twist on oven fries, we’re sprinkling these sweet potatoes with a touch of paprika. A side of garlicky green beans is the perfect 5-minute side dish.", "/coconut-crusted-chicken-fingers", ["12 ounce Chicken Breasts", "¼ C. Shredded Coconut", "1 T. Honey", "1 tsp. Smoked Paprika", "¼ C. Panko Breadcrumbs", "1 tsp. Garlic Powder", "12 ounce Sweet Potato", "4 ounce Green Beans", "2 T. Olive Oil"], ["Make the sweet potato fries: Heat the oven to 400 degrees. Peel the sweet potato, then cut into ½-inch sticks (like French fries!) Toss on a baking sheet with a drizzle of oil, the paprika, and a pinch of salt and pepper. Place in the oven for 20-25 minutes, tossing halfway through cooking, until golden brown.", "Prep and coat the chicken fingers: Combine the panko and the coconut flakes in a small dish with a pinch of salt and pepper. Place the honey and a drizzle of oil in a medium bowl. Cut the chicken breasts into 1-inch strips (like chicken fingers!) Toss the chicken strips into the honey mixture to coat, then season with salt and pepper. Working one at a time, press each strip in the coconut mixture to adhere. Place coated strips aside.", "Cook the green beans: Heat a drizzle of oil in a large pan over medium-high heat. Add the green beans and garlic powder to the pan and cook, tossing, for 4-6 minutes, until the beans are starting to blister. Season with salt and pepper. Set aside, covered, to keep warm.", "Cook the chicken fingers: Heat a thin layer of oil in the same pan over medium-high heat. Add the chicken strips to the pan and cook 2-3 minutes per side, until golden brown and cooked through.", "Plate: Serve the chicken fingers with the sweet potato fries and the green beans alongside. Enjoy!"], "The coconut tends to cook much faster than the panko and burn - keep an eye on it!"),
	new IndexItem("blackenedCatfish", "Blackened Catfish with Crispy Potatoes and Blistered Summer Vegetables", "img/blackened-catfish.png", "HelloFresh", "https://www.hellofresh.com/recipes/blackened-catfish-55c279aff8b25e97088b4567", ["HelloFresh", "summer", "fish", "Erica recipe", "difficulty level: medium"], "Typically battered and fried, catfish is a staple of Southern cooking. For a lighter preparation, we’re blackening this flaky fish with a potent mix of spices. A side of crispy roasted potatoes and caramelized vegetables compliments the dish; a sprinkling of chopped cilantro and a wedge of lemon brightens it up.", "/blackened-catfish", ["12 ounce Catfish", "1 Red Bell Pepper", "4 ounce Green Beans", "1 Yellow Onion", "12 ounce Yukon Gold Potatoes", "1 Lemon", "8 g Cilantro", "1 tsp. Blackening Spice", "2 clove Garlic", "3 T. Olive Oil"],  ["Preheat oven to 400 degrees (200c). Core, seed, and remove the white ribs from the bell pepper, then thinly slice. Halve, peel, and thinly slice the onion. Cut the potatoes into ½-inch cubes. Finely chop the cilantro. Cut the lemon into wedges.", "Toss the potatoes on a baking sheet with 1 T. olive oil and season with salt and pepper. Place in the oven and roast for 15-20 minutes, tossing halfway through, until golden brown.", "Heat 1 T. olive oil in a large pan over medium-high heat. Add the green beans, onion, and bell pepper and cook, tossing, 7-8 minutes, until softened and slightly blistered. Stir in half the chopped cilantro, season with salt and pepper, and set aside", "In the same pan, heat another 1 T. olive oil over medium-high heat. Season the catfish on all sides with the blackening seasoning, salt, and pepper. Add the catfish to the pan and cook 3-4 minutes per side, until cooked through and slightly blackened.", "Plate the potatoes and blistered vegetables, then top with the blackened catfish. Serve with lemon wedges, a sprinkle of the remaining cilantro, and enjoy!"], "My Notes"),
	new IndexItem("plantainBlackBeanTostadas", "Plantain and Black Bean Tostadas with Pickled Red Onion, Avocado, and Feta", "img/plantain-and-black-bean-tostadas.png", "HelloFresh", "https://www.hellofresh.com/recipes/plantain-and-black-bean-tostadas-55afd3804dab71fe188b4567", ["HelloFresh", "summer", "hot weather", "vegetarian", "difficulty level: easy"], "Plantains are a staple of Latin and South American cuisine—used both in their ripe and unripe forms. Ripe, spotted yellow plantains can be fried into maduros. Starchy and slightly sweet, maduros are the star of these tostadas. Paired with the bite of pickled onion, the creaminess of avocado, and smoky cumin, each bite has the perfect balance of flavor.", "/plantain-black-bean-tostadas", ["1 Yellow Plantain", "1 can Black Beans", "1 Red Onion", "2 ounce Feta Cheese", "1 Avocado", "4 Flour Tortillas", "1 tsp. Ground Cumin", "8 g Cilantro", "1 Lime", "3 Radishes", "1 ounce Honey", "7 tsp. Olive Oil"],  ["Preheat oven to 400 degrees. Peel and slice the plantain into ½-inch rounds. Drain and rinse the black beans. Thinly slice the radishes. Peel, and thinly slice the onion. Halve, pit, and thinly slice the avocado. Halve the lime, then cut one half into wedges. Toss ¼ the sliced onion in a small bowl with the juice of half a lime.", "Heat 1 tsp. oil in a large pan over medium heat. Add the remaining ¾ onion to the pan and cook, tossing, 4-5 minutes, until softened. Add half the black beans and ½ tsp. cumin to the pan and toss until heated through. Season with salt and pepper. Set aside and cover to keep warm. TIP: We’re only using half the beans, so save the rest for another day!", "Place the tortillas on a baking sheet and place in the oven for 3-4 minutes, until just barely golden brown and crispy", "In the same pan you cooked the beans in, heat ¼-inch oil over medium-high heat. Add the plantain slices to the pan and cook 3-4 minutes per side, until soft and golden brown. Remove the plantains from the pan, drizzle with 1 tsp. honey, and season with salt and pepper.", "Assemble the tostadas: top the tortillas with the beans, plantains, avocado, pickled red onion, radishes, and a few sprigs of cilantro. Sprinkle with the feta cheese and serve with a limewedge. Enjoy!"], "The recipe says 'yellow plantain', but that's actually un-ripe for a plantain. I think they are much tastier (and softer) when they are ripe. You can tell they are ripe when the peel is mostly brown and the fruit feels soft when squeezed.")
];

// Object contsructor for the recipes listed
// *****************************************************
function IndexItem(id, title, img, author, authorurl, tags, description, recipeurl, ingredients, instructions, notes) {
	this.id = id;
	this.title = title;
	this.img = img;
	this.author = author;
	this.authorurl = authorurl;
	this.tags = tags;
	this.description = description;
	this.recipeurl = recipeurl;
	this.ingredients = ingredients;
	this.instructions = instructions;
	this.notes = notes;
}

var allTags0 = recipesMeta[0].tags;
var allTags1 = recipesMeta[1].tags;
var allTags2 = recipesMeta[2].tags;
var allTags3 = recipesMeta[3].tags;
var allTags4 = recipesMeta[4].tags;

allTags = allTags0.concat(allTags1, allTags2, allTags3, allTags4);
console.log(allTags);

for(let i = 0; i < recipesMeta.length; i++) {

	var eachRecipeTagArray = recipesMeta[i].tags;
	console.log(eachRecipeTagArray);

	

};


// for (let i = 0; i < recipesMeta.length; i++) {

// 	  (function(i) {
// 	    this.print = function() {
// 	      return this.tags;
// 	      // console.log('"' + this.tags + '"');
// 	    }
// 	    this.print();
// 	    console.log('"' + this.tags + '"');
// 	  }).call(recipesMeta[i], i);

// }



// const animals = [
//   { species: 'Lion', name: 'King' },
//   { species: 'Whale', name: 'Fail' }
// ];

// for (let i = 0; i < animals.length; i++) {
//   (function(i) {
//     this.print = function() {
//       console.log('#' + i + ' ' + this.species
//                   + ': ' + this.name);
//     }
//     this.print();
//   }).call(animals[i], i);
// }


const RECIPELISTTAGS = document.querySelector("div.currentTagOptions");
const RECIPECURRENTTAGS = document.querySelector("form.tagList");

for(let i = 0; i < recipesMeta.length; i++) {

	var eachRecipeTagArray = recipesMeta[i].tags;


	for(let a = 0; a < eachRecipeTagArray.length; a++) {

		var newTagSpan = document.createElement("span");
		newTagSpan.className = "tagLabel";

		newTagSpan.textContent = eachRecipeTagArray[a];

		var newTagForm = document.createElement("form");
		newTagForm.className = "tagList";

		newTagForm.appendChild(newTagSpan);

		var newTagCheckbox = document.createElement("div");
		newTagCheckbox.className = "checkbox-option";
		newTagCheckbox.classList.add("pull-right");

		var newInnerDiv = document.createElement("div");
		newInnerDiv.className = "inner";

		newTagCheckbox.appendChild(newInnerDiv);

		var newInnerInput = document.createElement("input");
		newInnerInput.type = "checkbox";
		newInnerInput.name = "checkbox";
		newInnerInput.value = "checkbox";

		newTagCheckbox.appendChild(newInnerInput);

		newTagForm.appendChild(newTagSpan);
		newTagForm.appendChild(newTagCheckbox);


		RECIPELISTTAGS.append(newTagForm);
	};

};


RECIPECURRENTTAGS.remove();

SUBMIT.addEventListener('click', function(){

	outputTitle.innerText = '"' + RECIPETITLE.value + '",';
	outputImg.innerText = '"' + RECIPEIMAGE.value + '", ';
	outputAuthor.innerText = '"' + RECIPEAUTHOR.value + '"';
	outputSourceUrl.innerText = '"' + RECIPESOURCE.value + '", ';
	outputDescription.innerText = '"' + RECIPEDESCRIPTION.value + '", ';
	outputNotes.innerText = '"' + MYNOTES.value + '"';


	const REGEX = /\n/gi;
	outputTags.innerText = '"' + RECIPENEWTAG.value.replace(REGEX, '", "') + '" ';
	
	// const RECIPECURRENTTAGS = document.querySelectorAll("div.currentTagOptions form.tagList");




// Why does this not work???
	// Turn Output Ingredients into an array using .split()
	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
	// ****************************************************
	function output(stringToSplit, separator) {
		const arrayOfStrings = stringToSplit.split(separator)

		return '"' + arrayOfStrings.join('", "') + '"';
	}
	const NEWLINE = '\n';
	var outputIngredients = '"' + RECIPEINGREDIENTS.value + '" ';

	console.log(output(outputIngredients, NEWLINE))


	// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

	// var recipeIngredientArray = RECIPEINGREDIENTS.value.split('\n').join('", "');
	// outputIngredients.innerText = '"' + recipeIngredientArray + '" ';
	outputIngredients.innerText = output(RECIPEINGREDIENTS.value, NEWLINE);

	// var recipeInstructionsArray = RECIPEINSTRUCTIONS.value.split('\n').join('", "');
	// outputInstructions.innerText = '"' + recipeInstructionsArray + '" ';
	outputInstructions.innerText = output(RECIPEINSTRUCTIONS.value, NEWLINE);



}, false);




