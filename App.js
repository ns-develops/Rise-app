import React from 'react';
import { View, Text, Touchable, TouchableOpacity } from 'react-native';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0F0F0' }}> 
      <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 20, padding: 20 }}>
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
          }}>
            "Test text under the quote"
            </Text>
     
            <Text>New Quote</Text>
      </View>
    </View>
  );
}

export default App;