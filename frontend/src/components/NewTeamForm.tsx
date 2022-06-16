import React from 'react';

interface Props {
  submitTeam: any,
  baseurl: string,
}

const NewTeamForm: React.FC<Props> = ({submitTeam, baseurl}) => {
  const [name, setName] = React.useState("");
  const [captain, setCaptain] = React.useState("");

  return (
    <div className="card">
      <h4>New Team</h4>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Team Captain:
          <input type="text" value={captain} onChange={(e) => setCaptain(e.target.value)} />
        </label>
      </div>
      <div>
        <input type="submit" onClick={(e) => {
          e.preventDefault();
          submitTeam(baseurl + "/teams", {name: name, captain: captain});
        }} />
      </div>
    </div>
  );
}

export default NewTeamForm;
