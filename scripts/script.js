const form = document.querySelector('form');
const input = document.querySelector('#city');
const result = document.querySelector('#result');

const apiKey = '73597acbb7a08c93085daa789bc8c01a';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const city = input.value;
  
  fetch(apiUrl + city)
    .then(response => response.json())
    .then(data => {
      const { name, main, weather } = data;
      const { temp, humidity } = main;
      const { description } = weather[0];
      
      result.innerHTML = `
        <p>City: ${name}</p>
        <p>Temperature: ${temp}°C</p>
        <p>Humidity: ${humidity}%</p>
        <p>Weather: ${description}</p>
      `;
    })
    .catch(error => {
      result.innerHTML = `<p>City not found!</p>`;
    });
});
