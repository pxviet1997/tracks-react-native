import createDataContext from './createDataContext';
import trackerApi from '../api/tracker';
import { AsyncStorage } from 'react-native';
import { navigate } from '../navigationRef';

const reducer = (state, action) => {
  switch (action.type) {
    case 'sign_up_in':
      return { errorMessage: '', token: action.payload };
    case 'add_error':
      return { ...state, errorMessage: action.payload };
    case 'clear_error_message':
      return { ...state, errorMessage: '' };
    case 'sign_out':
      return { token: null, errorMessage: '' };
    default:
      return state;
  }
};

const localSignIn = (dispatch) => async () => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    dispatch({ type: 'sign_up_in', payload: token })
    navigate('TrackList');
  }
  else {
    navigate('loginFlow');
  }
};

const clearErrorMessage = (dispatch) => () => {
  dispatch({ type: 'clear_error_message' })
};

const signUp = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signup', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'sign_up_in', payload: response.data.token })
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'add_error', payload: err.message });
  }
};

const signIn = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post('/signin', { email, password });
    await AsyncStorage.setItem('token', response.data.token);
    dispatch({ type: 'sign_up_in', payload: response.data.token })
    navigate('TrackList');
  } catch (err) {
    dispatch({ type: 'add_error', payload: err.message });
  }
};

const signOut = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'sign_out' });
    navigate('loginFlow');
  } catch (err) {

  }

};

export const { Context, Provider } = createDataContext(
  reducer,
  { signUp, signIn, signOut, clearErrorMessage, localSignIn },
  { token: null, errorMessage: '' }
);