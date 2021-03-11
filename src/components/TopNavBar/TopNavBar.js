import React, {Fragment} from 'react'

import LeftMenu from './LeftMenu/LeftMenu'
import Logo from './TopMenu/Menu'
import RightMenu from './RightMenu/RightMenu'

function TopNavBar() {
  return (
    <Fragment>
      <Logo />
      <LeftMenu />
      <RightMenu />
    </Fragment>
  )
}

export default TopNavBar
