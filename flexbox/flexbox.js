// Get all div elements
var divs = document.querySelectorAll('div');

// Use forEach to loop through all div elements
divs.forEach(function(div) {
  // Add onclick attribute to each div
  div.onclick = function() {
    location.href = 'http://www.google.com';
  };
});
