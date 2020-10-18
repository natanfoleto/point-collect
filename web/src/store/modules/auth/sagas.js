import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import { signInSuccess, signUpSuccess, signFailure } from './actions';

function displayToast(msg) {
  toast.error(msg, {
    position: toast.POSITION.TOP_CENTER,
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    progress: undefined,
  });
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;

    const response = yield call(api.post, 'sessions', {
      email, 
      password
    });

    const { token, collector } = response.data;

    console.log(collector);

    if (!collector) {
      displayToast('Usuário não é um ponto de coleta!'); 
      yield put(signFailure());
      return;
    }

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, collector));

    history.push('/dashboard');
  } catch (err) {
    displayToast('Falha na autenticação, verifique seus dados'); 
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { 
      name, 
      email, 
      password, 
      latitude, 
      longitude, 
      logradouro,
      numero,
      bairro,
      localidade,
      uf,
      entity, 
      telephone, 
      whatsapp,
      site,
      materials,
    } = payload.data;

    yield call(api.post, 'collectors', {
      name, 
      email, 
      password, 
      latitude, 
      longitude, 
      logradouro,
      numero,
      bairro,
      localidade,
      uf,
      entity, 
      telephone, 
      whatsapp,
      site,
      materials,
    });

    yield put(signUpSuccess());

    history.push('/');
  } catch (err) {
    console.log(err);
    displayToast('Falha no cadastro, verifique seus dados'); 
    yield put(signFailure());
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);