import { COURSES_HAVE_ERROR, COURSES_ARE_LOADING, COURSES_FETCH_DATA_SUCCESS } from '../actions/courses';

export function coursesHaveError(state = false, action) {
    switch (action.type) {
        case COURSES_HAVE_ERROR:
            return action.hasError;

        default:
            return state;
    }
}

export function coursesAreLoading(state = false, action) {
    switch (action.type) {
        case COURSES_ARE_LOADING:
            return action.isLoading;

        default:
            return state;
    }
}

export function courses(state = [], action) {
    switch (action.type) {
        case COURSES_FETCH_DATA_SUCCESS:
            return action.courses;

        default:
            return state;
    }
}
