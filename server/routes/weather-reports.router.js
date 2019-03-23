const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', (req, res) => {
    console.log('Hit Weather Report Server');
    let weatherReports = [];

    axios.get('https://wx.wearebraid.com/stations', {headers: {'Authorization': 'Bearer effc2cc6c5afc98c827361ea8fb65481'}})
        .then(response => {
            console.log(response.data);
            const cities = response.data;
            for (let x = 0; x <= cities.length; x++) {
                axios.get(`https://wx.wearebraid.com/stations/${cities[x].Station}`, {headers: {'Authorization': 'Bearer effc2cc6c5afc98c827361ea8fb65481'}})
                    .then(response => {
                        cities[x].Timestamp = response.data.Meta.Timestamp;
                        cities[x].weather = {
                          "Cloud-List": response.data["Cloud-List"],
                          "Wind-Direction": response.data["Wind-Direction"],
                          "Wind-Gust": response.data["Wind-Gust"],
                          "Wind-Speed": response.data["Wind-Speed"],
                          "Visibility": response.data["Visibility"],
                          "Temperature": response.data["Temperature"]
                        }
                        weatherReports.push(cities[x]);
                        if (weatherReports.length === cities.length) {
                            console.log('kjdkfjdkfjdkfjddkjfkdjfkdf', weatherReports);
                            res.send(weatherReports);
                        }
                    })
                    .catch((error) => {
                        weatherReports.push(cities[x]);
                        if (weatherReports.length === cities.length) {
                            res.send(weatherReports);
                        }
                    })
            }

        })
        .catch((error) => {
            console.log(error);
        })

});

module.exports = router;
