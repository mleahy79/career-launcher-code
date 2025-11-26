let darkModeToggle = false;


function toggleDarkMode() {
    darkModeToggle = !darkModeToggle
   if (darkModeToggle) {
    document.body.classList.add("dark-mode");
   }
   
   else {
    document.body.classList.remove("dark-mode");
    
}
}




fetch('https://api.openwebninja.com/jsearch/search?query=developer+jobs+in+chicago&page=1&num_pages=1&country=us&language=en&date_posted=today&work_from_home=false&employment_types=FULLTIME&job_requirements=no_experience&radius=1&exclude_job_publishers=BeeBe%2CDice&fields=employer_name%2Cjob_publisher%2Cjob_title%2Cjob_country', {
  headers: {
    'x-api-key': ak_ykts7xy35pjfj5jqsezjrhbdqvhdu4vf1sssty4s7dhrzgj
  }
})
//ak_ykts7xy35pjfj5jqsezjrhbdqvhdu4vf1sssty4s7dhrzgj//
    .then(response => response.json())
    .then(data => {
        const jobsContainer = document.getElementById('jobs-container');
        data.results.forEach(job => {
            const jobElement = document.createElement('div');
            jobElement.classList.add('job');

            jobElement.innerHTML = `
                <h2>${job.job_title}</h2>
                <p><strong>Company:</strong> ${job.employer_name}</p>
                <p><strong>Location:</strong> ${job.job_country}</p>
                <p><strong>Publisher:</strong> ${job.job_publisher}</p>
            `;

            jobsContainer.appendChild(jobElement);
        });
    })
    .catch(error => console.error('Error fetching job data:', error));  

    
    
    
    
    
    /*const settings = {
  async: true,
  crossDomain: true,
  url: 'https://api.openwebninja.com/jsearch/search',
  method: 'GET',
  headers: {}
};

$.ajax(settings).done(function (response) {
  console.log(response);
});*/
