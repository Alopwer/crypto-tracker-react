import React, {useEffect, useState} from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Crypto from './src/components';
import Header from './src/components/Header';


export default function App() {

  const APP_KEY = '249445eb-c050-4f35-9932-dd8ac13285db';

  const [cryptos, setCryptos] = useState([]);
  const [infos, setInfo] = useState([]);

  useEffect( () => {
    getCryptos();
  }, {});

  const requestOptions = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    qs: {
      'start': '1',
      'limit': '1',
      'convert': 'USD'
    },
    headers: {
      'X-CMC_PRO_API_KEY': '249445eb-c050-4f35-9932-dd8ac13285db'
    },
    json: true,
    gzip: true
  };

  const requestOptionsInfo = {
    method: 'GET',
    uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/info',
    qs: {
      'slug':  "bitcoin,ethereum"
    },
    headers: {
      'X-CMC_PRO_API_KEY': '249445eb-c050-4f35-9932-dd8ac13285db'
    },
    json: true,
    gzip: true
  }

  const getCryptos = async () => {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',requestOptions);
    const data = await response.json();
    setCryptos(data.data);

    console.log(Object.getOwnPropertyNames(data.data["0"]));
  }

  const getInfo = async () => {
    const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/info',requestOptionsInfo);
    const data1 = await response.json();
    setInfo(data1);
  }

  return (
    <View>
      <Header />
      <View>
        <ScrollView>
        {cryptos.map(crypto => (
          <Crypto
            key={crypto.id}
            title={crypto.name}
            symbol={crypto.symbol}
            dollars={crypto.quote.USD.price}
            daily={crypto.quote.USD.percent_change_24h}
            weekly={crypto.quote.USD.percent_change_7d}
          />
      ))}
      </ScrollView>
      </View>
    </View>
  );
}
