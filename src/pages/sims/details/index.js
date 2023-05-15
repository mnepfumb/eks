// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import Button from '@mui/material/Button'
import Router from 'next/router'

// ** Icons Imports
import AccessPointNetwork from 'mdi-material-ui/AccessPointNetwork'
import AccountDetails from 'mdi-material-ui/AccountDetails'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Details Tabs Imports
import Overview from 'src/views/sims/details/Overview'
import SessionRecords from 'src/views/sims/details//SessionRecords'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState('overview')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='sim-details tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='overview'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccessPointNetwork />
                <TabName>Overview</TabName>
              </Box>
            }
          />
          <Tab
            value='session-record'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountDetails />
                <TabName>Session Record</TabName>
              </Box>
            }
          />
          <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Button variant='contained' sx={{ marginRight: 3.5 }} onClick={() => Router.back()}>
              Back
            </Button>
          </Box>
        </TabList>

        <TabPanel sx={{ p: 0 }} value='overview'>
          <Overview />
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='session-record'>
          <SessionRecords />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AccountSettings
