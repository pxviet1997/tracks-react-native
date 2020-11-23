import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const reducer = (state, action) => {
  switch (action.type) {
    case 'sign_up':
      return { errorMessage: '', token: action.payload };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const signUp = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    console.log(response.data);
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'sign_up', payload: response.data.token })
    navigate('TrackList');
  } catch (err) {
    // console.log(err.meaasage);
    dispatch({ type: 'add_error', payload: err.message })
  }
};

const signIn = (dispatch) => ({ email, password }) => {

};

const signOut = (dispatch) => () => {

};

export const { Context, Provider } = createDataContext(
  reducer,
  { signUp, signIn, signOut },
  { token: null, errorMessage: '' }
);