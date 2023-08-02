// Dynamised Innerve (npm inspo)
var words = ["Innerve'23", "Innovation", "Inspiration", "IGDTUW", "Ideation", "Interaction",
 "Integration", "Interface", "Implementation", "Intelligence", "Invention", "Incubation", 
 "Inference", "Information", "Integrity", "Inclusivity", "Interoperability", "Instruction", 
 "Iteration", "Internet", "Internet of Things", "Immersive", "I.D.E.", "Input", "Internet",
 "Imagination", "Internetworking", "Introspection", "Iconic", "Inferno"];

var wordElement = document.querySelector("#word");

wordElement.addEventListener("click", function () {
  var newWord = words[Math.floor(Math.random() * words.length)];
  wordElement.textContent = newWord;
});
