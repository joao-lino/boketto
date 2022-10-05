function search_article() {
	let input = document.getElementById('searchbar').value
	input=input.toLowerCase();
	let x = document.getElementsByClassName('card');
	
	for (i = 0; i < x.length; i++) {
		if (!x[i].innerHTML.toLowerCase().includes(input)) {
			x[i].style.display="none";
		}
		else {
			x[i].style.display="list-item";				
		}
	}
}

const readingProgress = document.querySelector('#reading-progress-fill');
document.addEventListener('scroll', function(e) {
  let w = (document.body.scrollTop || document.documentElement.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight) * 100;
  readingProgress.style.setProperty('width', w + '%');
});

//darkmode

const toggleBtn = document.getElementById("toggle-btn");
const theme = document.getElementById("body");
let darkMode = localStorage.getItem("dark-mode");
var logo = document.getElementById("main-logo");
var themeIcon = document.getElementById("sun");
var bars = document.getElementById("bars");

const enableDarkMode = () => {
  theme.classList.add("dark-mode-theme");
  toggleBtn.classList.remove("dark-mode-toggle");
  localStorage.setItem("dark-mode", "enabled");
  logo.src = "icons/bokettoiconwhite.svg";
  themeIcon.src = "./icons/moon.svg";
  bars.src = "icons/bars-white.svg";
};

const disableDarkMode = () => {
  theme.classList.remove("dark-mode-theme");
  toggleBtn.classList.add("dark-mode-toggle");
  localStorage.setItem("dark-mode", "disabled");
  logo.src="icons/bokettoicon.svg";
  themeIcon.src = "./icons/sun.svg";
  bars.src = "./icons/bars.svg"; 
   
};

if (darkMode === "enabled") {
  enableDarkMode();

  // set state of darkMode on page load
}

toggleBtn.addEventListener("click", (e) => {
  darkMode = localStorage.getItem("dark-mode"); // update darkMode when clicked
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});


/* Open */
function openNav() {
  document.getElementById("hidden-nav").style.height = "100%";
}

function closeNav() {
  document.getElementById("hidden-nav").style.height = "0%";
}

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").style.top = "0";
  }
  else {
    document.querySelector("header").style.top = "-115px";
  }

  prevScrollpos = currentScrollPos;
}
