import './Search.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilters } from 'redux/contacts/selector';
import { changeTextFilter } from 'redux/contacts/filterSlice';
import PropTypes from 'prop-types';

export const Search = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);

  const handleFilterChange = evt => {
    const name = evt.target.value;
    dispatch(changeTextFilter(name));
  };
  return (
    <>
      <h3 className="info">Find contacts by name</h3>
      <label className="label">
        <input
          autoComplete="off"
          type="text"
          className="input"
          value={filters.textFilter}
          onChange={handleFilterChange}
        />
      </label>
    </>
  );
};
Search.propTypes = {
  onChange: PropTypes.func,
  filters: PropTypes.string,
};
