import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Box } from '@mui/material';

function App() {
  const [originalURL, setOriginalURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [error, setError] = useState('');

  const handleShorten = async () => {
    setError('');
    setShortURL('');

    if (!originalURL.trim()) {
      setError('Please enter a valid URL.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/create/', {
        original_url: originalURL,
      });

      if (response.data && response.data.short_code) {
  setShortURL(`http://localhost:8000/api/${response.data.short_code}/`);
} else {
  setError('Unexpected response from server.');
}

    } catch (err: any) {
      setError('Failed to shorten URL. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={10} textAlign="center">
        <Typography variant="h4" gutterBottom>
          URL Shortener
        </Typography>
        <TextField
          fullWidth
          label="Enter URL"
          variant="outlined"
          value={originalURL}
          onChange={(e) => setOriginalURL(e.target.value)}
        />
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={handleShorten}>
            Shorten
          </Button>
        </Box>
        {shortURL && (
          <Box mt={3}>
            <Typography variant="subtitle1">Shortened URL:</Typography>
            <a href={shortURL} target="_blank" rel="noopener noreferrer">
              {shortURL}
            </a>
          </Box>
        )}
        {error && (
          <Box mt={3}>
            <Typography color="error">{error}</Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
}

export default App;
