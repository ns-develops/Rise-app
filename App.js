import { FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View 
      style={{ 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#F0F0F0' 
      }}
    > 
      <View 
        style={{ 
          width: '90%', 
          backgroundColor: '#fff', 
          borderRadius: 20, 
          padding: 20 
        }}
      >
        <Text
          style={{
            textAlign: 'center',
            fontSize: 26,
            fontWeight: '600',
            color: '#333',
            marginBottom: 20,
          }}
        >
          Quote of the Day
        </Text>

        <FontAwesome5 
          name="quote-left" 
          size={20} 
          color="#000" 
          style={{ textAlign: 'left', marginBottom: -12 }} 
        />

        <Text
          style={{
            color: '#000',
            fontSize: 16,
            lineHeight: 26,
            letterSpacing: 1.1,
            fontWeight: '400',
            textAlign: 'center',
            marginBottom: 10,
            paddingHorizontal: 30,
          }}
        >
          Test text under the quote
        </Text>
        <FontAwesome5 
          name="quote-right" 
          size={20} 
          color="#000" 
          style={{ textAlign: 'right', marginTop: -20, marginBottom:20 }} 
        />

        <Text 
          style={{
            textAlign: 'right', 
            fontWeight: '300', 
            fontStyle: 'italic',
            fontSize: 16,
            color: '#000',
            marginBottom: 10
          }}
        >
          - Author Name
        </Text>

        <TouchableOpacity 
          onPress={() => {}} 
          style={{
            backgroundColor: '#5B9BFF',
            padding: 20,
            borderRadius: 30,
            marginVertical: 20
          }}
        >
          <Text 
            style={{
              color: '#fff', 
              fontSize: 18, 
              textAlign: 'center'
            }}
          >
            New Quote
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default App;