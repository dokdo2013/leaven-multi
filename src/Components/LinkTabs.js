import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Button,
  Divider,
  Link,
} from '@chakra-ui/react';

const Panel = ({ link, linkName }) => {
  return (
    <Link href={link} isExternal style={{ textDecoration: 'none' }}>
      <Button isFullWidth mb={1}>
        {linkName}
      </Button>
    </Link>
  );
};

const LinkTabs = () => {
  return (
    <Tabs variant="soft-rounded" size="sm" colorScheme="purple">
      <TabList flexWrap="wrap">
        <Tab>LEAVEN</Tab>
        <Tab>감자가비</Tab>
        <Tab>구나구나</Tab>
        <Tab>구슬요</Tab>
        <Tab>노래하는도란</Tab>
        <Tab>김병살</Tab>
        <Tab>아드리챔</Tab>
        <Tab>유달린</Tab>
        <Tab>전해리</Tab>
        <Tab>지야</Tab>
        <Tab>포도당</Tab>
      </TabList>
      <Divider mt={2}></Divider>
      <TabPanels>
        {/* LEAVEN */}
        <TabPanel>
          <Panel
            link="https://www.youtube.com/channel/UCDLtY-WrAwy7orpK9aVWG8g"
            linkName="Youtube (유튜브)"
          />
          <Panel
            link="https://cafe.naver.com/leaven0402"
            linkName="Fan Cafe (팬카페)"
          />
          <Panel
            link="https://www.instagram.com/official_leaven/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            link="https://twitch.tv/team/leaven"
            linkName="Twitch (트위치)"
          />
          <Panel
            link="https://twitter.com/Official_Leaven"
            linkName="Twitter (트위터)"
          />
        </TabPanel>
        {/* 감자가비 */}
        <TabPanel>
          <Panel
            link="https://www.youtube.com/channel/UCDLtY-WrAwy7orpK9aVWG8g"
            linkName="Youtube (유튜브)"
          />
          <Panel
            link="https://cafe.naver.com/leaven0402"
            linkName="Fan Cafe (팬카페)"
          />
          <Panel
            link="https://www.instagram.com/official_leaven/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            link="https://twitch.tv/team/leaven"
            linkName="Twitch (트위치)"
          />
          <Panel
            link="https://twitter.com/Official_Leaven"
            linkName="Twitter (트위터)"
          />
        </TabPanel>
        {/* 구나구나 */}
        <TabPanel>
          <Panel
            link="https://www.youtube.com/channel/UCDLtY-WrAwy7orpK9aVWG8g"
            linkName="Youtube (유튜브)"
          />
          <Panel
            link="https://cafe.naver.com/leaven0402"
            linkName="Fan Cafe (팬카페)"
          />
          <Panel
            link="https://www.instagram.com/official_leaven/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            link="https://twitch.tv/team/leaven"
            linkName="Twitch (트위치)"
          />
          <Panel
            link="https://twitter.com/Official_Leaven"
            linkName="Twitter (트위터)"
          />
        </TabPanel>
        {/* 구슬요 */}
        <TabPanel>
          <Panel
            link="https://www.youtube.com/channel/UCDLtY-WrAwy7orpK9aVWG8g"
            linkName="Youtube (유튜브)"
          />
          <Panel
            link="https://cafe.naver.com/leaven0402"
            linkName="Fan Cafe (팬카페)"
          />
          <Panel
            link="https://www.instagram.com/official_leaven/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            link="https://twitch.tv/team/leaven"
            linkName="Twitch (트위치)"
          />
          <Panel
            link="https://twitter.com/Official_Leaven"
            linkName="Twitter (트위터)"
          />
        </TabPanel>
        {/* 노래하는도란 */}
        <TabPanel>
          <Panel
            link="https://www.youtube.com/channel/UCDLtY-WrAwy7orpK9aVWG8g"
            linkName="Youtube (유튜브)"
          />
          <Panel
            link="https://cafe.naver.com/leaven0402"
            linkName="Fan Cafe (팬카페)"
          />
          <Panel
            link="https://www.instagram.com/official_leaven/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            link="https://twitch.tv/team/leaven"
            linkName="Twitch (트위치)"
          />
          <Panel
            link="https://twitter.com/Official_Leaven"
            linkName="Twitter (트위터)"
          />
        </TabPanel>
        {/* 김병살 */}
        <TabPanel>
          <Panel
            link="https://www.youtube.com/channel/UCDLtY-WrAwy7orpK9aVWG8g"
            linkName="Youtube (유튜브)"
          />
          <Panel
            link="https://cafe.naver.com/leaven0402"
            linkName="Fan Cafe (팬카페)"
          />
          <Panel
            link="https://www.instagram.com/official_leaven/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            link="https://twitch.tv/team/leaven"
            linkName="Twitch (트위치)"
          />
          <Panel
            link="https://twitter.com/Official_Leaven"
            linkName="Twitter (트위터)"
          />
        </TabPanel>
        {/* 아드리챔 */}
        <TabPanel>
          <Panel
            link="https://www.youtube.com/channel/UCDLtY-WrAwy7orpK9aVWG8g"
            linkName="Youtube (유튜브)"
          />
          <Panel
            link="https://cafe.naver.com/leaven0402"
            linkName="Fan Cafe (팬카페)"
          />
          <Panel
            link="https://www.instagram.com/official_leaven/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            link="https://twitch.tv/team/leaven"
            linkName="Twitch (트위치)"
          />
          <Panel
            link="https://twitter.com/Official_Leaven"
            linkName="Twitter (트위터)"
          />
        </TabPanel>
        {/* 유달린 */}
        <TabPanel>
          <Panel
            link="https://www.youtube.com/channel/UCDLtY-WrAwy7orpK9aVWG8g"
            linkName="Youtube (유튜브)"
          />
          <Panel
            link="https://cafe.naver.com/leaven0402"
            linkName="Fan Cafe (팬카페)"
          />
          <Panel
            link="https://www.instagram.com/official_leaven/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            link="https://twitch.tv/team/leaven"
            linkName="Twitch (트위치)"
          />
          <Panel
            link="https://twitter.com/Official_Leaven"
            linkName="Twitter (트위터)"
          />
        </TabPanel>
        {/* 전해리 */}
        <TabPanel>
          <Panel
            link="https://www.youtube.com/channel/UCDLtY-WrAwy7orpK9aVWG8g"
            linkName="Youtube (유튜브)"
          />
          <Panel
            link="https://cafe.naver.com/leaven0402"
            linkName="Fan Cafe (팬카페)"
          />
          <Panel
            link="https://www.instagram.com/official_leaven/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            link="https://twitch.tv/team/leaven"
            linkName="Twitch (트위치)"
          />
          <Panel
            link="https://twitter.com/Official_Leaven"
            linkName="Twitter (트위터)"
          />
        </TabPanel>
        {/* 지야 */}
        <TabPanel>
          <Panel
            link="https://www.youtube.com/channel/UCDLtY-WrAwy7orpK9aVWG8g"
            linkName="Youtube (유튜브)"
          />
          <Panel
            link="https://cafe.naver.com/leaven0402"
            linkName="Fan Cafe (팬카페)"
          />
          <Panel
            link="https://www.instagram.com/official_leaven/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            link="https://twitch.tv/team/leaven"
            linkName="Twitch (트위치)"
          />
          <Panel
            link="https://twitter.com/Official_Leaven"
            linkName="Twitter (트위터)"
          />
        </TabPanel>
        {/* 포도당 */}
        <TabPanel>
          <Panel
            link="https://www.youtube.com/channel/UCDLtY-WrAwy7orpK9aVWG8g"
            linkName="Youtube (유튜브)"
          />
          <Panel
            link="https://cafe.naver.com/leaven0402"
            linkName="Fan Cafe (팬카페)"
          />
          <Panel
            link="https://www.instagram.com/official_leaven/"
            linkName="Instagram (인스타그램)"
          />
          <Panel
            link="https://twitch.tv/team/leaven"
            linkName="Twitch (트위치)"
          />
          <Panel
            link="https://twitter.com/Official_Leaven"
            linkName="Twitter (트위터)"
          />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default LinkTabs;
