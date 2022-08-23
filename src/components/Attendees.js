import React from 'react';
import List from './List';
import Search from './Search';
import data from '../utils/data';

const Attendees = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [count, setCount] = React.useState(data.count);

  const handleSearch = data => {
    setSearchTerm(data);
  };

  React.useEffect(() => {
    setCount(searchedEmployees.length);
  }, [searchTerm]);

  const searchedEmployees = data.items.filter(function (story) {
    return story.firstName.toLowerCase().includes(searchTerm.toLowerCase());
  });
  console.log(searchedEmployees);

  return (
    <div className="App">
      <Search onSearch={handleSearch} count={count} searchTerm={searchTerm} />

      <List data={searchedEmployees} />
    </div>
  );
};

export default Attendees;
