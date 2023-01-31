const fetchApiweather = async (req, res) => {

    API_KEY = process.env.API_KEY
    // const city = 'Safi,MA';
    // const API_URL = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`;
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const date = new Date();
    const dayName = days[date.getDay()];
    const lat = '34.928200';
    const long = '-2.329500';
    const API_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${API_KEY}`;

    let dataweather = await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
            let arr = []
            data.list.forEach((element, i) => {
                let el = element.dt_txt.split(' ')
                let desc = element.weather[0].main;
                arr.push({
                    id: i,
                    data: {
                        desc: desc,
                        icon: element.weather[0].icon,
                        wind: element.wind,
                        date: el[0],
                        day: dayName,
                        img: `require('../../assets/${desc}.png')`,
                        time: el[1].split(':')[0],
                        temp: Math.round(element.main.temp - 273.15) + '°C',
                        temp_min: Math.round(element.main.temp_min - 273.15) + '°C',
                        temp_max: Math.round(element.main.temp_max - 273.15) + '°C'
                    }
                })
            })
            return arr
        })
    return dataweather
    // res.json(dataweather)
}
// fetch by Days
const fetchDays = async (req, res) => {
    const now = new Date();
    const month = now.getMonth();
    const alldata = await fetchApiweather()
    let today = alldata.filter(item => item.data.date.includes(`2023-${month}`))
    today = today.filter(item => item.data.time === "15")
    return today

}
// fetch all Hours 
const fetchHour = async (req, res) => {
    const date = new Date();
    const day = date.getDate();
    const alldata = await fetchDays();
    const today = alldata.filter(item => item.data.date.includes(`2023-01-${day}`))
    return today

}
// fetch actual
const weatherNow = async () => {
    const date = new Date();
    const Hour = date.getHours();
    const alldata = await fetchHour()
    let arrayH = [00, 03, 09, 12, 15, 18, 21]
    arrayH = arrayH.filter(item => Hour < item)
    arrayH = arrayH.map(function (num) {
        return num.toString();
    });
    let today = []
    for (let i = 0; i < arrayH.length; i++) {
        today.push(alldata.filter(item => item.data.time.includes(arrayH[i])))
    }
    return today
}

const fetchAllweather = async (req, res) => {
    const data = await fetchApiweather()
    res.json(data)
}
const fetchNow = async (req, res) => {
    const data = await fetchHour()
    res.json(data)
}
const fetchByDays = async (req, res) => {
    const data = await fetchDays()
    res.json(data)
}
const fetchByHour = async (req, res) => {
    const data = await weatherNow()
    res.json(data)
}

module.exports = {
    fetchAllweather,
    fetchByHour,
    fetchByDays,
    fetchNow,
}