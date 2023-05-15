// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Avatar from '@mui/material/Avatar'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'

// ** Icons Imports
import TrendingUp from 'mdi-material-ui/TrendingUp'
import CurrencyUsd from 'mdi-material-ui/CurrencyUsd'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import CellphoneLink from 'mdi-material-ui/CellphoneLink'
import AccountOutline from 'mdi-material-ui/AccountOutline'

// ** MUI Imports
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

// ** Icons Imports
import StarOutline from 'mdi-material-ui/StarOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const salesData = [
  {
    stats: '245k',
    title: 'Sales',
    color: 'primary',
    icon: <TrendingUp sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '12.5k',
    title: 'Customers',
    color: 'success',
    icon: <AccountOutline sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '1.54k',
    color: 'warning',
    title: 'Products',
    icon: <CellphoneLink sx={{ fontSize: '1.75rem' }} />
  },
  {
    stats: '$88k',
    color: 'info',
    title: 'Revenue',
    icon: <CurrencyUsd sx={{ fontSize: '1.75rem' }} />
  }
]

const renderStats = () => {
  return salesData.map((item, index) => (
    <Grid item xs={12} sm={3} key={index}>
      <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
        <Avatar
          variant='rounded'
          sx={{
            mr: 3,
            width: 44,
            height: 44,
            boxShadow: 3,
            color: 'common.white',
            backgroundColor: `${item.color}.main`
          }}
        >
          {item.icon}
        </Avatar>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant='caption'>{item.title}</Typography>
          <Typography variant='h6'>{item.stats}</Typography>
        </Box>
      </Box>
    </Grid>
  ))
}

// const SimEstatStats = () => {
//   return SimEstatData.map((item, index) => (
//     <Grid item xs={12} sm={3} key={index}>
//       <Box key={index} sx={{ display: 'flex', alignItems: 'center' }}>
//         <Box sx={{ display: 'flex', flexDirection: 'column' }}>
//           <Typography variant='contained'>{item.title}</Typography>
//           <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between' }}>
//           <Typography variant='h6'>{item.stats}</Typography>
//             <Typography variant='body2'> Units</Typography>
//           </Box>
//         </Box>
//       </Box>
//     </Grid>
//   ))
// }

