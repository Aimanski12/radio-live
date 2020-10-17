import '../../styles/globals.css'

// fonts
import '../../styles/fonts.css'

// menus
import '../../styles/menus/menu.css'

// top navbar css
import '../../styles/topnavbar/topnavbar.css'
import '../../styles/topnavbar/logo.css'

// sidebar css
import '../../styles/sidebar/sidebar.css'
import '../../styles/sidebar/logo.css'

// dashboard css
import '../../styles/dashboard/dashboard.css'
import '../../styles/dashboard/topmenu.css'
import '../../styles/dashboard/featuredradio.css'
import '../../styles/dashboard/categories.css'
import '../../styles/dashboard/countries.css'
import '../../styles/dashboard/pagination.css'

// listen css
import '../../styles/listen/listen.css'

// footer css
import '../../styles/footer/footer.css'

// intro css
import '../../styles/intro/intro.css'

import {RadioDataContext} from '../utils/contextapi/context'

function MyApp({ Component, pageProps }) {
  
  return (
    <RadioDataContext>
      <Component {...pageProps} />
    </RadioDataContext>
  )
}

export default MyApp
