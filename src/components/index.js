import React from 'react';
import { StatusBar, FlatList, ScrollView, Image, StyleSheet, Text, View } from 'react-native';

const Daily = ({valueDaily}) => {
  if (valueDaily > 0) {
    return <Text style={[styles.text, styles.positive, styles.bold]}>{valueDaily.toFixed(4)}%</Text>
  }
    return <Text style={[styles.text, styles.negative, styles.bold]}>{valueDaily.toFixed(4)}%</Text>
}

const Weekly = ({valueWeekly}) => {
  if (valueWeekly > 0) {
    return <Text style={[styles.text, styles.negative, styles.bold]}>{valueWeekly.toFixed(4)}%</Text>
  }
    return <Text style={[styles.text, styles.negative, styles.bold]}>{valueWeekly.toFixed(4)}%</Text>
}

const Crypto = ({title, symbol, dollars, daily, weekly, logo}) => {
  return (
        <View>
          <View style={styles.cryptoBlock}>
            <View style={styles.cryptoInfo}>
              <View style={styles.cryptoName}>
                <Text style={[styles.text, styles.bold]}>{symbol} </Text>
                <Text style={styles.text}>{' | '} {title}</Text>
              </View>
              <View style={styles.cryptoText}>
                <Text style={[styles.currency, styles.text, styles.bold]}>{dollars.toFixed(7)} $</Text>
              </View>
            </View>

            <View style={styles.cryptoTime}>
              <Text>24h: <Daily valueDaily={daily}/></Text>
              <Text>7d: <Weekly valueWeekly={weekly}/></Text>
            </View>
        </View>
      </View>
  )
}

export default Crypto ;

const styles = StyleSheet.create({
  cryptoBlock: {
    marginTop: 30,
    paddingLeft: 25,
    paddingRight: 25,
    display: 'flex',
    flexDirection: 'column',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  cryptoInfo: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "white",
  },
  cryptoName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "white",
    height: 50,
    flex: 1
  },
  cryptoText: {
    flex: 1,
    justifyContent: 'center',
  },
  cryptoTime: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: "white",
    justifyContent: 'space-around',
    width: '100%',
  },
  currency: {
    textAlign: 'right'
  },
  text: {
    fontSize: 16,
  },
  bold: {
    fontWeight: "bold"
  },
  positive: {
    color: "#1EBEA5"
  },
  negative: {
    color: "#DC361E"
  }
})
