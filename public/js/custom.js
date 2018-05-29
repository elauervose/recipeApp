$(document).ready(function() {
  "use strict";

  // Call recipe endpoint
  $.getJSON("/recipes")

  //drawPackageDetails();
});

function makeRecipes(){

    function makeRecipeExcerpts(excerpts){

      _.each(data, function(excerpt) {
        var tmplRecipeExcerpt = $($("#template-recipe-excerpt").html());
        console.log(excerpt);
        $("a.recipe-url", tmplRecipePage).attr(data.url);
        $("a.recipe-url2", tmplRecipePage).attr(data.url);
        $("a.recipe-url3", tmplRecipePage).attr(data.url);
        $("img.recipe-image", tmplRecipePage).attr(data.image);

        $("div.inner .recipe-title", tmplRecipePage).html(data.title);
        $("p.recipe-description", tmplRecipePage).html(data.description);

        // _NOW_ we add this template to the index page
        $("#recipeExcerpts").append(tmplRecipeExcerpt);

        });
      _.each(data, function() {
        var tmplRecipePage = $($("#template-recipe-page").html());

        });
    }
    makeRecipes();
}

