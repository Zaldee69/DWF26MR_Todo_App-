import { SearchBar } from "react-native-elements";
import React, { useState } from "react";

const CustomSearchBar = () => {
  const [search, setSearch] = useState();

  const updateSearch = (search) => {
    this.setState({ search });
  };

  return (
    <SearchBar
      flex={1}
      placeholder="Type Here..."
      onChangeText={updateSearch}
      value={search}
    />
  );
};
export default CustomSearchBar;
