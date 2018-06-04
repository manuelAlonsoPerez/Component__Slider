import { combineReducers } from 'redux';
import { courses, coursesHaveError, coursesAreLoading } from './courses';

export default combineReducers({
    courses,
    coursesHaveError,
    coursesAreLoading
});
