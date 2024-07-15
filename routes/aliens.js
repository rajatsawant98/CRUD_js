const express = require('express')
const router = express.Router()

const Alien = require('../models/alien')

router.get('/', async(req, res) => {
    try{
        const aliens = await Alien.find()
        res.json(aliens)
    }catch(err){
        res.status(500).json({ message: 'Error', error: err.message });
    }
})


router.get('/:id', async(req, res) => {
    try{
        const alien = await Alien.findById(req.params.id)
        res.json(alien)
    }catch(err){
        res.status(500).json({ message: 'Error', error: err.message });
    }
})

router.get('/name/:name', async (req, res) => {
    try {
        const alien = await Alien.findOne({ name: req.params.name });
        if (!alien) {
            return res.status(404).json({ message: 'Alien not found' });
        }
        res.json(alien);
    } catch (err) {
        res.status(500).json({ message: 'Error', error: err.message });
    }
});



router.post('/', async(req, res) => {
    const alien = new Alien({
        name : req.body.name,
        tech : req.body.tech,
        sub : req.body.sub,
        age : req.body.age,
        gender : req.body.gender
    })

    try{
        const a1 = await alien.save()
        res.json(a1)
    }catch(err){
        res.status(500).json({ message: 'Error', error: err.message });
    }
})


router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        if (!alien) {
            return res.status(404).json({ message: 'Alien not found' });
        }

        alien.name = req.body.name;
        alien.tech = req.body.tech;
        alien.sub = req.body.sub;
        alien.age = req.body.age;
        alien.gender = req.body.gender;

        const updatedAlien = await alien.save();
        res.json(updatedAlien);
    } catch (err) {
        res.status(500).json({ message: 'Error', error: err.message });
    }
});


router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        if (!alien) {
            return res.status(404).json({ message: 'Alien not found' });
        }

        Object.assign(alien, req.body);

        const updatedAlien = await alien.save();
        res.json(updatedAlien);
    } catch (err) {
        res.status(500).json({ message: 'Error', error: err.message });
    }
});




router.delete('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        if (!alien) {
            return res.status(404).json({ message: 'Alien not found' });
        }
        const result = await alien.deleteOne();
        res.json(result);
    } catch (err) {
        res.status(500).json({ message: 'Error', error: err.message });
    }
});



module.exports = router