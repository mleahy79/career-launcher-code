let darkModeToggle = false;

// Load saved preference on page load
window.addEventListener('load', () => {
  const savedDarkMode = localStorage.getItem('dark') === '1';
  if (savedDarkMode) {
    document.body.classList.add('dark');
    darkModeToggle = true;
    const checkbox = document.querySelector('.virtual-btn');
    if (checkbox) checkbox.checked = true;
  }
});

function toggleDarkMode() {
  darkModeToggle = !darkModeToggle;
  if (darkModeToggle) {
    document.body.classList.add('dark');
    localStorage.setItem('dark', '1');
  } else {
    document.body.classList.remove('dark');
    localStorage.setItem('dark', '0');
  }
}

// API Key for RapidAPI JSearch
//const API_KEY = 'ak_ykts7xy35pjfj5jqsezjrhbdqvhdu4vf1sssty4s7dhrzgj';

async function searchChange(event) {
  const query = event.target.value;
  let url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query)}&'ak_ykts7xy35pjfj5jqsezjrhbdqvhdu4vf1sssty4s7dhrzgj'page=1&num_pages=1&country=us&date_posted=all`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '01e4b7440cmsh2b61c116d432172p1b6401jsn405fdd030609',
      'x-rapidapi-host': 'jsearch.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

const searchJobs = () => {
  const searchInput = document.getElementById('job-search-input');
  if (!searchInput || !searchInput.value) {
    alert('Please enter a job search query');
    return;
  }

  const query = searchInput.value;
  searchChange({ target: { value: query } });
};

function showSearchResults() {
  query.innerHTML = showSearchResults.map(result => {
    return `<div class="job-result">
      <h3>${result.title}</h3>
      <p>${result.company_name} - ${result.location}</p>
      <a href="${result.job_link}" target="_blank">View Job</a>
    </div>`;
  }).join('');