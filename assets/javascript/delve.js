// function query() {
//   var queryURL = "http://api.pathofexile.com/ladders/Standard";
//   return queryURL;
// }

function response(poeData) {
  console.log(poeData);
  for (var i = 0; i < 50; i++) {
    console.log(`Character name: ${poeData.entries[i].character.name}`);
  }
}

$(document).ready(function() {
  console.log('Ready');
  // var queryURL = query();
  var queryURL = "http://api.pathofexile.com/ladders/Standard?offset=49&limit=50";

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(response);
})