const projectsReducer = (state = {
    allProjects: [], 
    loading: false,
    }, action) => {
    switch (action.type) {
        case "LOADING_PROJECTS":
            return {
                ...state,
                allProjects: [...state.allProjects],
                loading: true
            }
        case "ADD_PROJECTS":
            return {
                ...state,
                allProjects: action.projects,
                loading: false
            }
            
        default:
            return state;
    }
}

export default projectsReducer; 