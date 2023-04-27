const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 5050;

app.get('/api/countries/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const response = await axios.get(`https://restcountries.com/v2/name/${name}?fullText=true`);
        const countryInfo = response.data[0];
        res.json({
            name: countryInfo.name,
            population: countryInfo.population,
            capital: countryInfo.capital,
            flag: countryInfo.flag,
        });
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));