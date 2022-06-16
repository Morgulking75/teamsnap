import API from "../../api";
import { update } from "./update"

export const getTeams = (params) => (dispatch) => {
    if(params) {
        API.getData(params.url).then((data) =>
            dispatch(update({key: "teams", value: data.content})));
    }
}
