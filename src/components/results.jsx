import { endMessage } from "../utility/gameMessages";

function Results({ score, gameMode }) {
  return (
    <div className="results">
      <h3>You scored {score}!</h3>
      <p>{endMessage(score, gameMode)}</p>
    </div>
  );
}

export default Results;
