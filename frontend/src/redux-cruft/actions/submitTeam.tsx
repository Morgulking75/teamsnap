import { update } from "./update";
import API from "../../api";

export const submitTeam = (url :string, team: {}) => (dispatch) => {
  if(url && team) {
      API.postData(url, team).then((data) =>
          dispatch(update({key: "teams", value: data.content})));
  }
}
