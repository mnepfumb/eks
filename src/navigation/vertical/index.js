// ** Icon imports
import { Advertisements, EmailNewsletter, OfficeBuilding, Devices, Login, Cards, HomeOutline } from 'mdi-material-ui'

import CubeOutline from 'mdi-material-ui/CubeOutline'
import Table from 'mdi-material-ui/Table'
import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'

const navigation = () => {
  return [
    // {
    //   sectionTitle: 'Dashboard'
    // },
    // {
    //   title: 'Dashboard',
    //   icon: HomeOutline,
    //   path: '/'
    // },
    {
      sectionTitle: 'Organizations'
    },
    {
      title: 'Company Detail',
      icon: OfficeBuilding,
      path: '/'
    },
    {
      title: 'SIMs',
      icon: Cards,
      path: '/sims'
    },
    {
      title: 'Devices',
      icon: Devices,
      path: '/devices'
    },
    {
      sectionTitle: 'Invites'
    },
    {
      title: 'Invites',
      icon: EmailNewsletter,
      path: '/invites'
    },
    {
      sectionTitle: 'Account Settings'
    },
    {
      title: 'Profile',
      icon: AccountCogOutline,
      path: '/account-settings'
    },

    {
      title: 'Change Password',
      icon: AccountCogOutline,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Pages'
    },
    {
      title: 'Login',
      icon: Login,
      path: '/pages/login',
      openInNewTab: true
    },
    {
      title: 'Register',
      icon: AccountPlusOutline,
      path: '/pages/register',
      openInNewTab: true
    },
    {
      title: 'Error',
      icon: AlertCircleOutline,
      path: '/pages/error',
      openInNewTab: true
    },
    {
      sectionTitle: 'User Interface'
    },
    {
      title: 'Typography',
      icon: FormatLetterCase,
      path: '/typography'
    },
    {
      title: 'Icons',
      path: '/icons',
      icon: GoogleCirclesExtended
    },
    {
      title: 'Cards',
      icon: CreditCardOutline,
      path: '/cards'
    },
    {
      title: 'Tables',
      icon: Table,
      path: '/tables'
    },
    {
      icon: CubeOutline,
      title: 'Form Layouts',
      path: '/form-layouts'
    }
  ]
}

export default navigation
