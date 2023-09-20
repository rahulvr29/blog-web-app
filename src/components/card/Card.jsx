import { Link } from "react-router-dom";

import "./card.styles.css";

const Card = ({ title, body, id }) => {
  return (
    <div className="cardwrapper">
      <Link to={`posts/${id}`} className="cardlink">
        <div className="cardDetails">
          <h3 className="cardtitle">{title}</h3>

          <p className="cardtext">{body}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;
