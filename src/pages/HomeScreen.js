import React, { useEffect } from 'react';
import { View, SafeAreaView, Text, StyleSheet, Platform, ScrollView  } from 'react-native';
import { DatabaseConnection } from '../database/database-connection';
import { Card, Rating } from '@rneui/themed';

const db = DatabaseConnection.getConnection();

var Ratings = function () {
  var ratingCompleted = function (rating) {
      console.log('Rating is: ' + rating);
  };
};

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

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;