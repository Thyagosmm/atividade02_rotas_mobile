import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Alert, Modal } from 'react-native';
import { Input, Button, Icon } from '@rneui/themed';
import { useNavigation, useRoute } from '@react-navigation/native';
import { updateContact, deleteContact } from '../api';

const EditContactScreen: React.FC = () => {
  const route = useRoute();
  const { contact } = route.params as { contact: { id: string; name: string; phone: string; email: string } };
  const [name, setName] = useState(contact.name);
  const [email, setEmail] = useState(contact.email);
  const [phone, setPhone] = useState(contact.phone);
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);

  const handleUpdate = async () => {
    try {
      await updateContact(contact.id, name, email, phone);
      Alert.alert('Sucesso', 'Contato atualizado com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Falha ao atualizar o contato.');
    }
  };

  const handleDelete = () => {
    setModalVisible(true);
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" type="font-awesome" color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Contato</Text>
      </View>
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
      <Modal
  animationType="slide"
  transparent={true}
  visible={modalVisible}
  onRequestClose={() => setModalVisible(false)}
>
  <View style={styles.modalContainer}>
    <View style={styles.modalContent}>
      <Text style={styles.modalTitle}>Confirmação</Text>
      <Text>Tem certeza de que deseja excluir este contato?</Text>
      <View style={styles.modalButtons}>
        <Button
          title="Cancelar"
          buttonStyle={styles.cancelButton}
          onPress={() => setModalVisible(false)}
        />
        <Button
          title="Excluir"
          buttonStyle={styles.deleteButtonModal}
          onPress={async () => {
            try {
              await deleteContact(contact.id);
              Alert.alert('Sucesso', 'Contato excluído com sucesso!');
              navigation.goBack();
            } catch (error) {
              Alert.alert('Erro', 'Falha ao excluir o contato.');
            }
          }}
        />
      </View>
    </View>
  </View>
</Modal>
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
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
    width: '100%',
  },
  cancelButton: {
    backgroundColor: 'gray',
    flex: 1,
    marginRight: 10,
  },
  deleteButtonModal: {
    backgroundColor: 'red',
    flex: 1,
  },
});

export default EditContactScreen;
