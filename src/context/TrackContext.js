import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';

const reducer = (state, action) => {
  switch (action.type) {

    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => { };

const createtrack = (dispatch) => (name, locations) => {
  dispatch({ type: 'create_track' })
};


export const { Context, Provider } = createDataContext(
  reducer,
  { fetchTracks, createtrack },
  []
);