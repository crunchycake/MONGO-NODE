const express = require('express')
const app = express()
const mongoose = require('mongoose')
const port = process.env.PORT || 3400

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

const connectionString = "mongodb+srv://cake:cake123@cluster0.v52c7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


app.listen(port, err => {
	if (err) {
		return console.log(`błąd ${err}`)
	}
	console.log(`Apka działa na porcie ${port}`)
})
