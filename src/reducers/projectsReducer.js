const projectsReducer = (state = {
    allProjects: [],
    filteredProjects: [], 
    loading: false,
    }, action) => {
        let filteredProjects = []

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

        case 'ADD_FILTER':
            return {
                ...state,
                filteredProjects: filteredProjects,
            }
          
        case 'REMOVE_FILTER':
                return {
                  ...state,
                  filteredProjects: filteredProjects,
                }

        case 'ADD_COMMENT':
            let index = state.filteredProjects.findIndex(project => project.id === action.comment.project_id);
            let project = state.filteredProjects[index];

            return {
                ...state,
                filteredProjects: [
                ...state.filteredProjects.slice(0, index),
                { ...project, comments: project.comments.concat(action.comment) },
                ...state.filteredProjects.slice(index + 1)
                ]
            }
            
        default:
            return state;
    }
}

export default projectsReducer; 