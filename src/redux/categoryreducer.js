export const categoryReducer = (state = '', action) => {
    switch (action.type) {
        case 'UPDATE_CATEGORY': 
            return action.category
        default: 
            return state
    }
}