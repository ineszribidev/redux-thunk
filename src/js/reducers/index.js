import { ADD_ARTICLE } from "../constants/action-types";

const initialState = {
    articles: [],
    remoteArticles: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_ARTICLE) {
        return Object.assign({}, state, {
            articles: state.articles.concat(action.payload)//ajoute un ou plusieurs éléments à la fin d'un tableau et retourne la nouvelle taille du tableau alors que concat concat() est utilisée afin de fusionner un ou plusieurs tableaux en les concaténant. Cette méthode ne modifie pas les tableaux existants, elle renvoie un nouveau tableau qui est le résultat de l'opération.
        });
    }
    if (action.type === "DATA_LOADED") {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }
    if (action.type === "API_ERRORED") {
        return Object.assign({}, state, {
            remoteArticles: state.remoteArticles.concat(action.payload)
        });
    }
    return state;
}

export default rootReducer;

