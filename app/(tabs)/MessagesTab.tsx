import React from 'react';
import {FlatList, StyleSheet, TextInput, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import Message, {MessageData} from "@/components/Message";
import {SafeAreaView} from "react-native-safe-area-context";
import {messages} from "@/data/mock";
import Header from "@/components/Header";

export default function MessagesTab() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Header
          title="Messages"
          bottomChild={
            <View style={styles.searchContainer}>
              <Ionicons name="search" size={13} color="#687684" style={styles.searchIcon}/>
              <TextInput
                placeholder="Search for people and groups"
                style={styles.searchInput}
              />
            </View>
          }
        />
        <FlatList
          data={messages}
          renderItem={({ item }: { item: MessageData }) => <Message item={item}/>}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 18,
    },
    headerIcons: {
      flexDirection: 'row',
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      margin: 16,
      backgroundColor: '#F5F8FA',
      borderRadius: 80,
      height: 32
    },
    searchIcon: {
      marginLeft: 9.5,
    },
    searchInput: {
      flex: 1, marginLeft:
        6.5, fontSize:
        17
    }
  })
;