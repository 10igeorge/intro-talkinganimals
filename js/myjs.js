$(document).ready(function() {

  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");

    $("ul#cat").children("li").first().click(function() {
      $(this).remove();
    });
  });

    $("span.kitty").click(function() {
      $("ul#cat").after("<img src=http://imagej.nih.gov/ij/images/cat.jpg>");
  });

  $("button#bark").click(function() {
    $("ul#dog").prepend("<li>Bark!</li>");

    $("ul#dog").children("li").first().click(function() {
      $(this).remove();
    });
  });

});
