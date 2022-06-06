import "./Filters.scss";
import FilterItem from "./FilterItem";

const filters = props => {
  const onClearClicked = () => {
    props.clearFilterHandler();
  };

  const removeFilter = item => {
    props.removeFilterHandler(item);
  };

  return (
    <div className="filter">
      <div className="filter__group">
        {props.selectedFilters.map(filter => {
          return <FilterItem filterDetails={filter} key={filter} removeFilterHandler={removeFilter}></FilterItem>;
        })}
      </div>
      <div className="filter__clear" onClick={onClearClicked}>
        Clear
      </div>
    </div>
  );
};

export default filters;
