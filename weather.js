class Weather {

    constructor(city, country) {
        this.city = city;
        this.country = country;
        this.APPId = '00687502f6fed1a6cce0582a4a77c1ce';
    }

    async getWeather() {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${
          this.country
        }&appid=${this.APPId}&units=metric`
        );
        const responseData = await response.json();



        return {
            main_data: responseData.main,
            cityName: responseData.name,

            overall_data: responseData.weather[0]

        };
    }

    setLocation(city, country) {


        this.city = city;
        this.country = country;

    }


}


//instenset the new class 
function weatherData() {

    weather.getWeather().then(data => {

        ui.print(data)

    }).catch(err => {

        const ui = new Ui();

        ui.setMassege("your city is not found")


    })

}