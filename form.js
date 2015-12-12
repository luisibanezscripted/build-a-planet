/* Control Planet Appearance */
function updatePlanetColor(){
    document.getElementById('theplanet').style.background = document.getElementById('planetcolor').value;
}

function updatePlanetName(){
    document.getElementById('planetname').innerHTML = document.getElementById('planetnameinput').value;
}


function updatePlanetSize(){
    var size = $('#size').val();
    $('#theplanet').width(size);
    $('#theplanet').height(size);
}

$( '#build' ).click(function() {
  updatePlanetColor();
  updatePlanetSize();
  updatePlanetName();
});

$( '#build' ).click(function() {
  updatePlanetColor();
  updatePlanetSize();
  updatePlanetName();
});

$( '#moon-add' ).click(function() {
    $('.moon').toggle()
});

$( '#ring-add' ).click(function() {
    $('#planetrings').toggle()
});

$( '#rocket' ).click(function() {
    $('#rocket-box').show()
    $('#rocket-box').slideUp(2000)
    collision($('#rocket-img'), $('.moon'))
});

 function collision($div1, $div2) {
      var x1 = $div1.offset().left;
      var y1 = $div1.offset().top;
      var h1 = $div1.outerHeight(true);
      var w1 = $div1.outerWidth(true);
      var b1 = y1 + h1;
      var r1 = x1 + w1;
      var x2 = $div2.offset().left;
      var y2 = $div2.offset().top;
      var h2 = $div2.outerHeight(true);
      var w2 = $div2.outerWidth(true);
      var b2 = y2 + h2;
      var r2 = x2 + w2;

      if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
      return alert('You SHOT THE MOON');
    }



