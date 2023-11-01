import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import Button from '../components/Button';
import { getFirestore, doc, updateDoc } from 'firebase/firestore';

const Ocupacion = ( { route }) => {
  const Usuario = route.params.ID;
  const [estatus, setEstatus] = useState('');
  const [preferencia, setPreferencia] = useState('');

  const handleEstatusPress = (selectedEstatus) => {
    if (estatus === selectedEstatus) {
      setEstatus('');
    } else {
      setEstatus(selectedEstatus);
    }
  };

  const handlePreferenciaPress = (selectedPreferencia) => {
    if (preferencia === selectedPreferencia) {
      setPreferencia('');
    } else {
      setPreferencia(selectedPreferencia);
    }
  };

  const handleRegistro = async () => {
    console.log('Estatus:', estatus);
    console.log('Preferencia:', preferencia);

    const db = getFirestore();
    const userDocRef = doc(db, 'users', Usuario);
    const dataToUpdate = {
      estatus: estatus,
      preferencia: preferencia,
    };

    try {
      await updateDoc(userDocRef, dataToUpdate);
      console.log('Document successfully updated!');
    }catch (error) {
      console.error('Error updating document: ', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Seleccione su Estado:</Text>
      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.option, estatus === 'Estudiante' && styles.selected]}
          onPress={() => handleEstatusPress('Estudiante')}
        >
          <Text style={styles.text}>Estudiante</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, estatus === 'Aspirante' && styles.selected]}
          onPress={() => handleEstatusPress('Aspirante')}
        >
          <Text style={styles.text}>Aspirante</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, estatus === 'Otro' && styles.selected]}
          onPress={() => handleEstatusPress('Otro')}
        >
          <Text style={styles.text}>Otro</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Seleccione su Centro Universitario de Interés:</Text>
      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.option, preferencia === 'Ingeneria Informatica' && styles.selected]}
          onPress={() => handlePreferenciaPress('Ingeneria Informatica')}
        >
          <Text style={styles.text}>Ingeneria Informatica</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, preferencia === 'Ingeneria en Computación' && styles.selected]}
          onPress={() => handlePreferenciaPress('Ingeneria en Computación')}
        >
          <Text style={styles.text}>Ingeneria en Computación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, preferencia === 'Ingeneria Biomedica' && styles.selected]}
          onPress={() => handlePreferenciaPress('Ingeneria Biomedica')}
        >
          <Text style={styles.text}>Ingeneria Biomedica</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferencia === 'Ingeneria en Robotica' && styles.selected]}
          onPress={() => handlePreferenciaPress('Ingeneria en Robotica')}
        >
          <Text style={styles.text}>Ingeneria en Robotica</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferencia === 'Ingeneria Civil' && styles.selected]}
          onPress={() => handlePreferenciaPress('Ingeneria Civil')}
        >
          <Text style={styles.text}>Ingeneria Civil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferencia === 'Ingeneria Industrial' && styles.selected]}
          onPress={() => handlePreferenciaPress('Ingeneria Industrial')}
        >
          <Text style={styles.text}>Ingeneria Industrial</Text>
        </TouchableOpacity>
      </View>
      <Button title="Terminar Registro" onPress={handleRegistro} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  option: {
    width: '100%', // Ajusta el ancho para mostrar 2 opciones por fila
    padding: 10,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  selected: {
    backgroundColor: 'lightblue',
    fontWeight: 'bold',
  },
  container: {
    marginTop: 50,
    marginHorizontal: 20,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
  title:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Ocupacion;
