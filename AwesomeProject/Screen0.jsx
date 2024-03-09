import { View, Text, FlatList, Button, StyleSheet } from 'react-native';

const Screen0 = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Ferretería El Cielo</Text>  
      <View>
        <Button title="Agregar" onPress={() => navigation.navigate('Screen1')} />
      </View>
      <Button title="Ver" onPress={() => navigation.navigate('Screen5')} />
      <Button title="Borrar" onPress={() => navigation.navigate('Screen2')} />
      <Button title="Modificar" onPress={() => navigation.navigate('Screen3')} />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: 'blue',
      fontWeight: 'bold',
      fontSize: 30,
    },
});

export default Screen0;