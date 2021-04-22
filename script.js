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

function menuOptionsState(breweries) {   // list of breweries passed in as an argument 
  const states = breweries.map((brewery) => { // creates new array called states
    return brewery.state;
  })
  let uniqueStates = states.filter((val, index, val2) => { // why do I need to make a copy if I already have the array called states
    return val2.indexOf(val) == index;
  })
  console.log(uniqueStates); // print variable called uniqueStates
  let stateDropdown = document.querySelector('#search-state'); // select id and assign it to the new variable called stateDropDown
  uniqueStates.forEach((state) => {  // select the array called uniqueStates and loop through each state
    let stateOption = document.createElement('option'); // create an element tag called option and assign it to the new variable called stateOption
    if (state === null) { // if the state variable has a value of null then return false
      return false;
    } else {
      stateOption.innerText = state; // include the name of the state to the space between the tags
      stateOption.value = state; // what is this doing? 
      stateDropdown.append(stateOption); // grab the option element and append it to the stateDropDown variable
    }
  })
}

// Create an event listener 
// Create a function that stores the data selected 
const button = document.getElementById('search');
console.log(button);
button.addEventListener('click', makeRequestState);