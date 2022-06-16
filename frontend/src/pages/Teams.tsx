import React from 'react';
import TeamCard from '../components/TeamCard';

const Teams: React.FC<{teams: any[]} & {getTeams: any} & {baseurl: any}> = ({teams, getTeams, baseurl}) => {
  React.useEffect(() => {
    getTeams({url: baseurl + "/teams"});
  }, []);

  function renderTeams() {
    return (teams || []).map((team, index) => <TeamCard teamName={team.name} captain={team.captain} key={index} url={baseurl} />);
  }

  return (
    <>
      {renderTeams()}
    </>
  );
}

export default Teams;
