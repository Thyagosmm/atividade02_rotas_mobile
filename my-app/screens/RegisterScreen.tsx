import React, { useState } from "react";
import { View, StyleSheet, Alert, TouchableOpacity, Text } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { registerUser } from "../api";

const RegisterScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();

  const handleRegister = async () => {
    try {
      const response = await registerUser(name, cpf, email, password);
      Alert.alert("Sucesso", "Usuário registrado com sucesso!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Falha ao registrar usuário");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" type="font-awesome" color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Usuário</Text>
      </View>
      <View style={styles.formContainer}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    flex: 1,
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginRight: 30,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  inputContainer: {
    marginVertical: 10,
  },
  saveButton: {
    backgroundColor: "blue",
    width: "100%",
    borderRadius: 5,
    marginTop: 20,
  },
});

export default RegisterScreen;
