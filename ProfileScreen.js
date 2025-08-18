import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Platform } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { Picker } from '@react-native-picker/picker';

const categories = [
  'Motivation',
  'Spiritual',
  'Entrepreneurs',
  'Stoics',
  'Science',
  'Politics',
  'Creativity',
  'Wisdom',
  'Love',
  'Nature',
  'Popular unknown'
];

const ProfileScreen = ({ navigation }) => {
  const [image, setImage] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Permission to access gallery is required!');
        }
      }
    })();
  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={pickImage}>
        <View style={styles.imageWrapper}>
          <Image
            source={
              image
                ? { uri: image }
                : require('./assets/default-profile.png')
            }
            style={styles.profileImage}
          />
        </View>
      </TouchableOpacity>

      <Text style={styles.name}>Profile Name</Text>
      <Text style={styles.subtitle}>Your mood status</Text>

      <View style={styles.pickerWrapper}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={(itemValue) => setSelectedCategory(itemValue)}
          mode="dropdown"
          style={styles.picker}
          dropdownIconColor="#5B9BFF"
        >
          {categories.map((cat) => (
            <Picker.Item key={cat} label={cat} value={cat} />
          ))}
        </Picker>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Quotes', { category: selectedCategory })}
        style={styles.quoteButton}
      >
        <Text style={styles.buttonText}>Go to Today's Quote</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F0F0F0',
  },
  imageWrapper: {
    borderWidth: 3,
    borderColor: '#5B9BFF',
    borderRadius: 80,
    padding: 15,
    marginBottom: 20,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  name: {
    fontSize: 26,
    fontWeight: '600',
    color: '#333',
  },
  subtitle: {
    fontSize: 18,
    color: '#777',
    marginTop: 5,
    marginBottom: 40,
  },
  pickerWrapper: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#5B9BFF',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginBottom: 50,
  },
  picker: {
    height: 50,
    color: '#5B9BFF',
  },
  quoteButton: {
    backgroundColor: '#5B9BFF',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 80,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default ProfileScreen;