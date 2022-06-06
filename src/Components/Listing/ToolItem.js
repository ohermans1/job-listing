import "./ToolItem.scss";

const ToolItem = props => {
  let selected = false;

  const clickHandler = e => {
    props.selectedOptions(e);
    selected = true;
  };

  return (
    <div className="tool-item">
      {props.tools.map(tool => {
        return (
          <span onClick={clickHandler} className={props.selectedFilters.includes(tool) ? "tool-item__lang tool-item__selected" : "tool-item__lang"} key={tool}>
            {tool}
          </span>
        );
      })}
    </div>
  );
};

export default ToolItem;
