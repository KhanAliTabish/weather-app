console.log('Client side javascript file is loaded!')

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                console.log('HERE')
                messageOne.textContent = data.error
            } else {
                const {weather_desc,temperature,feelslike} = data.forecast
                const forecast = `It is ${weather_desc} here.The temperature is ${temperature} degrees. It feels ${feelslike} degrees outside`
                console.log(forecast)
                messageOne.textContent = data.location
                messageTwo.textContent = forecast
            }
        })
    })
})