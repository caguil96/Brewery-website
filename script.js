let url = 'https://api.openbrewerydb.org/breweries?';

// let parameters =

// Make API request

// Create an async function called makeRequest to get the data for the breweries

async function makeRequest() {

  try {
    const response = await axios.get(url);
    stateMenu(response.data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}

makeRequest();
const stateMenu = (breweries) => {
  breweries.forEach((brewery) => {
    let state = document.querySelector('#search-state');
    let stateOption = document.createElement('option');
    // state.option = brewery.state;
    stateOption.value = brewery.state;
    state.appendChild(stateOption);
  })

}

// Create a function called listBreweries to get the complete list of data from API
// Create a forEach loop inside the function to iterate through each "brewery" fom the list of "breweries"


// Grab the ID from by_city and assign it to a new variable called cityButton
// Create an event which is triggered by a click
// Send a message once cityButton is clicked




// Grab the ID from by_distance and assign it to a new variable called distanceButton
// Create an event which is triggered by a click
// Send a message once distanceButton is clicked




// Grab the ID from by_name and assign it to a new variable called nameButton
// Create an event which is triggered by a click
// Send a message once cityButton is clicked




// Grab the ID from by_state and assign it to a new variable called stateButton
// Create an event which is triggered by a click
// Send a message once stateButton is clicked


// Grab the ID from by_postal_code and assign it to a new variable called postalButton
// Create an event which is triggered by a click
// Send a message once postalButton is clicked


// Grab the ID from by_type and assign it to a new variable called typeButton
// Create an event which is triggered by a click
// Send a message once typeButton is clicked






// Callback function
/*
function getPosts(){
  setTimeout(() => {


  }, 1000);
}
*/