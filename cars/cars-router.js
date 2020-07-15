const express = require("express");

const router = express.Router();

const Cars = require('./cars-model')

router.get('/', (req, res) => {
    Cars.get()
        .then(cars => {
            res.status(200).json({ data: cars })
        })
        .catch(handleError)
})

router.get('/:id', (req, res) => {
    const { id } = req.params

    Cars.getById(id)
        .then(car => {
            res.status(200).json({ data: car })
        })
        .catch(handleError)
})

router.post('/', (req, res) => {
    Cars.insert(req.body)
        .then(car => {
            res.status(201).json({ data: car })
        })
        .catch(handleError)
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body

    Cars.update(id, changes)
        .then(car => {
            res.status(200).json({ data: car })
        })
        .catch(handleError)
})

router.delete('/:id', (req, res) => {
    const { id } = req.params

    Cars.remove(id)
        .then(count => {
            res.status(200).json({ data: count })
        })
        .catch(handleError)
})

function handleError(error) {
    console.log(error)
    res.status(400).json({ error: error.message })

}

module.exports = router;