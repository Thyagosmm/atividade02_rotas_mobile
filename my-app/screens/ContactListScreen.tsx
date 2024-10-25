import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, FlatList } from 'react-native';
import { Icon, ListItem, Avatar } from '@rneui/themed';
import { useNavigation } from '@react-navigation/native';

interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
}

const ContactListScreen: React.FC = () => {
  const navigation = useNavigation();

  // Lista de contatos de exemplo
  const contacts: Contact[] = [
    { id: '1', name: 'John Doe', phone: '123-456-7890' ,email:'teste1@gmail.com'},
    { id: '2', name: 'Jane Smith', phone: '987-654-3210',email:'teste2@gmail.com' },
    { id: '3', name: 'Alice Johnson', phone: '555-123-4567',email:'teste3@gmail.com' },
  ];

  const handleAddContact = () => {
    navigation.navigate('SaveContact');
  };

  const handleEditContact = (contact: Contact) => {
    navigation.navigate('EditContact', { contact });
  };

  const renderContactItem = ({ item }: { item: Contact }) => (
    <ListItem bottomDivider onPress={() => handleEditContact(item)}>
      <Avatar
        rounded
        icon={{ name: 'user', type: 'font-awesome', color: '#fff' }}
        overlayContainerStyle={{ backgroundColor: 'blue' }}
      />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.phone}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
      {/* Faixa azul superior com título e ícone de adicionar */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Lista de Contatos</Text>
        <TouchableOpacity onPress={handleAddContact} style={styles.addButton}>
          <Icon name="plus" type="font-awesome" color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Lista de contatos */}
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={renderContactItem}
      />
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
    justifyContent: 'space-between',
  },
  headerTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
  addButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default ContactListScreen;
