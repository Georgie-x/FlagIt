import { endMessage } from "../utilities";

function Results({ score }) {
  return (
    <div className="results">
      <h3>You scored {score}!</h3>
      <p>{messageEnd(score)}</p>
    </div>
  );
}

export default Results;
