import { Bookmark } from "lucide-react";
function Card(props) {
  return (
    <div className="parent">
      <div className="card">
        <div>
          <div className="top">
            <img src={props.logo} alt="" />
            <button>
              save
              <Bookmark size={14} />
            </button>
          </div>
          <div className="centre">
            <h3>
              {props.company} <span>{props.post}</span>
            </h3>
            <h2>{props.Role}</h2>
            <div className="tag">
              <h4>{props.type}</h4>
              <h4>Senior Level</h4>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div>
            <h3>{props.sal}</h3>
            <p>{props.loc}</p>
          </div>
          <button>Apply Now </button>
        </div>
      </div>
    </div>
  );
}
export default Card;
