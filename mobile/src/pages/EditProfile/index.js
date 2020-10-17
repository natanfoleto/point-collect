import React ,{ useState, useEffect, useRef} from 'react';
import { Alert } from 'react-native';

import SyncStorage from 'sync-storage';

import api from '../../services/api';

import { 
  Container, HeaderEditProfile, Form, Title,
  FormInput, SubmitButton, ButtonText 
} from './styles';

export default function EditProfile({ navigation }) {
  const [token, setToken] = useState('');
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [oldPassword, setOldPassword] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const emailRef = useRef();
  const oldPasswordRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  useEffect(() => {
    const profile = SyncStorage.get('auth_user');
    const token = SyncStorage.get('auth_token');

    setToken(token);

    setId(profile.id);
    setName(profile.name);
    setEmail(profile.email);
  }, []);

  async function handleUpdate() {
    let response = null;

    if (oldPassword !== '') {
      if (password === '' || confirmPassword === '') {
        Alert.alert('Falha na validação dos campos', 'Digite a nova senha e a confirmação da senha');
      } else {
        if (password !== confirmPassword) {
          Alert.alert('Falha na validação dos campos', 'As senhas não conferem');
        } else {
          response = await api.put('/users', { 
            id, 
            name, 
            email, 
            oldPassword,
            password,
            confirmPassword  
          }, { 
            headers: {
              authorization: 'Bearer ' + token
            }
          });
        }
      }
    } else {
      if (password !== '' && oldPassword === '') {
        Alert.alert('Falha na validação dos campos', 'Digite sua senha atual');
      } else {
        response = await api.put('/users', {
          id, 
          name, 
          email
        }, { 
          headers: {
            authorization: 'Bearer ' + token
          }
        });
      }
    }

    if (response !== null) {
      if (response.data.error === 0) {
        if (response.data.user) {
          Alert.alert('Sucesso', 'Dados alterados com sucesso');

          SyncStorage.remove('auth_user');
          SyncStorage.set('auth_user', response.data.user);
  
          navigation.reset({
            routes: [{ name: 'Profile' }],
          });
        }
      }
  
      if (response.data.error === 1) {
        const msg = response.data.msg;
  
        Alert.alert('Falha na alteração do perfil', msg);
      }
    }
  }

  return (
    <>
      <HeaderEditProfile 
        handleNavigation={navigation.goBack} 
      />
      
      <Container>
        <Form>
          <Title>Meu perfil</Title>

          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu nome completo"
            value={name}
            onChangeText={setName}
          />

          <FormInput
            icon="mail-outline"
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Digite seu e-mail"
            ref={emailRef}
            value={email}
            onChangeText={setEmail}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Senha atual"
            ref={oldPasswordRef}
            value={oldPassword}
            onChangeText={setOldPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Nova senha"
            ref={passwordRef}
            value={password}
            onChangeText={setPassword}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            placeholder="Confirme a senha"
            ref={confirmPasswordRef}
            return="handleRegister"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          <SubmitButton onPress={handleUpdate}> 
            <ButtonText>SALVAR</ButtonText> 
          </SubmitButton>

        </Form>
      </Container>
    </>
  );
}
