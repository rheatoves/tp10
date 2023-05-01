/* JavaScript for TP10 */

// Add some code to wait for the DOM
document.addEventListener("DOMContentLoaded", function() {
  
  // code to load API
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'fd8344c957msh5cb62240c6311a8p100450jsnbd15e4952e7a',
		  'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };
  
  fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Pullman%2C%20WA', options)
    .then(response => response.json())
    .then(function(response) {
      document.querySelector("#tempF span").innerHTML = response.current.temp_f;
      document.querySelector("#tempC span").innerHTML = response.current.temp_c;
      return response;
    
  })
    .catch(err => console.error(err));
  
});