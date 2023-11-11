import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useAuth } from '../AuthContext'; // Adjust the path

const SomeOtherScreen = () => {
  const { userId } = useAuth();

  return (
    <View>
      <Text style={styles.Text}>User ID: {userId}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    Text:{
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginTop: 40
    }
});

export default SomeOtherScreen;
