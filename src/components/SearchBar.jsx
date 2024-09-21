import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(query);
    };

    return (
        <form onSubmit={handleSubmit} className="flex justify-center mb-8">
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for movies..."
                className="p-2 rounded-l-lg border-none focus:outline-none focus:ring-2 focus:ring-purple-900 text-black"
            />
            <button type="submit" className="p-2 bg-purple-600 rounded-r-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500">
                Search
            </button>
        </form>
    );
};

export default SearchBar;