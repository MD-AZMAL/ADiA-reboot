import gcsSidebarActionTypes from "./gcs-sidebar.types";

const INITIAL_STATE = {
    expanded: true
}
const gcsSidebarReducer = (state=INITIAL_STATE, action: any) => {
    switch(action.type) {
        case gcsSidebarActionTypes.GCS_SIDEBAR_TOGGLE: 
            return {
                ...state,
                expanded: !state.expanded
            };
        default:
            return state;
    }
};

export default gcsSidebarReducer;
