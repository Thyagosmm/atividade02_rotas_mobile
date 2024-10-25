// LoginScreen.tsx
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Input, Button, Icon } from '@rneui/themed'; // Native Elements
import { useNavigation } from '@react-navigation/native';

const LoginScreen: React.FC = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    navigation.navigate('ContactList');
  };

  const handleRegister = () => {
    navigation.navigate('Register'); // Navegar para tela de registro
  };

  return (
    <View style={styles.container}>
      {/* Faixa superior com botão de voltar e título */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Login</Text>
      </View>
      <View style={styles.formContainer}>
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
        buttonStyle={styles.registerButton}
        onPress={handleRegister}
      />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: 'blue',
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    flex: 1,
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginRight: 30,
  },formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  inputContainer: {
    marginVertical: 10,
  },
  loginButton: {
    backgroundColor: 'blue',
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
  },
  registerButton: {
    backgroundColor: 'red',
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
  },

});

export default LoginScreen;
