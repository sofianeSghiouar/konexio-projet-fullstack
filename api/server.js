const dataCountries = require("./countriesData");
const express = require("express");
const app = express();
const port = 8000;
let cors = require('cors')
app.use(cors())
let countriesArray = [];


app.get("/all", (req, res) => {

    for (let i = 0; i < dataCountries.length; i++) {
        countriesArray.push(dataCountries[i].name);
    }
    res.send(countriesArray);
});

app.get("/:country", (req, res) => {

    for (let i = 0; i < dataCountries.length; i++) {
        if (req.params.country === dataCountries[i].name) {
            res.send(`pays: ${dataCountries[i].name}, capital: ${dataCountries[i].capital}`);
        }
    }
    // res.send(countriesArray);
});


app.listen(port, () => {
    console.log("server is ready");
})