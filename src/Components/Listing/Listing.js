import "./Listing.scss";
import ToolItem from "./ToolItem";

const Listing = props => {
  const details = props.listingDetails;
  const tools = [props.listingDetails.role, props.listingDetails.level, ...props.listingDetails.tools, ...props.listingDetails.languages];
  let display = true;

  if (props.selectedFilters < 1) {
    display = true;
  } else {
    display = props.selectedFilters.every(element => {
      return tools.includes(element);
    });
  }

  if (display) {
    return (
      <div className="listing">
        {details.featured && <div className="listing__featured"></div>}
        <img src={details.logo} alt={`${details.company} logo`} className="listing__image" />
        <div className="listing__info-group">
          <div className="listing__info-top">
            <span className="listing__company-name">{details.company}</span>
            {details.new && <span className="listing__new">New</span>}
            {details.featured && <span className="listing__featured-text">Featured</span>}
          </div>
          <h1 className="listing__header">{details.position}</h1>
          <div className="listing__info-bottom">
            <span className="listing__text">{details.postedAt}</span>
            <div className="listing__dot">&nbsp;</div>
            <span className="listing__text">{details.contract}</span>
            <div className="listing__dot">&nbsp;</div>
            <span className="listing__text">{details.location}</span>
          </div>
        </div>
        <hr className="listing__line" />
        <ToolItem tools={tools} selectedOptions={props.selectOptions} selectedFilters={props.selectedFilters}></ToolItem>
      </div>
    );
  }
  return;
};

export default Listing;
