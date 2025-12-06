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

//drop down menu
function openMenu() {
  document.body.classList.add("menu--open");
}

function closeMenu() {
  document.body.classList.remove("menu--open");
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

const searchJobs = async () => {
  const textareas = document.querySelectorAll('.search-bar');
  
  if (!textareas || textareas.length === 0) {
    alert('Error: Search form not found');
    console.error('No .search-bar elements found');
    return;
  }

  const jobTitle = textareas.length > 0 && textareas[0] ? textareas[0].value.trim() : '';
  const jobDetails = textareas.length > 1 && textareas[1] ? textareas[1].value.trim() : '';
  const salary = textareas.length > 2 && textareas[2] ? textareas[2].value.trim() : '';
  const location = textareas.length > 3 && textareas[3] ? textareas[3].value.trim() : '';

  const queryParts = [jobTitle, jobDetails, salary, location].filter(part => part.length > 0);
  
  if (queryParts.length === 0) {
    alert('Please enter at least one search criteria');
    return;
  }

  const query = queryParts.join(' ');

  try {
    const resultsContainer = document.getElementById('job-results-container');
    if (!resultsContainer) {
      alert('Error: Results container not found');
      console.error('No #job-results-container element found');
      return;
    }
    
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = '<p>Loading job results...</p>';

    const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query)}&page=1&num_pages=1&country=us&date_posted=all`;
    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': '01e4b7440cmsh2b61c116d432172p1b6401jsn405fdd030609',
        'x-rapidapi-host': 'jsearch.p.rapidapi.com'
      }
    };

    const response = await fetch(url, options);
    const data = await response.json();
    
    console.log('Job Results:', data);

    // Display results
    if (data.data && data.data.length > 0) {
      const resultsHTML = data.data.map(job => `
        <div class="job-result">
          <h3>${job.job_title || 'No Title'}</h3>
          <p><strong>${job.employer_name || 'Unknown Company'}</strong></p>
          <p>${job.job_location || 'Remote'}</p>
          <p>${job.job_description?.substring(0, 200) || 'No description'}...</p>
          <a href="${job.job_apply_link || '#'}" target="_blank" class="job-link">Apply Now</a>
        </div>
      `).join('');
      
      resultsContainer.innerHTML = `<h2>Job Results (${data.data.length})</h2>${resultsHTML}`;
    } else {
      resultsContainer.innerHTML = '<p>No jobs found. Try a different search.</p>';
    }
  } catch (error) {
    console.error('Error searching jobs:', error);
    const resultsContainer = document.getElementById('job-results-container');
    resultsContainer.style.display = 'block';
    resultsContainer.innerHTML = '<p>Error searching for jobs. Please try again.</p>';
  }
};










/*function contact(event) {
    event.preventDefault();
    const form = document.querySelector("#contact__form");
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    
    loading.classList.add("modal__overlay--visible");
    form.style.display = "none"; // Hide the form immediately when showing loading

    emailjs.sendForm(
        "service_fl431en", 
        "template_2e4bnci", 
        event.target,
        "HKypPWgOK6TsFhyt_")
        .then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList.add("modal__overlay--visible");
            // Form stays hidden when showing success
        })
        .catch((error) => {
            loading.classList.remove("modal__overlay--visible");
            form.style.display = "block"; // Show form again if there's an error
            console.error("EmailJS error:", error);
            alert("the email service is temporarily unavailable. Please contact me directly at mitchellleahy046@gmail.com");
        });*/

