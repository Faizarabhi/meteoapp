const fetchApiweather = async (req, res) => {

    API_KEY = process.env.API_KEY
    const city = 'Safi,MA';
    const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;

    let dataweather = await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            let arr = []
            data.list.forEach((element, i) => {
                arr.push({data:{desc:element.weather[0].main,icon:element.weather[0].icon}, wind:element.wind,date: element.dt_txt,temp:element.main.temp,temp_min:element.main.temp_min,temp_max:element.main.temp_max})
                // arr.push({date: element.dt_txt})
            })
            return arr
        })

    res.json(dataweather)
}

module.exports = {
    fetchApiweather
}