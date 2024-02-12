const btnSearch = document.getElementById('btnBuscar');
const inputCity = document.getElementById('searchCity');

btnSearch.addEventListener('click', () => {
    if(inputCity.value.trim().length > 0)
    {
        console.log('Input value =', inputCity.value);
        buscarCiudad(inputCity.value);
    }
});

const buscarCiudad = async (ciudad) => {
    const url = `https://ai-weather-by-meteosource.p.rapidapi.com/find_places?text=${ciudad}&language=es`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c2f9f5af26msh43be0656b61daecp1f9284jsn69e955c96f9a',
            'X-RapidAPI-Host': 'ai-weather-by-meteosource.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}