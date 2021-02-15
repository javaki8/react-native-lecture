import React, { useState, useCallback } from 'react';
import { Text, View, Button } from 'react-native';

import { SearchBar } from 'react-native-elements';
import SearchList from './SearchList'

// 함수의 리턴 값이 JSX.Element면
// React 컴포넌트가 된다.

// JSX를 쓸려면 import React from 'react';

const Home = ({navigation}) => {

  // local state
  const [keyword, setKeyword] = useState("");
  const handleSearch = useCallback((search)=>{
    console.log(search);
    setKeyword(search);
  }, []);

  return(
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <SearchBar platform={"android"} containerStyle={{width:'80%'}}
        placeholder="Type Here..."
        onChangeText={handleSearch}
        value={keyword}
      />
      <SearchList navigation={navigation} keyword={keyword}></SearchList>         
    </View>
  )
}

export default Home;