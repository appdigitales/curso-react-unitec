import React from 'react';
import Header from './Header.js';

const Search = () => {
  const handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line
    console.log(e.target.username.value);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <section className="search six offset-by-three columns">
          <form onSubmit={handleSubmit}>
            <button type="submit">
              <span className="fa fa-check-circle fa-3x" />
            </button>
            <input
              className="u-full-width"
              type="text"
              name="username"
              placeholder="Enter Github Username"
            />
          </form>
        </section>
      </div>
    </div>
  );
};

export default Search;
