let toggleDarkMode = false;


function darkModeToggle() {
    toggleDarkMode = !toggleDarkMode
   if (toggleDarkMode) {
    document.body.classList.add("dark");
   }
   
   else {
    document.body.classList.remove("dark");
    
}
}



const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all');
xhr.setRequestHeader('x-rapidapi-key', '01e4b7440cmsh2b61c116d432172p1b6401jsn405fdd030609');
xhr.setRequestHeader('x-rapidapi-host', 'jsearch.p.rapidapi.com');

xhr.send(data);
  bottom: 0.05%
  const data = null;

const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener('readystatechange', function () {
	if (this.readyState === this.DONE) {
		console.log(this.responseText);
	}
});

xhr.open('GET', 'https://jsearch.p.rapidapi.com/search?query=developer%20jobs%20in%20chicago&page=1&num_pages=1&country=us&date_posted=all');
xhr.setRequestHeader('x-rapidapi-key', '01e4b7440cmsh2b61c116d432172p1b6401jsn405fdd030609');
xhr.setRequestHeader('x-rapidapi-host', 'jsearch.p.rapidapi.com');

xhr.send(data)
