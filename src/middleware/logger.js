export const logger = store => next => action => {
    console.log('Logger: ', action);
    next(action);
};