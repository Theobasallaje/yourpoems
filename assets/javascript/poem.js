var poemArray = [
    "My Poem, My Website My poem, my website My story, my birthright It’s murder under moonlight He put up a good fight It’s over, call CareFlight My alibi’s airtight My victim could be right But he’s dead, so I’m right"
];

// var poem = document.getElementById("poem");
// var poem2 = document.getElementsByClassName("poem2");
var poem = document.querySelectorAll(".poem");
// poem.textContent = poemArray[0];
for (i = 0; i < poem.length; i++) {
    poem[i].textContent = "title: " + poemArray[0];
}
