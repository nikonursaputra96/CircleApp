import { Divider, Flex } from "@chakra-ui/react";
import ProfileCards from "../components/Profile/ProfileCard";
import ProfileHeader from "../components/Profile/ProfileHeader";
import ProfileMedia from "../components/Profile/ProfileMedia";
import { useState } from "react";

const Profile = (): React.JSX.Element => {

    const [menuActive, setActiveMenu] = useState('AllPost')
    const handleMenuClick = (menu:string) => {
        setActiveMenu(menu)
    }
  return (
    <Flex
      position="relative"
      justify="center"
      flexDirection={"column"}
      ml={[0, 390]}
      borderRight="2px solid rgba(144, 144, 144, .5)"
      borderLeft="1px solid rgba(144, 144, 144, .5)"
    >
      <ProfileHeader 
      handleMenuClick={handleMenuClick} 
      menuActive ={menuActive} />
      {menuActive === "AllPost" ? <ProfileCards /> : <ProfileMedia />}
      <Divider borderColor="rgba(144, 144, 144, 1)" mt="20px" />
    </Flex>
  );
};

export default Profile;
