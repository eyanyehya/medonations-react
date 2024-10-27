// src/AddPressRelease.js

import React, { useState } from 'react';

const AddPressRelease = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [date, setDate] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const pressReleaseData = { title, content, date, url };

    fetch('http://localhost:8000/api/pressreleases/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        // Include any other headers like Authorization if needed
      },
      body: JSON.stringify(pressReleaseData),
    })
    .then(response => response.json())
    .then(data => {
      // Handle the response data
      console.log(data);
    })
    .catch(error => {
      // Handle any errors here
      console.error('Error adding press release:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add Press Release</h1>
      <label>
        Title:
        <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
      </label>
      <label>
        Content:
        <textarea value={content} onChange={e => setContent(e.target.value)} />
      </label>
      <label>
        Date:
        <input type="date" value={date} onChange={e => setDate(e.target.value)} />
      </label>
      <label>
        URL:
        <input type="url" value={url} onChange={e => setUrl(e.target.value)} />
      </label>
      <button type="submit">Add Press Release</button>
    </form>
  );
};

export default AddPressRelease;
