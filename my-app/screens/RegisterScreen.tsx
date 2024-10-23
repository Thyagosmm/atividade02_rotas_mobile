import React, { useState } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Input, Button } from '@rneui/themed'; // Native Elements

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica para salvar o usuário, como uma requisição à API.
    if (name && cpf && email && password) {
      Alert.alert('Cadastro', 'Usuário cadastrado com sucesso!');
      // Limpar campos após cadastro, se necessário:
      setName('');
      setCpf('');
      setEmail('');
      setPassword('');
    } else {
      Alert.alert('Erro', 'Por favor, preencha todos os campos!');
    }
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder="Nome"
        value={name}
        onChangeText={setName}
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="CPF"
        value={cpf}
        onChangeText={setCpf}
        keyboardType="numeric"
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        containerStyle={styles.inputContainer}
      />
      <Input
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        containerStyle={styles.inputContainer}
      />
      <Button
        title="Salvar"
        buttonStyle={styles.saveButton}
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
  saveButton: {
    backgroundColor: '#517fa4',
    width: '80%',
    borderRadius: 5,
    marginTop: 20,
  },
});

export default RegisterScreen;
