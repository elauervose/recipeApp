import React from "react"

import firebase from "./auth/firebase"

import Account from "./auth/Account"
import RecipeList from "./recipe/RecipeList"

class BaseApp extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recipes: [],
      error: null,
      isLoaded: false
    }

    this.firebase = firebase
    this.db = firebase.firestore()
    this.recipesDbRef = firebase.firestore().collection('recipes')

    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    this.recipesDbRef.get().then(this.handleChange)
  }

  handleChange(recipeSnapshot) {
    let newRecipes = []
    recipeSnapshot.forEach(function (doc) {
      console.log(doc.id, doc.data())
      newRecipes.push({id: doc.id, ...doc.data()})
    })
    this.setState({recipes: newRecipes})
    debugger
  }

  render() {
    return (
      <React.Fragment>
        <Account />
        <RecipeList recipes={this.state.recipes} />
      </React.Fragment>
    )
  }
}

export default BaseApp

window.loaded_recipes = [
  {
    "id": 1,
    "url": "/tuscan-sausage-linguine",
    "title": "Tuscan Sausage Linguine",
    "subtitle": "with Zucchini, Chilies, and Parmesan",
    "description": "Juicy pork sausage, thyme, and garlic create the perfect flavor base for this classic pasta sauce. Zesty lemon and spicy chili flakes add a serious kick. This recipe is so simple and delicious, it’s sure to become a part of your weekly repertoire.",
    "image": "",
    "ingredients": [
      {
        "name": "Sweet Italian Sausage",
        "amount": 9,
        "unit": "oz"
      },
      {
        "name": "Garlic",
        "amount": 2,
        "unit": "cloves"
      },
      {
        "name": "Lemon",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Chili",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "Diced tomatoes",
        "amount": 1,
        "unit": "box"
      },
      {
        "name": "Linguine",
        "amount": 6,
        "unit": "oz"
      },
      {
        "name": "Red Onion",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Zucchini",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Parmesan",
        "amount": 1,
        "unit": "oz"
      },
      {
        "name": "Dried Thyme",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "Olive Oil",
        "amount": 2,
        "unit": "tsp"
      }
    ],
    "directions": [
      "1: Prep the ingredients: Bring a large pot of water with a large pinch of salt to a boil. Quarter the zucchini lengthwise, then thinly slice widthwise. Halve, peel, and thinly slice the onion. Mince or grate the garlic. Cut half of the lemon into wedges. Remove the sausage from its casing.",
      "2: Cook the sausage: Heat a drizzle of oil in a large pan over medium- high heat. Add the sausage and cook, breaking the meat up into pieces, for 5-6 minutes, until golden brown and cooked through. Set aside.",
      "3: Cook the vegetables: Add the onions, zucchini, and another drizzle of oil to the same pan over medium heat and cook, tossing, for 5-6 minutes, until softened. Add the garlic, thyme, and a pinch of chili flakes (to taste, add a little and go up from there) and cook for 30 seconds, until fragrant. Season with salt and pepper.",
      "4: Cook the linguine: Add the linguine to the boiling water and cook for 9-10 minutes, until al dente. Drain.",
      "5: Add the sausage and diced tomatoes to the pan with the zucchini and simmer until the rest of the meal is ready. Season with salt and pepper. TIP: Depending on the sweetness of your tomatoes, you may want to add up to a teaspoon of sugar to the sauce.",
      "6: Add the drained linguine to the pan and toss to combine. Finish with a squeeze of lemon.",
      "7: Divide the linguine between bowls and sprinkle with Parmesan cheese. Serve with a wedge of lemon, if desired, and enjoy!"
    ],
    "tags": [
      "Meal Plan",
      "Summer",
      "Easy"
    ],
    "source": {
      "name": "HelloFresh",
      "url": "https://www.hellofresh.com/recipe/detail/5668737dfd2cb986598b4567/tuscan-sausage-linguine-with-zucchini-chilies-and-parmesan/"
    },
    "added": "",
    "updated": ""
  },
  {
    "id": 2,
    "url": "/warm-grain-salad",
    "title": "Warm Grain Salad ",
    "subtitle": "With Barley, Avocado & Burst Tomatoes",
    "description": "We love a good grain salad - it's all about the mix-ins! Here, We're tossing in Creamy butter beans, silky avocado, and burst grape tomatoes for a fun mix of colors and textures. Torn basil adds a touch of lemony freshness for the perfect finish.",
    "image": "",
    "ingredients": [
      {
        "name": "Pearl Barley ",
        "amount": 0.75,
        "unit": "C"
      },
      {
        "name": "Grape Tomatoes",
        "amount": 1,
        "unit": "bunch"
      },
      {
        "name": "Shallot",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Basil",
        "amount": 1,
        "unit": "bunch"
      },
      {
        "name": "Avocado",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Butter beans",
        "amount": 1,
        "unit": "can"
      },
      {
        "name": "Balsamic vinegar ",
        "amount": 2,
        "unit": "Tbsp"
      },
      {
        "name": "Dijon Mustard",
        "amount": 1,
        "unit": "Tbsp"
      },
      {
        "name": "Olive Oil",
        "amount": 2,
        "unit": "Tbsp"
      }
    ],
    "directions": [
      "1: Place barley in a large pot with 4 cups of water, stock concentrate, and a large pinch of salt. Bring to a boil, reduce to a simmer, and cook for about 20 minutes, until tender. Drain and Set aside.",
      "2: Meanwhile, halve the tomatoes. Tear the basil leaves, Drain and rinse the butter beans. Thinly slice the shallot.",
      "3: Heat ½ tablespoon olive oil in a small pan over medium heat. Add the tomatoes and season with salt and pepper. Cook, tossing, for about 5 minutes, until slightly softened. Set aside.",
      "4: Meanwhile halve, and pit the avocado. Scoop out the flesh with a spoon and thinly slice. HINT: You can slice the avocado halves in the skin With a paring knife and use a spoon to Scoop out the slices!",
      "5: In a medium bowl, whisk together a tablespoon dijon mustard (or more to taste), 2 tablespoons balsamic vinegar, and 1 1/2 tablespoons olive oil. Season with salt and pepper. Toss in Warm barley, avocado, butter beans, shallot, and tomatoes, Taste and season with salt and pepper.",
      "6: Serve the warm salad with torn basil on top!"
    ],
    "tags": [
      "Meal Plan",
      "Summer",
      "Vegetarian"
    ],
    "source": {
      "name": "HelloFresh",
      "url": ""
    },
    "added": "",
    "updated": ""
  },
  {
    "id": 3,
    "url": "/Vietnamese-beef-stir-fry",
    "title": "Vietnamese Beef Stir-Fry",
    "subtitle": "with Basil, Coconut Rice, and Crispy Green Beans",
    "description": "Stir-frying is one of the best techniques for putting dinner on the table in under 30 minutes. An aromatic combo of basil, garlic, and serrano chili gives this dish an intense flavor base. Served over fluffy coconut rice, this is one stir-fry you’ll want to make again and again.",
    "image": "",
    "ingredients": [
      {
        "name": "Ground Beef",
        "amount": 1,
        "unit": "oz"
      },
      {
        "name": "Scallions",
        "amount": 2,
        "unit": ""
      },
      {
        "name": "Serrano Pepper",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Basil",
        "amount": 1,
        "unit": "oz"
      },
      {
        "name": "Garlic",
        "amount": 2,
        "unit": "cloves"
      },
      {
        "name": "Red Bell Pepper",
        "amount": 2,
        "unit": ""
      },
      {
        "name": "Green Beans",
        "amount": 8,
        "unit": "oz"
      },
      {
        "name": "Lime",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Basmati Rice",
        "amount": 1,
        "unit": "C"
      },
      {
        "name": "Lite Coconut Milk",
        "amount": 1,
        "unit": "C"
      },
      {
        "name": "Oil",
        "amount": 2,
        "unit": "tsp"
      }
    ],
    "directions": [
      "1: Make the coconut rice: preheat the oven to 400 degrees. Bring 1⁄2 cup coconut milk, 1⁄2 cup water, and a large pinch of salt to a boil in a small pot. Once boiling, add the rice, cover, and reduce to a simmer for 15 minutes, until tender.",
      "2: Thinly slice the scallions, keeping the greens and whites separate. Core, seed, and remove the white ribs from the bell pepper, then thinly slice. Mince or grate the garlic. Thinly slice the serrano pepper, removing the seeds if you prefer less heat. Slice the lime into wedges. Tear the basil leaves into small pieces and discard the stems. TIP: Make sure to thoroughly wash hands and surfaces after handling the serrano pepper. The heat is transferable and can burn more than just your throat!",
      "3: Toss the green beans on a baking sheet with 1 teaspoon oil and a pinch of salt and pepper. Place in the oven for about 15 minutes, until soft and slightly caramelized.",
      "4: Start the stir-fry: meanwhile, heat 1 teaspoon oil in a large pan over medium-high heat. Add the bell pepper and cook, tossing for 5-6 minutes, until soft. Add the scallion whites, garlic, and a bit of serrano pepper (to taste, it’s spicy!), to the pan and cook, tossing for 1-2 minutes, until softened and fragrant. Season with salt and pepper.",
      "5: Finish the stir-fry: add the ground beef to the pan and cook, breaking up the meat into pieces, until browned and cooked through. Season with salt and pepper.",
      "6: Remove the pan from the heat and stir in the torn basil leaves.",
      "7: Fluff the coconut rice with a fork and plate. Top with the beef stir fry, green beans, and scallion greens. Squeeze a lime wedge over top and enjoy!"
    ],
    "tags": [
      "Meal Plan",
      "Summer"
    ],
    "source": {
      "name": "",
      "url": ""
    },
    "added": "",
    "updated": ""
  },
  {
    "id": 4,
    "url": "/chicken-fajitas",
    "title": "Chicken Fajitas",
    "subtitle": "with Homemade Guacamole and Pico De Gallo",
    "description": "  No need to go to a restaurant tonight! Make your own sizzling chicken fajitas with crunchy red bell pepper, soft caramelized onion, and creamy guacamole. This dish has party written all over it.",
    "image": "",
    "ingredients": [
      {
        "name": "Chicken Breasts",
        "amount": 2,
        "unit": ""
      },
      {
        "name": "Avocado",
        "amount": 2,
        "unit": ""
      },
      {
        "name": "6-inch Flour Tortillas",
        "amount": 8,
        "unit": ""
      },
      {
        "name": "Red Bell Pepper",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Tomato, Standard",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Lime",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Red Onion",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Jalapeño",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Cilantro",
        "amount": 0.5,
        "unit": ""
      },
      {
        "name": "Sour Cream (or tofutti sour cream)  2 - 4 oz",
        "amount": 4,
        "unit": ""
      },
      {
        "name": "Chili Powder",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "name": "Olive Oil",
        "amount": 3,
        "unit": "Tbsp"
      }
    ],
    "directions": [
      "1: Preheat the oven to 400 degrees (if you have a microwave, you can skip this step!). Halve, peel, and thinly slice half the red onion. Dice the remaining half red onion. Finely dice the jalapeño, removing the seeds and ribs if you prefer less heat. Core, seed, and dice the tomato. Halve the lime. Finely chop the cilantro. Core, seed, and remove the white ribs from the bell pepper then thinly slice. Slice the chicken into thin strips.",
      "2: Make the pico de gallo: in a small bowl, combine the tomato, half the cilantro, half the diced onion, a squeeze of lime, and jalapeño (to taste). Season with salt and pepper.",
      "3: Make the guacamole: halve, peel, and pit the avocado. Scoop it into a small bowl and mash with the remaining cilantro, a squeeze of lime, and as much remaining diced onion and jalapeño as you like. Season with salt and pepper.",
      "4: Heat 1⁄2 Tablespoon olive oil in a large pan over medium-high heat. Add the sliced red onion and bell pepper and cook, tossing, for 5-6 minutes until soft. Season with salt and pepper and set aside.",
      "5: Wrap the tortillas in foil and place in the oven to warm for 5 minutes. If you have a microwave, wrap them in a damp paper towel and microwave on high for 30 seconds after step 6 instead.",
      "6: In the same pan you cooked the vegetables in, heat another 1⁄2 Tablespoon olive oil over medium-high heat. Season the chicken with salt and pepper and cook, tossing, for 3-4 minutes until browned. Once cooked, add the peppers, onions, 1⁄2 teaspoon chili powder, and a squeeze of lime to the pan. Cook for 30 seconds until fragrant, then remove from heat.",
      "7: Now for the fun part! Assemble fajitas with the tortillas, chicken mixture, pico de gallo, guacamole, and sour cream. Enjoy!"
    ],
    "tags": [
      ""
    ],
    "source": {
      "name": "",
      "url": ""
    },
    "added": "",
    "updated": ""
  },
  {
    "id": 5,
    "url": "/sweet-ginger-seared-tuna",
    "title": "Sweet Ginger Seared Tuna",
    "subtitle": "The Secret Ingredient (Ginger Jam)",
    "description": "",
    "image": "/GingerSearedTuna.jpg",
    "ingredients": [
      {
        "name": "ginger jam",
        "amount": 1.5,
        "unit": "Tbsp"
      },
      {
        "name": "soy sauce",
        "amount": 1,
        "unit": "Tbsp, (plus more for serving)"
      },
      {
        "name": "toasted sesame oil",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "sushi-grade tuna steak",
        "amount": 0.33,
        "unit": "pound"
      },
      {
        "name": "Pickled ginger, for serving",
        "amount": 2,
        "unit": "oz"
      }
    ],
    "directions": [
      "1: In a bowl, whisk together ginger jam, soy sauce, and sesame oil. Marinate the tuna in the sauce for 1 hour, covered in the fridge.",
      "2: Heat a grill pan over medium-high heat. Sear the tuna 2 minutes on each side. Thinly slice the tuna, and serve with pickled ginger and soy sauce on the side."
    ],
    "tags": [
      ""
    ],
    "source": {
      "name": "Serious Eats",
      "url": "http://www.seriouseats.com/recipes/2011/06/the-secret-ingredient-ginger-jam-sweet-ginger-tuna-recipe.html"
    },
    "added": "",
    "updated": ""
  },
  {
    "id": 6,
    "url": "/black-bean-farro-salad",
    "title": "Black Bean and Farro Salad",
    "subtitle": "with Apples and Cilantro Vinaigrette",
    "description": "Black beans and farro team up beautifully in this ultra-hearty grain salad. The duo pairs unexpectedly well with a crunchy Granny Smith apple and creamy avocado. A bright cilantro and shallot vinaigrette ties the whole dish together.",
    "image": "",
    "ingredients": [
      {
        "name": "Black Beans",
        "amount": 1,
        "unit": "can"
      },
      {
        "name": "Cilantro",
        "amount": 0.25,
        "unit": "oz."
      },
      {
        "name": "Farro",
        "amount": 1,
        "unit": "C"
      },
      {
        "name": "Avocado",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Apple",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "Shallot",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "White Wine Vinegar",
        "amount": 2,
        "unit": "Tbsp"
      },
      {
        "name": "Olive Oil",
        "amount": 2,
        "unit": "Tbsp"
      }
    ],
    "directions": [
      "1: Make the cilantro vinaigrette: in a large bowl, combine the cilantro, shallot, and 1 Tablespoon white wine vinegar. Whisk in 2 Tablespoons olive oil and season with salt and pepper.",
      "2: While the farro cooks, drain and rinse the beans. Finely chop the cilantro. Halve, peel, and mince the shallot.",
      "3: Make the cilantro vinaigrette: in a large bowl, combine the cilantro, shallot, and 1 Tablespoon white wine vinegar. Whisk in 2 Tablespoons olive oil and season with salt and pepper.",
      "4: Halve, pit, and dice the avocado. Cut the apple into 1⁄2-inch cubes, discarding the apple core. Toss the apple into the vinaigrette.",
      "5: When the farro is ready, toss it into the vinaigrette along with the black beans. Season with salt and pepper.",
      "6: Plate the farro mixture, then top with the avocado. Dig in and enjoy!"
    ],
    "tags": [
      ""
    ],
    "source": {
      "name": "",
      "url": ""
    },
    "added": "",
    "updated": ""
  },
  {
    "id": 7,
    "url": "/maple-vanilla-almond-clusters",
    "title": "Maple Vanilla Almond Clusters",
    "subtitle": "",
    "description": "",
    "image": "/maple-vanilla-almond-clusters.jpg",
    "ingredients": [
      {
        "name": "whole almonds",
        "amount": 1,
        "unit": "C"
      },
      {
        "name": "chopped pecans",
        "amount": 0.33,
        "unit": "C"
      },
      {
        "name": "butter",
        "amount": 1,
        "unit": "Tbsp"
      },
      {
        "name": "vanilla extract",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "maple syrup",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "water",
        "amount": 1,
        "unit": "Tbsp"
      },
      {
        "name": "sugar",
        "amount": 0.25,
        "unit": "C"
      }
    ],
    "directions": [
      "1: Toast nuts in a nonstick skillet over medium heat, stirring occasionally (about 5 minutes).",
      "2: Add water, vanilla, and maple syrup to sugar and stir to combine.",
      "3: Add sugar mixture and butter to toasted nuts. Continue to heat over medium, stirring constantly, until the mixture is sticky and no longer runny (about 3 minutes).",
      "4: Remove from heat and spread the nuts around in the pan. Let sit for a few minutes in the pan, give another stir and spread the nuts again. Sprinkle with a few shakes of table salt or pinches of sea salt if you like sweet/salty nuts (highly recommended by me)! Let sit for at least 1 hour in the pan or until cool and hardened (the flavor develops as they cool – so make sure you don’t eat them all right away). Break into chunks and enjoy!"
    ],
    "tags": [
      ""
    ],
    "source": {
      "name": "Pinch of Yum",
      "url": "http://pinchofyum.com/maple-vanilla-almond-clusters"
    },
    "added": "",
    "updated": ""
  },
  {
    "id": 8,
    "url": "/tuna-salad-lettuce-wraps",
    "title": "Tuna Salad Lettuce Wraps",
    "subtitle": "",
    "description": "These simple lettuce wraps stuffed with tuna salad, avocado, and tomatoes make a perfect, healthy lunch!",
    "image": "/tuna-salad-lettuce-wraps.jpg",
    "ingredients": [
      {
        "name": "can of albacore tuna, drained",
        "amount": 5,
        "unit": "oz"
      },
      {
        "name": "romaine lettuce leaves",
        "amount": 2,
        "unit": "large"
      },
      {
        "name": "dill relish",
        "amount": 1,
        "unit": "Tbsp"
      },
      {
        "name": "reduced-fat mayonnaise",
        "amount": 1,
        "unit": "Tbsp"
      },
      {
        "name": "dijon mustard",
        "amount": 2,
        "unit": "tsp"
      },
      {
        "name": "roma tomato, diced",
        "amount": 1,
        "unit": ""
      },
      {
        "name": "avocado, sliced",
        "amount": 0.25,
        "unit": ""
      },
      {
        "name": "freshly ground black pepper",
        "amount": 0.0,
        "unit": ""
      }
    ],
    "directions": [
      "1: Stir together tuna, relish, mayo, and mustard.",
      "2: Evenly spread tuna salad down the center of each lettuce leaf, stopping about two inches away from the green, leafy end.",
      "3: Arrange avocado slices and diced tomatoes over the tuna salad, sprinkle with pepper to taste, and serve immediately."
    ],
    "tags": [""],
    "source": {
      "name": "The Weary Chef 2013-2016 Author: Andi Gleeson",
      "url": "http://wearychef.com/quick-and-easy-lunch-ideas/"
    },
    "added": "",
    "updated": ""
  },
  {
    "id": 9,
    "url": "/maple-cinnamon-roasted-butternut-squash",
    "title": "Maple Cinnamon Roasted Butternut Squash",
    "subtitle": "",
    "description": "",
    "image": "/Maple-Roasted-Butternut-Squash.jpg",
    "ingredients": [
      {
        "name": "cubed butternut squash (peeled and seeded), about 3 lbs of peeled cubes",
        "amount": 8,
        "unit": "C"
      },
      {
        "name": "extra virgin olive oil",
        "amount": 2,
        "unit": "Tbsp"
      },
      {
        "name": "maple syrup",
        "amount": 2,
        "unit": "Tbsp"
      },
      {
        "name": "salt",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "name": "cinnamon",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "name": "cayenne",
        "amount": 2,
        "unit": "pinches"
      }
    ],
    "directions": [
      "1: Preheat oven to 425 degrees. If you are breaking down a whole butternut squash for this recipe rather than buying the prepared, peeled cubes, you will need a large squash (or two smaller squashes) totaling about 3 lbs. 3 oz. in weight to produce the correct amount of peeled cubes. For details on how to prepare squash for roasting, see this post: All About Butternut Squash",
      "Line 2 baking sheets with foil(optional--protects baking sheet when the sugars caramelize so it won 't be sticky/hard to clean). Spread out the cubes on the baking sheets.",
      "2: Drizzle the squash on each baking sheet of squash with 1 tbsp olive oil and 1 tbsp maple syrup (2 tbsp olive oil and 2 tbsp maple syrup total).",
      "3: Sprinkle each baking sheet evenly with 1/4 tsp salt, 1/4 tsp cinnamon and a pinch of cayenne (1/2 tsp salt, 1/2 tsp cinnamon, 2 pinches cayenne total).",
      "4: Toss the squash on the sheets with clean hands to coat evenly.",
      "5: Roast the sheets of squash for about 30 minutes, switching the baking sheets on their racks halfway through cooking, till the largest piece of squash is tender all the way through. Remove the baking sheets from the oven and turn on the broiler.",
      "6: Take turns placing each baking sheet under the broiler for 1-2 minutes longer to caramelize (the squash should be golden brown-- careful, it will brown very fast-- don't let it burn!). Serve warm."
    ],
    "tags": [
      ""
    ],
    "source": {
      "name": "Tori Avey",
      "url": "http://toriavey.com/toris-kitchen/2013/10/maple-cinnamon-roasted-butternut-squash/"
    },
    "added": "",
    "updated": ""
  },
  {
    "id": 10,
    "url": "/double-ginger-cookie",
    "title": "Double-Ginger Cookies",
    "subtitle": "",
    "description": "These simple cookies give just the right amount of sweet to satisfy your craving. Make a few batches, and freeze some to enjoy throughout the season.",
    "image": "/double-ginger-cookie.jpg",
    "ingredients": [
      {
        "name": "all-purpose flour",
        "amount": 1.5,
        "unit": "C"
      },
      {
        "name": "whole wheat flour",
        "amount": 1,
        "unit": "C"
      },
      {
        "name": "chopped crystallized ginger",
        "amount": 0.75,
        "unit": "C"
      },
      {
        "name": "baking powder",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "baking soda",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "name": "salt",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "name": "ground ginger",
        "amount": 0.5,
        "unit": "tsp"
      },
      {
        "name": "sugar, divided",
        "amount": 1.25,
        "unit": "C"
      },
      {
        "name": "applesauce",
        "amount": 0.5,
        "unit": "C"
      },
      {
        "name": "vegetable oil",
        "amount": 0.25,
        "unit": "C"
      },
      {
        "name": "grated lemon rind",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "lemon juice",
        "amount": 1,
        "unit": "tsp"
      },
      {
        "name": "vanilla extract",
        "amount": 0.25,
        "unit": "tsp"
      }
    ],
    "directions": [
      "1: Lightly spoon flours into dry measuring cups, and level with a knife. Combine flours and next 5 ingredients (flours through ground ginger); stir well with a whisk.",
      "2: Make a well in center of mixture. Combine 1 cup sugar, applesauce, and next 4 ingredients (applesauce through vanilla). Add to flour mixture, stirring just until moist; cover and chill dough at least 1 hour.",
      "3: Preheat oven to 350°.",
      "4: Lightly coat hands with flour. Shape dough into 24 balls (about 2 tablespoons each; dough will be sticky). Roll balls in 1/4 cup sugar. Place balls 2 inches apart on baking sheets coated with cooking spray.",
      "5: Bake at 350° for 15 minutes or until lightly browned. Cool 1 minute on pan. Remove from pan; cool completely on wire racks. (Note: These freeze well. Place cooled cookies in a heavy-duty zip-top plastic bag; store in freezer for up to 1 month. Thaw at room temperature.)"
    ],
    "tags": [
      ""
    ],
    "source": {
      "name": "Yummly",
      "url": "http://www.yummly.com/recipe/Double-Ginger-Cookies-1105082"
    },
    "added": "",
    "updated": ""
  }
]
