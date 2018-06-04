import axios from 'axios';

export const COURSES_HAVE_ERROR ='COURSES_HAVE_ERROR';
export const COURSES_ARE_LOADING ='COURSES_ARE_LOADING';
export const COURSES_FETCH_DATA_SUCCESS = 'COURSES_FETCH_DATA_SUCCESS';

export function coursesHaveError(bool) {
    return {
        type: COURSES_HAVE_ERROR,
        hasError: bool
    };
}

export function coursesAreLoading(bool) {
    return {
        type: COURSES_ARE_LOADING,
        isLoading: bool
    };
}

export function coursesFetchDataSuccess(courses) {
    return {
        type: COURSES_FETCH_DATA_SUCCESS,
        courses
    };
}

export function coursesFetchData(url) {
    return (dispatch) => {
        dispatch(coursesAreLoading(true));

        axios.get(url)
            .then((response) => {
                if (response.status !== 200) {
                    throw Error(response.statusText);
                }

                dispatch(coursesAreLoading(false));

                return response;
            })
            .then((response) => dispatch(coursesFetchDataSuccess(response.data)))
            .catch(() => dispatch(coursesHaveError(true)));
    };
}
