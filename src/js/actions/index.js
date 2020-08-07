import { ADD_ARTICLE } from "../constants/action-types";

export function addArticle(payload) {
    return { type: ADD_ARTICLE, payload };
}
export function getData() {
    return {
        type: "DATA_REQUESTED", payload: {https://api.valentinog.com/api/link/} }; //ici on dspatch a simple action qui s'appelle Data requested
}