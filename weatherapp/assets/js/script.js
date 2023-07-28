var requestUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + weatherApi;
var weatherApi = 'fe5baa2400cee9f835272de23708b710';
var city = 


fetch(requestUrl)
    .then(function(response) {
        return response.json();
    })
   .then(function (data) {
    console.log('Fetch Response \n-------------');
    console.log(data);
})

        
    
      

    

