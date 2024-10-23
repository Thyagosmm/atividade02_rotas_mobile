// LoginScreen.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button, Icon } from '@rneui/themed'; // Native Elements
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Função de login
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // Navegar para tela de registro
  };

  return (
    <View style={styles.container}>
      <Icon name="user" type="font-awesome" size={80} color="#517fa4" />
      <Input
        placeholder="Login"
        leftIcon={{ type: 'font-awesome', name: 'envelope', color: '#517fa4' }}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Senha"
        leftIcon={{ type: 'font-awesome', name: 'lock', color: '#517fa4' }}
        secureTextEntry
        containerStyle={styles.inputContainer}
      />
      <Button
        title="Login"
        buttonStyle={styles.loginButton}
        onPress={handleLogin}
      />
      <Button
        title="Cadastre-se"
        type="outline"
        buttonStyle={styles.registerButton}
        onPress={handleRegister}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  inputContainer: {
    width: '80%',
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: '#517fa4',
    width: '80%',
    borderRadius: 5,
    marginTop: 10,
  },
  registerButton: {
    width: '80%',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default LoginScreen;
