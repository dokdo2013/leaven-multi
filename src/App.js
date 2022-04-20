import React, { useState } from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import Nav from './Components/Nav';
import Content from './Components/Content';

function App() {
  const [broadcastMember, setBroadcastMember] = useState(1);
  const [broadcastMemberList, setBroadcastMemberList] = useState(['vnek1234']);
  const [selectedUser, setSelectedUser] = useState([
    'vnek1234',
    'kimc6h12o6',
    'gamjagabee',
  ]);

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
      <Content data={{ selectedUser, broadcastMember }}></Content>
    </ChakraProvider>
  );
}

export default App;
