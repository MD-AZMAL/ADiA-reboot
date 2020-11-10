import { createSelector } from "reselect";


const selectGcsSidebar = (state: any) => state.gcsSidebar;

export const selectGcsExpanded = createSelector(
    [selectGcsSidebar],
    sidebar => sidebar.expanded
);
