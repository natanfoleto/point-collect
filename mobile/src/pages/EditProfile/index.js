import React ,{useRef} from 'react';

import { Container, HeaderEditProfile, Form, FormInput, SubmitButton } from './styles';

export default function EditProfile({ navigation }) {

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  return (
    <>
      <HeaderEditProfile handleNavigation={navigation.goBack} />
      <Container>

        <Form>
          <FormInput
            icon="person-outline"
            autoCorrect={false}
            autoCapitalize="none"
            returnKeyType="next"
            onSubmitEditing={() => emailRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            ref={passwordRef}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
          />

          <FormInput
            icon="lock-outline"
            secureTextEntry
            ref={confirmPasswordRef}
            return="handleRegister"
          />

          <SubmitButton > ATUALIZAR </SubmitButton>
        </Form>

      </Container>
    </>
  );
}
