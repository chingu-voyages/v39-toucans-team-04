export const difficultyReducer = (state = '', action) => {
    switch (action.type) {
        case 'DIFFICULTY_CATEGORY': 
            return action.difficulty
        default: 
            return state
    }
}