const StatisticsCard = () => {
  return (
    <Card>
      <Card>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={7}>
            <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
              <Typography variant='h6' sx={{ marginTop: 6.5 }}>
                IDENTITY
              </Typography>
              {/* <Typography variant='body2'>
                Here, I focus on a range of items and features that we use in life without giving them a second thought
                such as Coca Cola, body muscles and holding ones own breath. Though, most of these notes are not
                fundamentally necessary, they are such that you can use them for a good laugh, at a drinks party or for
                picking up women or men.
              </Typography> */}

              <Divider sx={{  marginBottom: 6.75 }} />

              <Grid container spacing={4}>
                <Grid item xs={12} sm={5}>
                  <StyledBox>
                    <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                      {/* <LockOpenOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' /> */}
                      <Typography variant='body2'>Life Stage</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {/* <AccountOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' /> */}
                      {/* <Typography variant='body2'>Customer ID</Typography> */}
                      <Chip
                        label='ACTIVATED'
                        color='success'
                        sx={{
                          height: 24,
                          fontSize: '0.75rem',
                          textTransform: 'capitalize',
                          '& .MuiChip-label': { fontWeight: 500 }
                        }}
                      />
                    </Box>
                  </StyledBox>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                    {/* <StarOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' /> */}
                    <Typography variant='body2'>Customer ID</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* <TrendingUp sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' /> */}
                    <Typography variant='body2'>8</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant='h6' sx={{ marginTop: 6.5 }}>
                PROFILE
              </Typography>
              <Divider sx={{ marginBottom: 6.75 }} />

              <Grid container spacing={4}>
                <Grid item xs={12} sm={5}>
                  <StyledBox>
                    <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                      {/* <LockOpenOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' /> */}
                      <Typography variant='body2'>Contact Number</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {/* <AccountOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' /> */}
                      <Typography variant='body2'>27120034126</Typography>
                    </Box>
                  </StyledBox>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                    {/* <StarOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' /> */}
                    <Typography variant='body2'>Account Code</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* <TrendingUp sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' /> */}
                    <Typography variant='body2'>EKS001</Typography>
                  </Box>
                </Grid>
                <Grid item xs={12} sm={5}>
                  <StyledBox>
                    <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                      {/* <LockOpenOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' /> */}
                      <Typography variant='body2'>Month start Day</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      {/* <AccountOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' /> */}
                      <Typography variant='body2'>1</Typography>
                    </Box>
                  </StyledBox>
                </Grid>
                <Grid item xs={12} sm={7}>
                  <Box sx={{ mb: 6.75, display: 'flex', alignItems: 'center' }}>
                    {/* <StarOutline sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' /> */}
                    <Typography variant='body2'>Description</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    {/* <TrendingUp sx={{ color: 'primary.main', marginRight: 2.75 }} fontSize='small' /> */}
                    <Typography variant='body2'>Reliable Tracking and Transportation Services</Typography>
                  </Box>
                </Grid>
              </Grid>

              <Typography variant='h6' sx={{ marginTop: 6.5 }}>
                SIM ESTATE OVERVIEW
              </Typography>
              <Divider sx={{ marginBottom: 6.75 }} />

              <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
                <Grid container spacing={[5, 0]}>

                  <Grid item xs={12} sm={3} >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>Total SIMs</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Typography variant='h6'>245333</Typography>
                          <Typography variant='body2'> Units</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3} >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>Total Usage this Month</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Typography variant='h6'>127465</Typography>
                          <Typography variant='body2'> Units</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3} >
                    <Box  sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>SIMs Online</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Typography variant='h6'>109854</Typography>
                          <Typography variant='body2'> Units</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3} >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>SIMs Offline</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Typography variant='h6'>886627</Typography>
                          <Typography variant='body2'> Units</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>

              <Typography variant='h6' sx={{ marginTop: 6.5 }}>
                DEVICE ESTATE OVERVIEW
              </Typography>
              <Divider sx={{ marginBottom: 6.75 }} />

              <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
                <Grid container spacing={[5, 0]}>

                  <Grid item xs={12} sm={3} >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>Total Devices</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Typography variant='h6'>245333</Typography>
                          <Typography variant='body2'> Units</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3} >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>Over Deadline</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Typography variant='h6'>245333</Typography>
                          <Typography variant='body2'> Units</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={3} >
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>Acknowledged</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Typography variant='h6'>245333</Typography>
                          <Typography variant='body2'> Units</Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>

            </CardContent>
          </Grid>
          <Grid
            item
            sm={5}
            xs={12}
            sx={{ paddingTop: ['0 !important', '1.5rem !important'], paddingLeft: ['1.5rem !important', '0 !important'] }}
          >
            <CardContent
              sx={{
                height: '100%',
                display: 'flex',
                textAlign: 'center',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'action.hover',
                padding: theme => `${theme.spacing(18, 5, 16)} !important`
              }}
            >
              <Box>
                <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                  {/* <Typography variant='h6'>$</Typography> */}
                  <Typography variant='h6' sx={{ lineHeight: 1, fontWeight: 600, fontSize: '3.75rem !important' }}>
                    EKS
                  </Typography>
                  {/* <Typography variant='h6'>USD</Typography> */}
                </Box>
                {/* <Typography variant='body2' sx={{ mb: 13.75, display: 'flex', flexDirection: 'column' }}>
                  <span>5 Tips For Offshore</span>
                  <span>Software Development</span>
                </Typography>
                <Button variant='contained'>Contact Now</Button> */}
              </Box>
            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Card>
  )
}

export default StatisticsCard
