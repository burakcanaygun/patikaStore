import React, { useState } from "react";
import { SearchBar } from "react-native-elements";
import { Icon } from "react-native-vector-icons";
import styles from './SearchBox.style';
import storeData from '../../storeData.json';

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const updateSearch = ev => {
    setSearch(ev);

  };

  return (
    <>
    <SearchBar
      lightTheme={true}
      placeholder={"Ara..."}
      value={search}
      onChangeText={ev => {
        updateSearch(ev);
      }}
      round={true}
      searchIcon={{ type: "fontAwesome", name: "search", size: 25 }}
      containerStyle={styles.searchBox}
    />
    </>
  );
};


export default SearchBox;
