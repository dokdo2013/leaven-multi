import {
  Box,
  Badge,
  Button,
  Flex,
  Avatar,
  AvatarBadge,
  Image,
  useDisclosure,
  Tooltip,
} from '@chakra-ui/react';
import { SettingsIcon, LinkIcon } from '@chakra-ui/icons';
import SettingsModal from './SettingsModal';
import LinkModal from './LinkModal';

export default function Nav({ data }) {
  // Modal Disclosure
  const {
    isOpen: linkIsOpen,
    onOpen: linkOnOpen,
    onClose: linkOnClose,
  } = useDisclosure();
  const {
    isOpen: settingsIsOpen,
    onOpen: settingsOnOpen,
    onClose: settingsOnClose,
  } = useDisclosure();

  const changeSelect = member => {
    if (data.selectedUser.indexOf(member) === -1) {
      // 선택 안 되어있으면 선택 상태로 변경
      data.setSelectedUser([...data.selectedUser, member]);
    } else {
      // 선택되어 있으면 선택해제
      const tempSelectedUser = [...data.selectedUser];
      for (let i = 0; i < data.selectedUser.length; i++) {
        if (data.selectedUser[i] === member) {
          tempSelectedUser.splice(i, 1);
        }
      }
      data.setSelectedUser([...tempSelectedUser]);
    }
  };

  return (
    <>
      <Box
        bg={data.chatDarkMode ? 'gray.800' : 'gray.100'}
        px={4}
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          minWidth: '200px',
        }}
      >
        <LinkModal isOpen={linkIsOpen} onClose={linkOnClose} />
        <SettingsModal
          isOpen={settingsIsOpen}
          onClose={settingsOnClose}
          data={data}
        />
        <Flex alignItems="center">
          <Image src="../../leaven.png" h={12} />
          <Badge
            colorScheme={data.chatDarkMode ? 'whiteAlpha' : 'blackAlpha'}
            style={{ fontSize: '14px', marginLeft: '6px' }}
          >
            RUST MULTI
          </Badge>
        </Flex>
        <Flex justifyContent={'center'} style={{ overflow: 'auto' }}>
          <Tooltip label="전해리">
            <Avatar
              m={2}
              name="해 리"
              src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/c552441f-f764-4e67-cd3f-1621da181a00/icon200"
              onClick={() => {
                changeSelect('gofl2237');
              }}
              style={
                data.selectedUser.indexOf('gofl2237') !== -1
                  ? {
                      outline: '4px solid #766E79',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: '#766E79' }
              }
            >
              {data.broadcastMemberList.indexOf('gofl2237') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          <Tooltip label="포도당">
            <Avatar
              m={2}
              name="도 당"
              src="https://imagedelivery.net/lR-z0ff8FVe1ydEi9nc-5Q/fa524576-4978-4d27-ac41-f619090f4500/icon200"
              onClick={() => {
                changeSelect('kimc6h12o6');
              }}
              style={
                data.selectedUser.indexOf('kimc6h12o6') !== -1
                  ? {
                      outline: '4px solid #C49CFD',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: '#C49CFD' }
              }
            >
              {data.broadcastMemberList.indexOf('kimc6h12o6') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          <Tooltip label="품사">
            <Avatar
              m={2}
              name="품 사"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/40898ec2-9ba0-485f-b61d-d511608e32b6-profile_image-70x70.png"
              onClick={() => {
                changeSelect('84km');
              }}
              style={
                data.selectedUser.indexOf('84km') !== -1
                  ? {
                      outline: '4px solid orange',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: 'orange' }
              }
            >
              {data.broadcastMemberList.indexOf('84km') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          <Tooltip label="서솜하">
            <Avatar
              m={2}
              name="솜 하"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/9414c605-1a98-42b4-a9d3-741b5f94dccf-profile_image-70x70.png"
              onClick={() => {
                changeSelect('ssomha_');
              }}
              style={
                data.selectedUser.indexOf('ssomha_') !== -1
                  ? {
                      outline: '4px solid orange',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: 'orange' }
              }
            >
              {data.broadcastMemberList.indexOf('ssomha_') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
          <Tooltip label="망극이">
            <Avatar
              m={2}
              name="망 극"
              src="https://static-cdn.jtvnw.net/jtv_user_pictures/4b8efe59-36c5-444c-a3ba-fbfec4a48749-profile_image-70x70.png"
              onClick={() => {
                changeSelect('mge0317');
              }}
              style={
                data.selectedUser.indexOf('mge0317') !== -1
                  ? {
                      outline: '4px solid orange',
                      padding: '1px',
                      background: 'white',
                      cursor: 'pointer',
                    }
                  : { cursor: 'pointer', background: 'orange' }
              }
            >
              {data.broadcastMemberList.indexOf('mge0317') !== -1 && (
                <AvatarBadge boxSize="1em" bg="red.500" />
              )}
            </Avatar>
          </Tooltip>
        </Flex>
        <Flex style={{minWidth: '200px', justifyContent: 'flex-end'}}>
          <Button
            p={0}
            onClick={settingsOnOpen}
            bg={data.chatDarkMode ? 'gray.700' : 'gray.100'}
            _hover={{ bg: data.chatDarkMode ? 'gray.500' : 'gray.200' }}
          >
            <SettingsIcon color={data.chatDarkMode ? 'gray.200' : 'gray.400'} />
          </Button>
        </Flex>
      </Box>
    </>
  );
}
