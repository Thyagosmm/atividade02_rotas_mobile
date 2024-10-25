import React, { useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { Input, Button, Icon } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import { addContact } from "../api";

const SaveContactScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigation = useNavigation();

  const handleSave = async () => {
    try {
      const response = await addContact(name, email, phone);
      Alert.alert("Sucesso", "Contato registrado com sucesso!");
      navigation.goBack();
    } catch (error) {
      Alert.alert("Erro", "Falha ao registrar contato");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" type="font-awesome" color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contato</Text>
      </View>

      {/* Campos de entrada */}
      <View style={styles.formContainer}>
        <Input
          placeholder="Nome"
          value={name}
          onChangeText={setName}
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
          placeholder="Telefone"
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
          containerStyle={styles.inputContainer}
        />

        {/* Botão de Salvar */}
        <Button
          title="Salvar"
          buttonStyle={styles.saveButton}
          onPress={handleSave}
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

export default SaveContactScreen;
