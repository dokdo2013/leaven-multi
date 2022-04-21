import React, { useState, useEffect } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './Components/Nav';
import Content from './Components/Content';
import axios from 'axios';

function App() {
  const [broadcastMember, setBroadcastMember] = useState(1);
  const [broadcastMemberList, setBroadcastMemberList] = useState([]);
  const [selectedUser, setSelectedUser] = useState([]);

  useEffect(() => {
    loadApi();
  }, []);

  const loadApi = () => {
    axios.get('https://api.c6h12o6.kr/leaven').then(Response => {
      console.log(Response.data);
      if (Response.data.code === 'SUCCESS') {
        setBroadcastMemberList(Response.data.data);
        setSelectedUser(Response.data.data);
      } else if (Response.data.code === 'DATA_EMPTY') {
        console.log('dd');
      }
    });
  };

  return (
    <ChakraProvider theme={theme}>
      <Nav
        data={{
          selectedUser,
          setSelectedUser,
          broadcastMember,
          broadcastMemberList,
        }}
      ></Nav>
      <Content data={{ selectedUser, broadcastMemberList }}></Content>
    </ChakraProvider>
  );
}

export default App;
