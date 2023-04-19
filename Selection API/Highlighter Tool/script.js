function highlightSelection() {
  var selection = window.getSelection();
  var range = selection.getRangeAt(0);
  var highlight = document.createElement("span");
  highlight.setAttribute("class", "highlight");
  range.surroundContents(highlight);
}

var content = document.getElementById("content");

content.addEventListener("mouseup", function() {
  setTimeout(function() {
    highlightSelection();
  }, 0);
});

content.addEventListener("touchend", function() {
  setTimeout(function() {
    highlightSelection();
  }, 0);
});

