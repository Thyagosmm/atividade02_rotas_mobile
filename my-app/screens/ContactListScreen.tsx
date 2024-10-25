import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";
import { Icon, ListItem, Avatar } from "@rneui/themed";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getContacts } from "../api";

interface Contact {
  id: string;
  name: string;
  phone: string;
  email: string;
}

const ContactListScreen: React.FC = () => {
  const navigation = useNavigation();
  const [contacts, setContacts] = useState<Contact[]>([]);

  const fetchContacts = async () => {
    try {
      const contactsData = await getContacts();
      console.log(contactsData); 
      setContacts(contactsData);
    } catch (error) {
      Alert.alert("Erro", "Falha ao buscar contatos do servidor");
      console.error(error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      fetchContacts(); // Chamada para buscar contatos ao carregar a tela
    }, [])
  );

  const handleAddContact = () => {
    navigation.navigate("SaveContact");
  };

  const handleEditContact = (contact: Contact) => {
    navigation.navigate("EditContact", { contact });
  };

  const renderContactItem = ({ item }: { item: Contact }) => (
    <ListItem bottomDivider onPress={() => handleEditContact(item)}>
      <Avatar
        rounded
        icon={{ name: "user", type: "font-awesome", color: "#fff" }}
        overlayContainerStyle={{ backgroundColor: "blue" }}
      />
      <ListItem.Content>
        <ListItem.Title>{item.name}</ListItem.Title>
        <ListItem.Subtitle>{item.phone}</ListItem.Subtitle>
      </ListItem.Content>
    </ListItem>
  );

  return (
    <View style={styles.container}>
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
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "blue",
    paddingVertical: 15,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    flex: 1,
  },
  addButton: {
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
});

export default ContactListScreen;
