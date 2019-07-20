// instantiate store

const store = new Store();
const ui = new Ui();

const {
    city,
    country
} = store.getLocation();


const weather = new Weather(city, country);


document.addEventListener("DOMContentLoaded", weatherData)

document.querySelector("#form").addEventListener('submit', function (e) {

    e.preventDefault();

    let country = document.querySelector("#country").value


    let city = document.querySelector("#city").value;

    if (city === "" || country === "") {

        ui.setMassege("plz input nessary information");



        document.querySelector("#close").addEventListener("click", function (e) {



            Ui.closeMassege();


        })

    } else {

        store.setLocation(city, country);
        weather.setLocation(city, country)
        ui.clearField();
        weatherData();
        Ui.closeMassege();

    }

})