







	// **********************************************
	// Alternate methods

	// Using the regex method
	// NOTE: This does not strip off whitespace and there's not really a good way to do that without
	// a much more coplicated regex.
	// A regex that _might_ work to strip values: `replace(/\w*(\n)\w*/, '", "')`
	let tags = RECIPENEWTAG.value
		.replace(REGEX, '", "')
	
	// Using map, split, trim, and toJSON
	// split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
	// trim: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
	// map: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
	// NOTE: map only works on proper arrays, thus we need to 
	let tags = RECIPENEWTAG.value
		.split("\n")
		.map(function (x) {x.trim()})
	
	// Using ES6 template literals: https://flaviocopes.com/javascript-template-literals/
	// JSON.stringify (just on the array): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON
	let output = `
		{
			id: ${},
			title: "${RECIPETITLE.value}",
			image: "${RECIPEIMAGE.value}",
			tags: "${JSON.stringify(tags)}"
		}
	`.replace(/^\t\t/g, '') // Clean up the indentation by removing the first 2 tabs of each line

	// Using toJSON on a whole object
	// NOTE: This doesn't really accomplish your goals directly because it creates "dehydrated" JSON
	// which you would then need to run through `JSON.parse()`
	// String.prototype.toJSON: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toJSON
	// JSON.parse(): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
	let outputObject = {
		id: 3,
		title: RECIPETITLE.value,
		tags: tags
	}
	let outputString = outputObject.toJSON // or JSON.stringify(outputObject)

