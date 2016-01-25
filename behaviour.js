
var buttons = document.getElementById('solutions').getElementsByTagName('article');
var snippets = document.getElementById('snippets').getElementsByTagName('article');

function switchClass(e) {
	if(e.className === 'challenge') {
    for (var i = 0; i < buttons.length; i++) {
    	buttons[i].className = "challenge";
    }
    e.className = 'challenge_active';
  } else {
    e.className = 'challenge';
  }
  for (var i = 0; i < buttons.length; i++) {
  	if (buttons[i].className === "challenge_active") {
  		snippets[i].className = "code_visible";
  	} else {
  		snippets[i].className = "code_hidden";
  	}
  }
}
