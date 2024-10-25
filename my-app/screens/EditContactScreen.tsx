import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import { Input, Button, Icon } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditContactScreen: React.FC = () => {
  const route = useRoute();
  const { contact } = route.params as { contact: { id: string; name: string; phone: string , email: string} };
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);
  const navigation = useNavigation();
  

  const handleUpdate = () => {
    console.log('Contato atualizado:', { name, phone , email});
    navigation.goBack();
  };

  const handleDelete = () => {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja excluir este contato?',
      [
        { text: 'Cancelar', style: 'cancel' },
        {
          text: 'Excluir',
          style: 'destructive',
          onPress: () => {
            Alert.alert('Contato excluído com sucesso!');
            // Aqui você pode adicionar a lógica para excluir o contato
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      {/* Faixa superior com botão de voltar e título */}
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
        
        {/* Botões de Alterar e Excluir */}
        <Button
          title="Alterar"
          buttonStyle={styles.updateButton}
          onPress={handleUpdate}
        />
        <Button
          title="Excluir"
          buttonStyle={styles.deleteButton}
          onPress={handleDelete}
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
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  inputContainer: {
    marginVertical: 10,
  },
  updateButton: {
    backgroundColor: 'blue',
    width: '100%',
    borderRadius: 5,
    marginTop: 20,
  },
  deleteButton: {
    backgroundColor: 'red',
    width: '100%',
    borderRadius: 5,
    marginTop: 10,
  },
});

export default EditContactScreen;
