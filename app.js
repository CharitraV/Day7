var xhr = new XMLHttpRequest();

xhr.open("GET", 'https://restcountries.com/v3.1/all', true);
xhr.onload = function(){
    if(xhr.status === 200){
        var responseData= JSON.parse(xhr.responseText);    

        //a. Get all the countries from Asia continent /region using Filter method
        document.write("a. All the countries from Asia continent /region using Filter method are as following: <br> ")
        let countriesInAsia= responseData.filter(data => data.continents[0] == ['Asia'] );         
        countriesInAsia.forEach(resData => document.write(`country Name: ${resData.name.common} <br>`));
        document.write("<br>");

        //b. Get all the countries with a population of less than 2 lakhs using Filter method
        document.write("b.All the countries with a population of less than 2 lakhs using Filter method: <br> ")
        let countriesPopulation= responseData.filter(data => data.population < 200000 );         
        countriesPopulation.forEach(resData => document.write(`country Name: ${resData.population} <br>`));
        document.write("<br>");

        //c. Print the following details name, capital, flag, using forEach method
        document.write("<br> c.All the name, capital, flag, using forEach method: <br> ")        
           responseData.forEach(
            function(resData){
                document.write("County Name: ",resData.name.common,", Capital Name: ", resData.capital);  
                document.write("<br>");            
                var imageURL = resData.flags.png
                var showImage = document.createElement('img');
                showImage.src = imageURL;
                document.body.appendChild(showImage);
                document.write("<br>");
                
            })

        //d. Print the total population of countries using reduce method    
        let arrayPopulation = []
        responseData.forEach(value => arrayPopulation.push(value.population));                     
        let totalPopulation = arrayPopulation.reduce((accumulator, currentValue) => {
            return accumulator + currentValue;
        })  
        console.log(totalPopulation) 
        document.write(`<br> d. The total population of countries using reduce method is: ${totalPopulation} <br>`)     
        document.write("<br>");

        //e. Print the country that uses US dollars as currency.

          document.write("e. Country that uses US dollars as currency are as follows: <br>")
            responseData.forEach( data => {
                if (data.currencies !== null && data.currencies !== undefined){
            let value =(Object.keys(data.currencies))[0]
                  if (value == "USD"){
                    document.write("Country Name: ",data.name.common, "<br>")
           }}})
}}
xhr.send();   