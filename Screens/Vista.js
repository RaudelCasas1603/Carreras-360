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
      <Text>Seleccione su Estado:</Text>
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

      <Text>Seleccione su Centro Universitario de Interés:</Text>
      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.option, preferencia === 'CUCEI' && styles.selected]}
          onPress={() => handlePreferenciaPress('CUCEI')}
        >
          <Text style={styles.text}>CUCEI</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, preferencia === 'CUCEA' && styles.selected]}
          onPress={() => handlePreferenciaPress('CUCEA')}
        >
          <Text style={styles.text}>CUCEA</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, preferencia === 'CUCS' && styles.selected]}
          onPress={() => handlePreferenciaPress('CUCS')}
        >
          <Text style={styles.text}>CUCS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferencia === 'CUAAD' && styles.selected]}
          onPress={() => handlePreferenciaPress('CUAAD')}
        >
          <Text style={styles.text}>CUAAD</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferencia === 'CUCBA' && styles.selected]}
          onPress={() => handlePreferenciaPress('CUCBA')}
        >
          <Text style={styles.text}>CUCBA</Text>
        </TouchableOpacity>
      </View>
      <Button title="Registrarse" onPress={handleRegistro} />
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
  }
});

export default Ocupacion;
