import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker'; // Cambia la importación
import Button from '../components/Button';
import COLORS from '../constants/color';
import { useAuth } from '../AuthContext';

const CreatePost = () => {
  const { userId } = useAuth();
  const [postContent, setPostContent] = useState('');
  const [carrera, setCarrera] = useState('');
  const navigation = useNavigation();

  const handleCreatePost = async () => {
    try {
      const response = await fetch(`https://carreras360.000webhostapp.com/createPost.php?id=15&texto=${postContent}&idCarrera=${carrera}`);
      const data = await response.text();
      console.log(data);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  
    setPostContent('');
    setCarrera('');
  };
  
  

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crear un nuevo post</Text>
      {/* Entrada de texto para el contenido del post */}
      <TextInput
        style={styles.input}
        multiline
        placeholder="¿Qué opiniones tienes?"
        value={postContent}
        onChangeText={(text) => setPostContent(text)}
      />

      {/* Selector de carrera */}
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={carrera}
          onValueChange={(itemValue, itemIndex) => setCarrera(itemValue)}
        >
          <Picker.Item label="Selecciona tu carrera" value="" />
          <Picker.Item label="Ingeneria Informatica" value= '1' />
          <Picker.Item label="Ingeneria en Computación" value='2' />
          <Picker.Item label="Ingeneria Biomedica" value='3' />
          <Picker.Item label="Ingeneria en Robotica" value='4' />
          <Picker.Item label="Ingeneria Civil" value='5' />
          <Picker.Item label="Ingeneria Industrial" value='6' />
          {/* Agrega más carreras según sea necesario */}
        </Picker>
      </View>

      <Button
        title="Publicar"
        filled
        style={{
          marginTop: 18,
          marginBottom: 4,
          backgroundColor: carrera ? COLORS.white : '#CED1D1', // Cambia el color del botón según la selección
        }}
        onPress={handleCreatePost}
        disabled={!carrera} // Deshabilita el botón si no se ha seleccionado una carrera
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    height: 100,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
    marginTop: 30,
  },
  pickerContainer: {
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
    marginTop: 30,
  },
});

export default CreatePost;
