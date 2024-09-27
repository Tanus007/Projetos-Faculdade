import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import * as Location from 'expo-location';
import { MapView, Marker } from 'react-native-maps';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieData, setMovieData] = useState(null);
  const [location, setLocation] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permissão de localização não concedida', 'Por favor, conceda permissão de localização para obter a localização.');
        return;
      }

      let locationData = await Location.getCurrentPositionAsync({});
      setLocation(locationData);
    })();
  }, []);

  const handleSearch = async () => {
    if (movieTitle.trim() === '') {
      Alert.alert('Aviso', 'Por favor, insira uma localização válida.');
      return;
    }
    try {
      const apiKey = '1993e977'; // Substitua pelo seu próprio API Key
      const apiUrl = `https://www.omdbapi.com/?t=${movieTitle}&apikey=${apiKey}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovieData(data);
      } else {
        Alert.alert('Erro', 'Localização não encontrada. Verifique o título e tente novamente.');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Houve um problema na busca da localização. Tente novamente mais tarde.');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f0f0f0' }}>
      <StatusBar style="auto" />
      <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20, fontWeight: 'bold', color: '#333' }}>
        Busca de Localizações
      </Text>
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: '#ccc',
          margin: 10,
          padding: 8,
          borderRadius: 5,
          backgroundColor: '#fff',
        }}
        placeholder="Digite o nome da localização"
        value={movieTitle}
        onChangeText={(text) => setMovieTitle(text)}
      />
      <Button
        title="Buscar Localização"
        onPress={handleSearch}
        color="#337ab7"
        accessibilityLabel="Buscar Localização"
      />

      {location && (
        <View style={{ margin: 20, backgroundColor: '#fff', padding: 10, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>Sua Localização</Text>
          <Text style={{ fontSize: 16, color: '#666' }}>Latitude: {location.coords.latitude}</Text>
          <Text style={{ fontSize: 16, color: '#666' }}>Longitude: {location.coords.longitude}</Text>
          <MapView
            style={{ width: '100%', height: 200, borderRadius: 5 }}
            initialRegion={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
              latitudeDelta: 0.0922,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
              }}
              title="Sua Localização"
            />
          </MapView>
        </View>
      )}

      {movieData && (
        <View style={{ margin: 20, backgroundColor: '#fff', padding: 10, borderRadius: 5, shadowColor: '#000', shadowOpacity: 0.2, shadowRadius: 5 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>Resultado da Busca</Text>
          <Text style={{ fontSize: 16, color: '#666' }}>{movieData.Title}</Text>
          <Text style={{ fontSize: 16, color: '#666' }}>{movieData.Year}</Text>
        </View>
      )}
    </View>
  );
};

export default App;