import "./Background.scss";

const Background = props => {
  return (
    <div>
      <header className="header">&nbsp;</header>
      <main className="background">{props.children}</main>
    </div>
  );
};

export default Background;
