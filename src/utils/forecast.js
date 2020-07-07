const request = require('request')

//for getting data in farenhiet use units=f
//const url = "http://api.weatherstack.com/current?access_key=0221c363437b698afe3618e3bcf6727d&query=27.2038%C2%B0%20N,%2077.5011%C2%B0%20E&units=f"

//for data in celcius(default) or use unit=m
const forecast = (lat, lng, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=0221c363437b698afe3618e3bcf6727d&query=${encodeURIComponent(lat)},${encodeURIComponent(lng)}}`
    request({url, json: true},(err,{body}) =>{
        if(err){
            callback('Something went wrong',undefined)
        }else if(body.error){
            callback("unable to find location",undefined)
        }else{
            const data = body.current
            callback(undefined,{
                "weather_desc": data.weather_descriptions[0],
                "temperature": data.temperature,
                "feelslike": data.feelslike
            })

        }
    })
}

module.exports = forecast