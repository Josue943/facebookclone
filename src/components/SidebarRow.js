import React from 'react';
import { Avatar } from '@material-ui/core';

import '../css/SidebarRow.css';

const SidebarRow = ({ title, src, Icon }) => (
  <div className='sidebar-row'>
    {src && <Avatar src={src} />}
    {Icon && <Icon />}
    <h4>{title}</h4>
  </div>
);

export default SidebarRow;
