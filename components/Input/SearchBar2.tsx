import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import Searchbutton from "../../assets/Searchbutton.svg"
import {  useNavigation } from '@react-navigation/native';



const SearchBar2 = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const search = () => {
    if (searchText !== "") {
      navigation.navigate("FindScreen", {find :searchText} )

    }
  }

  const locate = `Users/${searchText}`
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search Users..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <Pressable
        onPress={search}
  
      >
        <Searchbutton

        />
      </Pressable>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    width: "95%",
    padding: 10,
    borderRadius: 20, // Making the container rounded
    margin: 10,
    overflow: 'hidden', // Clip the content to the rounded borders
  },
  input: {
    flex: 1,
    paddingVertical: 5,
  },
});

export default SearchBar2;
