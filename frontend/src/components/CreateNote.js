import React, { useState } from 'react'
import axios from 'axios'

function CreateNote() {

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [document, setDocument] = useState(null)

  const handleSubmit = async (e) => {

    e.preventDefault()

    const formData = new FormData()

    formData.append('title', title)
    formData.append('description', description)
    formData.append('document', document)

    try {

      await axios.post(
        'https://notes-backend-wld3.onrender.com',
        formData
      )

      alert('Note Created')

    } catch(error) {

      console.log(error)

    }

  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        type='text'
        placeholder='Title'
        onChange={(e) => setTitle(e.target.value)}
      />

      <br /><br />

      <textarea
        placeholder='Description'
        onChange={(e) => setDescription(e.target.value)}
      />

      <br /><br />

      <input
        type='file'
        onChange={(e) => setDocument(e.target.files[0])}
      />

      <br /><br />

      <button type='submit'>
        Save Note
      </button>

    </form>

  )

}

export default CreateNote