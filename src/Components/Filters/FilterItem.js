import "./FilterItem.scss";

const FilterItem = props => {
  const removeFilter = () => {
    props.removeFilterHandler(props.filterDetails);
  };

  

  return (
    <div className="filter-item">
      <div className="filter-item__name">{props.filterDetails}</div>
      <img src="./images/icon-remove.svg" alt="Remove" className="filter-item__remove" onClick={removeFilter} />
    </div>
  );
};

export default FilterItem;
