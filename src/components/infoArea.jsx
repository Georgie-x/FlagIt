import { gameStageInfo } from "../utilities";

function InfoArea({ gameStage, Score }) {
  const infoText = gameStageInfo[gameStage];

  return (
    <>
      <p>{infoText}</p>
    </>
  );
}

export default InfoArea;
