$(document).ready(function() {
  "use strict";

  // Call recipe endpoint
  $.getJSON("/recipes")
    .done(makeRecipeExcerpts)
    .fail(function() {
      console.log( "error" );
    })
});

function makeRecipeExcerpts(excerpts){
  // console.log(excerpts);
  $.each(excerpts, function(index, excerpt) {
    // console.log(excerpt);
    var tmplRecipeExcerpt = $($("#template-recipe-excerpt").html());
    $("a.recipe-url", tmplRecipeExcerpt).attr(excerpt.url);
    $("a.recipe-url2", tmplRecipeExcerpt).attr(excerpt.url);
    $("a.recipe-url3", tmplRecipeExcerpt).attr(excerpt.url);
    $("img.recipe-image", tmplRecipeExcerpt).attr(excerpt.image);

    $("div.inner .recipe-title", tmplRecipeExcerpt).html(excerpt.title);
    $("p.recipe-description", tmplRecipeExcerpt).html(excerpt.description);

    // _NOW_ we add this template to the index page
    $("#recipeExcerpts").append(tmplRecipeExcerpt);

  });
}

