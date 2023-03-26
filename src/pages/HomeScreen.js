import React, { useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Platform, ScrollView, Dimensions  } from 'react-native';
import { DatabaseConnection } from '../database/database-connection';
import { Card, Rating } from '@rneui/themed';
import Ratings from './components/Ratings';

const db = DatabaseConnection.getConnection();

const { width, height } = Dimensions.get('window');
const size = Math.min(width, height) * 0.1;

const HomeScreen = ({ navigation }) => {
  useEffect(() => {
    db.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
        [],
        function (tx, res) {
          console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS table_user', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_contact INT(10), user_address VARCHAR(255))',
              []
            );
          }
        }
      );
    });
  }, []);

  const Header = () => {
    return (
      <View style={styles.header}>
        <Text>header</Text>
      </View>
    )
  }

  const Boxes = (foto) => {
    const items = Array.from({ length: 10 }, (v, i) => i);
  
    return (
      <View style={styles.boxContainer}>
        {items.map((item) => (
          <View key={item} style={styles.box}>
            <View style={styles.inner}>
              <Text>Foto</Text>
            </View>
          </View>
        ))}
      </View>
    )
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <Boxes></Boxes>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  boxContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: 'red',
    padding: 0,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  box: {
    width: size * 3,
    height: size * 5,
    backgroundColor: 'green',
    padding: 0,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: '10%',
    marginVertical: '5%',
    borderRadius: size / 2,
  },
  inner: {
    width: size * 3,
    height: size * 3,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: size * 10,
  },
});

export default HomeScreen;