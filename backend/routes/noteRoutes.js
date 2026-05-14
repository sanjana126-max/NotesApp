const express = require('express')

const router = express.Router()

const upload = require('../middleware/multerConfig')

const Note = require('../models/Note')

router.post('/create', upload.single('document'), async (req, res) => {

  try {

    const note = new Note({

      title: req.body.title,

      description: req.body.description,

      fileUrl: req.file ? req.file.path : '',

      fileName: req.file ? req.file.originalname : ''

    })

    await note.save()

    res.status(201).json(note)

  } catch(error) {

    res.status(500).json({
      message: error.message
    })

  }

})

router.get('/all', async (req, res) => {

  try {

    const notes = await Note.find()

    res.json(notes)

  } catch(error) {

    res.status(500).json({
      message: error.message
    })

  }

})

module.exports = router