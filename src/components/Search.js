import React from 'react';

const Search = props => {
  const [search, setSearch] = React.useState(props.searchTerm);
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input
        id="search"
        type="text"
        value={search}
        onChange={event => {
          setSearch(event.target.value);
        }}
      />
      <button
        onClick={() => {
          props.onSearch(search);
        }}
      >
        Search
      </button>
      <button
        onClick={() => {
          props.onSearch('');
          setSearch(() => '');
        }}
      >
        Clear
      </button>
      <div>Count: {props.count}</div>
    </div>
  );
};

export default Search;

// onChange={props.onSearch}
