import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5, FontAwesome } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import * as Clipboard from 'expo-clipboard';
import Toast from 'react-native-toast-message';

const App = () => {
  const [quote, setQuote] = useState('Loading..');
  const [author, setAuthor] = useState('Loading..');
  const [isLoading, setIsLoading] = useState(false);

  const randomQuote = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('https://stoic-quotes.com/api/quotes?num=1');
      const result = await res.json();
      setQuote(result[0].text);
      setAuthor(result[0].author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    randomQuote();
  }, []);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(quote);
    Toast.show({
      type: 'success',
      text1: 'Quote copied!',
      position: 'bottom',
      visibilityTime: 1500,
    });
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0F0F0' }}>
      <StatusBar style="light" />
      <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 20, padding: 20 }}>
        <Text style={{ textAlign: 'center', fontSize: 26, fontWeight: '600', color: '#333', marginBottom: 20 }}>
          Quote of the Day
        </Text>

        <FontAwesome5 name="quote-left" size={20} color="#000" style={{ textAlign: 'left', marginBottom: -12 }} />

        <Text style={{ color: '#000', fontSize: 16, lineHeight: 26, letterSpacing: 1.1, fontWeight: '400', textAlign: 'center', marginBottom: 10, paddingHorizontal: 30 }}>
          {quote}
        </Text>

        <FontAwesome5 name="quote-right" size={20} color="#000" style={{ textAlign: 'right', marginTop: -20, marginBottom: 20 }} />

        <Text style={{ textAlign: 'right', fontWeight: '300', fontStyle: 'italic', fontSize: 16, color: '#000', marginBottom: 10 }}>
          - {author}
        </Text>

        <TouchableOpacity onPress={randomQuote} style={{ backgroundColor: '#5B9BFF', padding: 20, borderRadius: 30, marginVertical: 20 }}>
          <Text style={{ color: '#fff', fontSize: 18, textAlign: 'center' }}>
            {isLoading ? "Loading..." : "New Quote"}
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <TouchableOpacity style={{ borderWidth: 2, borderColor: '#000', borderRadius: 50, padding: 15 }}>
            <FontAwesome5 name="user" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={{ borderWidth: 2, borderColor: '#000', borderRadius: 50, padding: 15 }}>
            <FontAwesome5 name="comment-alt" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity onPress={copyToClipboard} style={{ borderWidth: 2, borderColor: '#000', borderRadius: 50, padding: 15 }}>
            <FontAwesome name="copy" size={22} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Toast-komponent måste ligga i root */}
      <Toast />
    </View>
  );
};

export default App;
