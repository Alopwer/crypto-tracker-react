import React from 'react';
import { ScrollView, StatusBar, StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View>
      <StatusBar backgroundColor="blue" barStyle="dark-content"/>
        <View>
          <Text style={styles.header}>Crypto</Text>
        </View>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: StatusBar.currentHeight,
    textAlign: "center",
  },
});
