
const RLIST = document.querySelector("#recipeList");
const LITEM = document.querySelector(".recipeListItem");




var recipesMeta = [
	new IndexItem("Ginger Beef Stir-Fry", "img/ginger-beef.png", "HelloFresh", "https://www.hellofresh.com/recipes/ginger-beef-stir-fry-54d39fa96ced6e83368b4567", ["meal plan", "summer", "hot weather"], "Tender beef and crisp asparagus are quickly stir-fried with warming ginger and served over fluffy basmati rice. Hoisin sauce adds a touch of sweetness and depth of flavor.", "/ginger-beef-stir-fry" ),
	new IndexItem("Black Bean and Farro Salad with Apples and Cilantro Vinaigrette", "img/black-bean-farro-salad.png", "HelloFresh", "https://www.hellofresh.com/recipes/black-bean-and-farro-salad-55ae8b1ff8b25e10218b4567", ["meal plan", "summer", "hot weather"], "Black beans and farro team up beautifully in this ultra-hearty grain salad. The duo pairs unexpectedly well with crunchy Granny Smith apple and creamy avocado. A bright cilantro and shallot vinaigrette ties the whole dish together.", "/black-bean-farro-salad"),
	new IndexItem("Coconut-Crusted Chicken Fingers with Garlic Green Beans and Spiced Sweet Potato Fries", "img/coconut-crusted-chicken-fingers.png", "HelloFresh", "https://www.hellofresh.com/recipes/coconut-crusted-chicken-fingers-with-garlic-green-beans-and-spiced-sweet-potato-fries-565dc20179a23cdd658b4567", ["meal plan", "summer", "hot weather"], "Crispy panko and lightly sweet coconut give ordinary chicken fingers a major boost. For a smoky-sweet twist on oven fries, we’re sprinkling these sweet potatoes with a touch of paprika. A side of garlicky green beans is the perfect 5-minute side dish.", "/coconut-crusted-chicken-fingers"),
	new IndexItem("Blackened Catfish with Crispy Potatoes and Blistered Summer Vegetables", "img/blackened-catfish.png", "HelloFresh", "https://www.hellofresh.com/recipes/blackened-catfish-55c279aff8b25e97088b4567", ["meal plan", "summer", "hot weather"], "Typically battered and fried, catfish is a staple of Southern cooking. For a lighter preparation, we’re blackening this flaky fish with a potent mix of spices. A side of crispy roasted potatoes and caramelized vegetables compliments the dish; a sprinkling of chopped cilantro and a wedge of lemon brightens it up.", "/blackened-catfish" ),
	new IndexItem("Plantain and Black Bean Tostadas with Pickled Red Onion, Avocado, and Feta", "img/plantain-and-black-bean-tostadas.png", "HelloFresh", "https://www.hellofresh.com/recipes/plantain-and-black-bean-tostadas-55afd3804dab71fe188b4567", ["meal plan", "summer", "hot weather"], "Plantains are a staple of Latin and South American cuisine—used both in their ripe and unripe forms. Ripe, spotted yellow plantains can be fried into maduros. Starchy and slightly sweet, maduros are the star of these tostadas. Paired with the bite of pickled onion, the creaminess of avocado, and smoky cumin, each bite has the perfect balance of flavor.", "/plantain-black-bean-tostadas")
	];


function IndexItem(title, img, author, authorurl, tags, description, recipeurl) {
	this.title = title;
	this.img = img;
	this.author = author;
	this.authorurl = authorurl;
	this.tags = tags;
	this.description = description;
	this.recipeurl = recipeurl;
}


// Create a new recipe item element 
// ***************************************************


// console.log(newItem);


// for loop to go through all the recipes in recipeMeta
// ***************************************************

for(let i = 0; i<recipesMeta.length; i++) {

	var newNode = document.createElement("div");
	
	newNode.className = "recipeListItem";
	newNode.classList.add("media");

	newNode.innerHTML = LITEM.innerHTML;

	RLIST.appendChild(newNode);

	const LTITLE = newNode.querySelector(".listTitle a");
	const LIMG = newNode.querySelector(".listImage");
	const LAUTH = newNode.querySelector(".listAuth");
	const LTAGS = newNode.querySelector("li.listTags");
	const LDESC = newNode.querySelector(".listDescription");
	const LURL = newNode.querySelector("a.recipeListUrl");



	let addInfo = recipesMeta[i].title;
	// console.log(addInfo);
	LTITLE.innerText = addInfo;

	let addImg = recipesMeta[i].img;
	LIMG.src = addImg;

	let addDesc = recipesMeta[i].description;
	LDESC.innerText = addDesc;
	
}

LITEM.remove();

console.log(RLIST.innerHTML);





