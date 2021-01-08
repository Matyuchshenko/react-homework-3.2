import './SearchBar.css';
import PropTypes from 'prop-types';

export default function Searchbar({ onHandleSubmit, onSearchQueryChange, value }) {
  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={onHandleSubmit}>
        <button type="submit" className="SearchForm__button">
          <span className="SearchForm__button__label">Search</span>
        </button>

        <input
          className="SearchForm__input"
          type="text"
          value={value}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={onSearchQueryChange}
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onHandleSubmit: PropTypes.func.isRequired,
  onSearchQueryChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};