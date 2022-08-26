function mouse()
    {
        document.getElementsByClassName("abcd")[0].addEventListener("click",function(){   
                                 
     var x=  document.getElementsByClassName("search-bar")[0].value;                                      



 getweather(x);
})


  
}
                                                            
    function keybrd()
    {
        document.addEventListener("keyup",function(obj){   
                                 
    var x=  document.getElementsByClassName("search-bar")[0].value;                                      

 if(obj.key=="Enter" )
 getweather(x);


 });

                                                            
    }

function getweather(x)
{

  document.getElementsByClassName("city")[0].classList.add("hider");
  document.getElementsByClassName("temp")[0].innerHTML="";
  document.getElementsByClassName("temp")[0].classList.add("loader");

  document.getElementsByClassName("feels")[0].classList.add("hider");
    document.querySelector(".Description").classList.add("hider");
    document.getElementsByClassName("Humidity")[0].classList.add("hider");
    document.getElementsByClassName("Wind Speed")[0].classList.add("hider");

  fetch("https://api.openweathermap.org/geo/1.0/direct?q="+x+"&appid=107cfcf846deba28cc98d7e46451ca3e")
  .then((response) => {
    if (!response.ok) {
      alert("No weather found.");
      throw new Error("No weather found.");
    }
    return response.json();
  })
  .then((data) => {
 
    const { name } = data[0];
    const { lat } = data[0];
    const { lon } = data[0];


fetch("https://api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&units=metric&appid=8ed62e377f6afb72caec72d4664d3cc1")
  .then((response) => response.json())
  .then((data) => {
 
    const { name } = data;
    const { icon, description } = data.weather[0];
    const {feels_like,temp, humidity } = data.main;
    const { speed } = data.wind;
    
   
    document.getElementsByClassName("city")[0].classList.remove("hider");
  document.getElementsByClassName("city")[0].innerHTML ="Weather in "+x;

  document.getElementsByClassName("temp")[0].classList.remove("loader");

  document.getElementsByClassName("feels")[0].classList.remove("hider");
  document.querySelector(".Description").classList.remove("hider");
  document.getElementsByClassName("Humidity")[0].classList.remove("hider");
  document.getElementsByClassName("Wind Speed")[0].classList.remove("hider");


    document.getElementsByClassName("temp")[0].innerHTML=temp+" °C";
    document.getElementsByClassName("feels")[0].innerHTML="Feels like "+feels_like+" °C";
    document.querySelector(".Description").innerText = "Description: "+description;
    document.getElementsByClassName("Humidity")[0].innerHTML="Humidity: "+humidity+"%";
    document.getElementsByClassName("Wind Speed")[0].innerHTML="Wind Speed: "+speed+"km/hr";
    
  })
}
)


  
}
  







keybrd();
mouse();
