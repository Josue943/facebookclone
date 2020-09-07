import React from 'react';
import ChatIcon from '@material-ui/icons/Chat';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import PeopleIcon from '@material-ui/icons/People';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';

import '../css/Sidebar.css';
import SidebarRow from './SidebarRow';
import { useAuthContext } from '../context/AuthContext';

const Sidebar = () => {
  const [
    {
      user: { photoURL, displayName },
    },
  ] = useAuthContext();

  return (
    <div className='sidebar'>
      <SidebarRow title={displayName} src={photoURL} />
      <SidebarRow
        title='COVID-19 Information Center'
        Icon={LocalHospitalIcon}
      />
      <SidebarRow title='Pages' Icon={EmojiFlagsIcon} />
      <SidebarRow title='Friends' Icon={PeopleIcon} />
      <SidebarRow title='Messenger' Icon={ChatIcon} />
      <SidebarRow title='Marketplace' Icon={StorefrontIcon} />
      <SidebarRow title='Video' Icon={VideoLibraryIcon} />
      <SidebarRow title='Marketplace' Icon={ExpandMoreOutlined} />
    </div>
  );
};

export default Sidebar;
