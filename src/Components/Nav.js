import {
  Box,
  Flex,
  Avatar,
  AvatarBadge,
  useColorModeValue,
} from '@chakra-ui/react';

export default function Nav({ data }) {
  return (
    <>
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
        {/* <Box bg="gray.100" px={4}> */}
        <Flex justifyContent={'center'} style={{ overflow: 'auto' }}>
          <Avatar
            m={2}
            name="가 비"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/e2d1d515-0704-46f4-a093-875e822dfda5-profile_image-50x50.png"
          >
            {data.broadcastMemberList.indexOf('gamjagabee') !== -1 && (
              <AvatarBadge boxSize="1em" bg="red.500" />
            )}
          </Avatar>
          <Avatar
            m={2}
            name="구 나"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/318b3b82-96a3-40a9-853f-58306fa245c7-profile_image-50x50.png"
          >
            {data.broadcastMemberList.indexOf('gunaguna00') !== -1 && (
              <AvatarBadge boxSize="1em" bg="red.500" />
            )}
          </Avatar>
          <Avatar
            m={2}
            name="슬 요"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/e659d2d7-1c77-4406-b48e-922b5898aa21-profile_image-50x50.png"
          >
            {data.broadcastMemberList.indexOf('beadyo97') !== -1 && (
              <AvatarBadge boxSize="1em" bg="red.500" />
            )}
          </Avatar>
          <Avatar
            m={2}
            name="도 란"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/f60572b4-4913-44e4-aea6-365dff4ed1fa-profile_image-50x50.png"
          >
            {data.broadcastMemberList.indexOf('vnek1234') !== -1 && (
              <AvatarBadge boxSize="1em" bg="red.500" />
            )}
          </Avatar>
          <Avatar
            m={2}
            name="병 살"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/1f051c10-1e8c-4a88-9b85-29397be02f2a-profile_image-50x50.png"
          >
            {data.broadcastMemberList.indexOf('kbs9981') !== -1 && (
              <AvatarBadge boxSize="1em" bg="red.500" />
            )}
          </Avatar>
          <Avatar
            m={2}
            name="리 챔"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/fe5c0004-5f37-485e-b010-09b1cf489209-profile_image-50x50.png"
          >
            {data.broadcastMemberList.indexOf('adricham') !== -1 && (
              <AvatarBadge boxSize="1em" bg="red.500" />
            )}
          </Avatar>
          <Avatar
            m={2}
            name="달 린"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/22c0a1f3-c10e-4efb-8bad-ee3b584dadb4-profile_image-50x50.png"
          >
            {data.broadcastMemberList.indexOf('yudarlinn') !== -1 && (
              <AvatarBadge boxSize="1em" bg="red.500" />
            )}
          </Avatar>
          <Avatar
            m={2}
            name="해 리"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/aa34673e-9665-420e-8aa3-17e77afe5336-profile_image-50x50.png"
          >
            {data.broadcastMemberList.indexOf('gofl2237') !== -1 && (
              <AvatarBadge boxSize="1em" bg="red.500" />
            )}
          </Avatar>
          <Avatar
            m={2}
            name="지 야"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/6b972ad9-33f1-4c79-9007-d831c843f311-profile_image-50x50.png"
          >
            {data.broadcastMemberList.indexOf('jeeya0402') !== -1 && (
              <AvatarBadge boxSize="1em" bg="red.500" />
            )}
          </Avatar>
          <Avatar
            m={2}
            name="도 당"
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/b7e08a27-a844-442d-941c-e2e59213c339-profile_image-50x50.png"
          >
            {data.broadcastMemberList.indexOf('kimc6h12o6') !== -1 && (
              <AvatarBadge boxSize="1em" bg="red.500" />
            )}
          </Avatar>
        </Flex>
      </Box>
    </>
  );
}
