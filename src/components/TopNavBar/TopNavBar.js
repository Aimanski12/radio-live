import React, {Fragment} from 'react'
import RightMenu from './RightMenu/RightMenu'
import LeftMenu from './LeftMenu/LeftMenu'
import Logo from './TopMenu/Menu'

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
