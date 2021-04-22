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










// Callback function
/*
function getPosts(){
  setTimeout(() => {


  }, 1000);
}
*/