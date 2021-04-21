let url = 'https://api.openbrewerydb.org/breweries?per_page=50';
// Make API request
// Create an async function called makeRequest to get the data for the breweries

async function makeRequestState() {

  try {
    const response = await axios.get(url);
    // typeList(response.data);
    console.log(response);
    menuOptionsState(response.data);
  } catch (error) {
    console.error(error);
  }
}

makeRequestState();
function menuOptionsState(breweries) {
  const states = breweries.map((brewery) => {

    return brewery.state;

  })
  let uniqueStates = states.filter((val, index, val2) => {
    return val2.indexOf(val) == index;

  })
  console.log(uniqueStates);
  let stateDropdown = document.querySelector('#search-state');
  uniqueStates.forEach((state) => {
    let stateOption = document.createElement('option');
    if (state === null) {
      return false;
    } else {
      stateOption.innerText = state;
      stateOption.value = state;
      stateDropdown.append(stateOption);
    }

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