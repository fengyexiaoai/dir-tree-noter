import optionPresets from "../presets/option";

const initialState = optionPresets;

export default function(state = initialState, action) {
    switch (action.type) {
        case "SET_DEPTH":
            return Object.assign({}, state, {
                depth: action.value
            });
        case "SET_INDENT":
            return Object.assign({}, state, {
                indent: action.value
            });
        default:
            return state;
    }
}