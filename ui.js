class Ui {


    constructor() {

        this.city = document.querySelector("#w-city");
        this.icon = document.querySelector("#w-icon");
        this.temperature = document.querySelector("#w-temp");
        this.Perature = document.querySelector("#w-prea");
        this.Humidity = document.querySelector("#w-humidity");
        this.feel = document.querySelector("#w-feel");



    }

    print({
        main_data: {
            temp,
            pressure,
            humidity
        },
        overall_data: {
            main,
            icon
        },
        cityName
    }) {


        const iconUrl = Ui.generateIcon(icon);

        this.city.textContent = cityName;



        this.icon.setAttribute('src', iconUrl)
        // this.icon.textContent = weather.getWeather().overall_data;

        this.temperature.innerHTML = `Temperature: ${temp} <sup>&#8451</sup>`;

        this.Perature.textContent = `Perature(hpa): ${pressure}`;

        this.Humidity.textContent = `Humidity : ${humidity}%`;

        this.feel.textContent = main;



    }

    static generateIcon(icon) {

        return "https://openweathermap.org/img/w/" + icon + ".png";

    }

    clearField() {
        document.querySelector("#country").value = "";
        document.querySelector("#city").value = "";
    }

    setMassege(mag) {

        const para = document.querySelector("#massegeWrapper")

       
        const div = document.createElement("div");
              div.id = "message"

  
              div.className = "alert alert-danger d-flex";
              div.textContent = mag;

        const icon = document.createElement("span");
        icon.id = "icon"
        icon.className = "ml-auto";
        icon.innerHTML = `<i class="far fa-times-circle" id="close"></i>`

        para.appendChild(div);

        div.appendChild(icon);

        icon.style.cursor = "pointer";


        //     <div class="alert alert-danger" role="alert">
        //     This is a danger alert—check it out!
        // </div>


    }

    static closeMassege() {

     document.querySelector("#massegeWrapper").addEventListener("click",function(e){

        if(e.target.id = "icon" ){
          
            e.target.parentElement.parentElement.remove();
          
        }

     })
       
    }

}