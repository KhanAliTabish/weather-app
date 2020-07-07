const request = require('request')


const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1Ijoia2hhbmFsaXRhYmlzaCIsImEiOiJja2M3aHNveGcwbGFsMndueGE3cHNheWpqIn0.81eTn75j5SQYVuYHpdMXEQ&limit=1"
    request({url, json: true},(err,{body}) =>{
        if(err){
            callback("Something went wrong",undefined)
        }else if(body.features.length === 0){
            callback("unable to find  location",undefined)
        }else{
            const data = body.features[0]
            callback(undefined,{"location":data.place_name,"latitude":data.center[1],"longitute":data.center[0]})
        }  
    })
}

module.exports = geocode
