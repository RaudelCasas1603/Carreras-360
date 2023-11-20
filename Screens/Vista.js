import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Button from '../components/Button';
import { useAuth } from '../AuthContext';


const Ocupacion = ( { route, navigation}) => {
  const Usuario = route.params.resultado;
  const [estatus, setEstatus] = useState('');
  const [preferencia, setPreferencia] = useState('');
  const { updateUserId } = useAuth();

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
    updateUserId(Usuario);
    var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let resultado = xhttp.responseText;
          console.log(resultado);
          // Pass resultado to the "Ocupacion" screen;
          }
    };
      xhttp.open("GET", "https://carreras360.000webhostapp.com/Access/register.php?id="+Usuario+"&ocupacion="+estatus+"&carrera="+preferencia, true);
      xhttp.send();
      navigation.navigate("TabNavigation");

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

      <Text style={styles.title}>Seleccione su Carrera de Interés:</Text>
      <View style={styles.grid}>
        <TouchableOpacity
          style={[styles.option, preferencia === 'Ingeneria Informatica' && styles.selected]}
          onPress={() => handlePreferenciaPress('Ingeneria Informatica')}
        >
           <Image
                        source={require('../assets/INNI.jpg')}
                        style={styles.image}
                    />
          <Text style={styles.text}>Ingeneria Informatica</Text>
        </TouchableOpacity>

        <TouchableOpacity
          
          style={[styles.option, preferencia === 'Ingeneria en Computación' && styles.selected]}
          onPress={() => handlePreferenciaPress('Ingeneria en Computación')}
        >
           <Image
                        source={require('../assets/INCO.jpg')}
                        style={styles.image}
                    />
          <Text style={styles.text}>Ingeneria en Computación</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.option, preferencia === 'Ingeneria Biomedica' && styles.selected]}
          onPress={() => handlePreferenciaPress('Ingeneria Biomedica')}
        >
           <Image
                        source={require('../assets/INBIO.jpg')}
                        style={styles.image}
                    />
          <Text style={styles.text}>Ingeneria Biomedica</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferencia === 'Ingeneria en Robotica' && styles.selected]}
          onPress={() => handlePreferenciaPress('Ingeneria en Robotica')}
        >
           <Image
                        source={require('../assets/INRO.jpg')}
                        style={styles.image}
                    />
          <Text style={styles.text}>Ingeneria en Robotica</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferencia === 'Ingeneria Civil' && styles.selected]}
          onPress={() => handlePreferenciaPress('Ingeneria Civil')}
        >
           <Image
                        source={require('../assets/INCIV.jpg')}
                        style={styles.image}
                    />
          <Text style={styles.text}>Ingeneria Civil</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.option, preferencia === 'Ingeneria Industrial' && styles.selected]}
          onPress={() => handlePreferenciaPress('Ingeneria Industrial')}
        >
           <Image
                        source={require('../assets/INDU.jpg')}
                        style={styles.image}
                    />
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
    padding: 10,
  },
  title:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    height: 60,
    width: 60,
    borderRadius: 15,
    marginLeft: 130,
    marginBottom: 15,
    marginTop: 15,
},
});

export default Ocupacion;
