import React from 'react';
import API from '../api';
import './TeamCard.css';

interface Props {
  teamName: String,
  captain: String,
  url: String
}

const TeamCard: React.FC<Props> = ({ teamName, captain, url }) => {
  const [gif, setGif] = React.useState<any>([]);

  React.useEffect(() => {
    API.getData(url + "/teams/gif?team=" + teamName)
      .then((data) => {
        console.log(data);
        setGif(data.content.data[0].embed_url);
      });
  }, []);

  return (
    <div className="card">
      <h4 className="teamicon">
        <div className="giphy-embed">
          <iframe src={gif} width="100" height="100" frameBorder="0"></iframe>
        </div>
        <div>
        <div className="teamname">Team: {teamName}</div>
        <div className="captain">Captain: {captain}</div>
        </div>
      </h4>
    </div>
  );
}

export default TeamCard;
