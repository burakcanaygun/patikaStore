import type { Node } from "react";
import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import SearchBox from "./components/SearchBox";
import storeData from "./storeData.json";
import Card from "./components/Card";


const App: () => Node = () => {
  const renderStoreData = ({ item }) => <Card title={item.title} imgURL={item.imgURL} inStock={item.inStock} price={item.price}
                                              id={item.id} />;

  return (
    <View style={styles.container}>
      <Text style={styles.storeText}>PATIKASTORE</Text>
      <SearchBox />
      <FlatList data={storeData}
                renderItem={renderStoreData} horizontal={false}
                keyExtractor={item => item.id.toString()}
                numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:"column",
  },
  storeText: {
    fontWeight: "bold",
    fontSize: 40,
    color: "#840884",
    marginBottom: 10,
    marginTop: 10,
  },
});

export default App;
