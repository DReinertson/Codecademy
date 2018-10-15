// Foursquare API Info
const clientId = 'QRTMAEMLVSOSZNU5ISWABQ5PIQIEYSLWOXJEO2K3YKKMDJY5';
const clientSecret = '4GTMNASYVDFXXKKXNR2XNPXFOTPM1GT12GTVJPVS04I33LUO';
const url = 'https://api.foursquare.com/v2/venues/explore?near=';


// APIXU Info
const apiKey = '';
const forecastUrl = 'http://api.apixu.com/v1/current.xml?key=';

// Page Elements
const $input = $('#city');
const $submit = $('#button');
const $destination = $('#destination');
const $container = $('.container');
const $venueDivs = [$("#venue1"), $("#venue2"), $("#venue3"), $("#venue4")];
const $weatherDivs = [$("#weather1"), $("#weather2"), $("#weather3"), $("#weather4")];
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const formatDate = () =>{
  const todayDate = new Date();
  let month = todayDate.getMonth();
  if(month < 10){
    month = "0" + month;
  };
  const year = todayDate.getFullYear();
  const day = todayDate.getDate();
  if(day < 10){
    day = "0" + day;
  }
  const fullDate = `${year}${month}${day}`
  return fullDate;
}
const date = formatDate();

// Add AJAX functions here:
const getVenues = async() => {
  const city = $input.val();
  const urlToFetch = `${url}${city}&limit=5&client_id=${clientId}&client_secret=${clientSecret}&v=${date}` 
  try{
    const response = await fetch(urlToFetch);
    if(response.ok){
      console.log(response);
    }
    const jsonResponse = await response.json();
    const venues = jsonResponse.response.groups[0].items.map(item => item.venue);
    return venues;
  }
  
  
  catch(error){
    console.log(error);
  }
}

const getForecast = async () => {
  const urlToFetch = `${forecastUrl}${apiKey}&q=${$input.val()}&days=4&hour=11`
  try{
    const response = await fetch(urlToFetch)
    if(response.ok){
      const jsonResponse = await response.json();
      console.log(jsonResponse);
    }
  }
  catch(error){
    console.log(error);
  }
}


// Render functions
const renderVenues = (venues) => {
  $venueDivs.forEach(($venue, index) => {
    // Add your code here:

    let venueContent = '';
    $venue.append(venueContent);
  });
  $destination.append(`<h2>${venues[0].location.city}</h2>`);
}

const renderForecast = (days) => {
  $weatherDivs.forEach(($day, index) => {
    // Add your code here:


    let weatherContent = '';
    $day.append(weatherContent);
  });
}

const executeSearch = () => {
  $venueDivs.forEach(venue => venue.empty());
  $weatherDivs.forEach(day => day.empty());
  $destination.empty();
  $container.css("visibility", "visible");
  getVenues()
  getForecast()
  return false;
}

$submit.click(executeSearch)
