import React, { useState } from 'react';
import axios from 'axios';

import './contact.css';

const Contact = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `https://api.example.com/search?q=${searchQuery}`
      );
      setResults(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='searchBar'>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleInputChange}
      />
      <button onClick={handleSearch}>Search</button>

      {/* Render search results */}
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;
