import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Screen1 = ({ navigation }) => {
  const [idCounter, setIdCounter] = useState(0);
  const [name, setName] = useState('');
  const [cantidad, setCantidad] = useState('');
  const [precioCosto, setPrecioCosto] = useState('');
  const [precioVenta, setPrecioVenta] = useState('');
  const [cantVendido, setcantVendido] = useState('');

  useEffect(() => {
    const getCounter = async () => {
      const counter = await AsyncStorage.getItem('idCounter');
      if (counter) {
        setIdCounter(parseInt(counter));
      }
    };
    getCounter();
  }, []);

  const saveData = async () => {
    const newId = idCounter + 1;
    const newData = { id: newId.toString(), name, cantidad, precioCosto, precioVenta, cantVendido };
    let data = await AsyncStorage.getItem('data');
    if (data) {
      data = JSON.parse(data);
      data.push(newData);
    } else {
      data = [newData];
    }
    await AsyncStorage.setItem('data', JSON.stringify(data));
    await AsyncStorage.setItem('idCounter', newId.toString());
    setIdCounter(newId);
    setName('');
    setCantidad('');
    setPrecioCosto('');
    setPrecioVenta('');
    setcantVendido('');
    navigation.navigate('Screen0'); 
  };
  

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Id: {idCounter+1}</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Nombre:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite el nombre del producto: "
          value={name}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cantidad producto:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite la cantidad del producto: "
          value={cantidad}
          onChangeText={text => setCantidad(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Precio Costo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite precio costo: "
          value={precioCosto}
          onChangeText={text => setPrecioCosto(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Precio Venta:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite precio venta: "
          value={precioVenta}
          onChangeText={text => setPrecioVenta(text)}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Cantidad Vendido:</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite cantidad vendidos: "
          value={cantVendido}
          onChangeText={text => setcantVendido(text)}
          keyboardType="numeric"
        />
      </View>
      <Button title="Guardar" onPress={saveData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default Screen1;
