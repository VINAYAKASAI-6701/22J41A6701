import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import API from '../api/axios';

const Shortener: React.FC = () => {
  const [originalURL, setOriginalURL] = useState('');
  const [shortURL, setShortURL] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await API.post('shorten/', { original_url: originalURL });
      setShortURL(response.data.short_url);
      setError('');
    } catch (err) {
      setError('Failed to shorten URL');
      setShortURL('');
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={4}>
      <Typography variant="h4" gutterBottom>
        URL Shortener
      </Typography>
      <TextField
        label="Enter URL"
        variant="outlined"
        fullWidth
        value={originalURL}
        onChange={(e) => setOriginalURL(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Shorten
      </Button>
      {shortURL && (
        <Typography variant="body1" color="success.main">
          Shortened URL: <a href={shortURL} target="_blank" rel="noopener noreferrer">{shortURL}</a>
        </Typography>
      )}
      {error && (
        <Typography variant="body2" color="error">
          {error}
        </Typography>
      )}
    </Box>
  );
};

export default Shortener;
