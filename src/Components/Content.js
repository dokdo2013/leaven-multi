import React from 'react';
import { Box, Grid, GridItem, useColorModeValue } from '@chakra-ui/react';

export default function Content({ data }) {
  console.log(data);
  let currCnt = 0;
  const templateRows =
    'repeat(' + (data.selectedUser.length > 1 ? '2' : '1') + ', 1fr)';
  const templateColumns =
    'repeat(' + (parseInt(data.selectedUser.length / 2) + 1) + ', 1fr)';
  return (
    <Box
      minH="calc(100vh - 64px)"
      bg={useColorModeValue('gray.100', 'gray.900')}
      style={{ display: 'flex', justifyContent: 'space-between' }}
    >
      {data.broadcastMember ? (
        <>
          <Box
            style={{
              width: 'calc(100vw - 310px)',
              height: 'calc(100vh - 64px)',
            }}
          >
            <Grid
              templateRows={templateRows}
              templateColumns={templateColumns}
              style={{ height: '100%' }}
            >
              {data.selectedUser.map(user => {
                console.log(currCnt);
                return (
                  <GridItem
                    w="100%"
                    h="100%"
                    colSpan={data.selectedUser.length === ++currCnt ? 2 : 1}
                  >
                    <iframe
                      title="embed"
                      id={'embed_' + user}
                      src={
                        'https://player.twitch.tv/?muted=true&channel=' +
                        user +
                        '&parent=localhost&parent=multi.leaven.team'
                      }
                      class="stream"
                      allowFullScreen="true"
                      style={{ width: '100%', height: '100%' }}
                    ></iframe>
                  </GridItem>
                );
              })}
            </Grid>
          </Box>
          <Box style={{ height: 'calc(100vh - 64px)', width: '340px' }}>
            <iframe
              title="chat"
              scrolling="no"
              id={'chat-' + data.selectedUser[0] + '-embed'}
              src={
                'https://twitch.tv/embed/' +
                data.selectedUser[0] +
                '/chat?parent=localhost&parent=multi.leaven.team'
              }
              height="100%"
              width="100%"
            ></iframe>
          </Box>
        </>
      ) : (
        <Box
          style={{
            width: 'calc(100vw - 310px)',
            height: 'calc(100vh - 64px)',
          }}
        >
          현재 방송 중인 멤버가 아무도 없어요 ㅠㅠ
        </Box>
      )}
    </Box>
  );
}
