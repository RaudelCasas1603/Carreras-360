import React, { useState, useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView, Animated } from 'react-native';
import { useAuth } from '../AuthContext';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
import COLORS from '../constants/color';

const SomeOtherScreen = () => {
  const { userCarreer, updateUserCarreer } = useAuth();
  const [posts, setPosts] = useState([]);
  const [carrera, setCarrera] = useState('');
  const scrollY = useRef(new Animated.Value(0)).current;

  // Arreglo de URLs de imágenes
  const profileImages = [
    require('../assets/hero1.jpg'),
    require('../assets/hero2.jpg'),
    require('../assets/hero3.jpg'),
  ];

  const getRandomImage = () => {
    // Seleccionar una imagen aleatoria del arreglo
    const randomIndex = Math.floor(Math.random() * profileImages.length);
    return profileImages[randomIndex];
  };

  const handleSearch = async () => {
    try {
      const response = await fetch(
        `https://carreras360.000webhostapp.com/searchPost.php?carrera=${carrera}`
      );
      const data = await response.json();

      if (data && data.posts) {
        setPosts(data.posts);
      } else {
        console.error('La respuesta no tiene la estructura esperada:', data);
      }
    } catch (error) {
      console.error('Error al cargar la información de los posts:', error);
    }
  };

  useEffect(() => {
    const loadInfo = async () => {
      try {
        const response = await fetch(
          `https://carreras360.000webhostapp.com/listPost.php`
        );
        const data = await response.json();

        if (data && data.posts) {
          setPosts(data.posts);
        } else {
          console.error('La respuesta no tiene la estructura esperada:', data);
        }
      } catch (error) {
        console.error('Error al cargar la información de los posts:', error);
      }
    };

    loadInfo();
  }, [userCarreer]);

  const translateY = scrollY.interpolate({
    inputRange: [0, 50],
    outputRange: [0, -50],
    extrapolate: 'clamp',
  });

  return (
    <ScrollView
      style={{ flex: 1 }}
      onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollY } } }], { useNativeDriver: false })}
      scrollEventThrottle={16}
    >
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ translateY }] }}>
          <Text style={styles.headerText}>Bienvenido de Nuevo</Text>
          <View style={styles.pickerContainer}>
            <Picker
              style={{ flex: 1 }}
              selectedValue={carrera}
              onValueChange={(itemValue) => setCarrera(itemValue)}
            >
              <Picker.Item label="Selecciona tu carrera" value="" />
                <Picker.Item label="Ingenieria Informatica" value="Ingeneria Informatica" />
                <Picker.Item label="Ingeneria en Computación" value="Ingeneria en Computacion" />
                <Picker.Item label="Ingeneria Biomedica" value="Ingeneria Biomedica" />
                <Picker.Item label="Ingeneria en Robotica" value="Ingeneria en Robotica" />
                <Picker.Item label="Ingeneria Civil" value="Ingeneria Civil" />
                <Picker.Item label="Ingeneria Industrial" value="Ingeneria Industrial" /> 
            </Picker>
            <TouchableOpacity style={styles.searchIcon} onPress={handleSearch}>
              <Icon name="search" size={25} color="#333" />
            </TouchableOpacity>
          </View>
        </Animated.View>
        {posts.map((post) => (
          <View key={post.idPost} style={styles.postContainer}>
            <View style={styles.postHeader}>
              <Text style={styles.postHeaderText}>{post.idCarrera}</Text>
              <Image
                source={getRandomImage()}
                style={styles.profileImage}
              />
            </View>
            <Text style={styles.postText}>{post.Texto}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );;
};


const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 10,
    marginBottom: 10,
  },
  postContainer: {
    marginTop: 16,
    padding: 12,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    borderWidth: 1,
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  postHeaderText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  postText: {
    fontSize: 16,
    color: 'black',
  },
  pickerContainer: {
    flexDirection: 'row',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
    color: 'black',
  },
  searchIcon: {
    backgroundColor: '#39868D',
    padding: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 20,
  },
});


export default SomeOtherScreen;
