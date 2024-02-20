import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Screen3 = ({ route, navigation }) => {
  const { index } = route.params;
  const [name, setName] = useState('');
  const [age, setAge] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const jsonData = await AsyncStorage.getItem('data');
    const parsedData = jsonData ? JSON.parse(jsonData) : [];
    if (parsedData[index]) {
      setName(parsedData[index].name);
      setAge(parsedData[index].age);
    }
  };

  const updateData = async () => {
    const jsonData = await AsyncStorage.getItem('data');
    let data = jsonData ? JSON.parse(jsonData) : [];
    data[index] = { name, age };
    await AsyncStorage.setItem('data', JSON.stringify(data));
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        value={age}
        onChangeText={text => setAge(text)}
      />
      <Button title="Update" onPress={updateData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default Screen3;
