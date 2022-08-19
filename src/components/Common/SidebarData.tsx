import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faCircleUser } from '@fortawesome/free-solid-svg-icons'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FontAwesomeIcon icon={faHouse} />,
    cName: 'nav-text',
  },
  {
    title: 'Info',
    path: '/info',
    icon: <FontAwesomeIcon icon={faCircleUser} />,
    cName: 'nav-text',
  },
]
