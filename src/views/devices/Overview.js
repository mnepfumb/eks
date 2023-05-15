// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Divider from '@mui/material/Divider'
import Chip from '@mui/material/Chip'
import CardHeader from '@mui/material/CardHeader'
import { useTheme } from '@mui/material/styles'
import LinearProgress from '@mui/material/LinearProgress'
import WeeklyOverview from 'src/views/dashboard/WeeklyOverview'
import Link from '@mui/material/Link'
import Alert from '@mui/material/Alert'
import Select from '@mui/material/Select'
import { styled } from '@mui/material/styles'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import AlertTitle from '@mui/material/AlertTitle'
import IconButton from '@mui/material/IconButton'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Button from '@mui/material/Button'

// ** Icons Imports
import Close from 'mdi-material-ui/Close'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

const ImgStyled = styled('img')(({ theme }) => ({
  width: 120,
  height: 120,
  marginRight: theme.spacing(6.25),
  borderRadius: theme.shape.borderRadius
}))

const ButtonStyled = styled(Button)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    textAlign: 'center'
  }
}))

const ResetButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4.5),
  [theme.breakpoints.down('sm')]: {
    width: '100%',
    marginLeft: 0,
    textAlign: 'center',
    marginTop: theme.spacing(4)
  }
}))

// Styled Box component
const StyledBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}))

const Overview = () => {

  // ** Hook
  const theme = useTheme()

  // ** State
  const [openAlert, setOpenAlert] = useState(true)
  const [imgSrc, setImgSrc] = useState('/images/avatars/1.png')

  const onChange = file => {
    const reader = new FileReader()
    const { files } = file.target
    if (files && files.length !== 0) {
      reader.onload = () => setImgSrc(reader.result)
      reader.readAsDataURL(files[0])
    }
  }


  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    plotOptions: {
      bar: {
        borderRadius: 9,
        distributed: true,
        columnWidth: '40%',
        endingShape: 'rounded',
        startingShape: 'rounded'
      }
    },
    stroke: {
      width: 2,
      colors: [theme.palette.background.paper]
    },
    legend: { show: false },
    grid: {
      strokeDashArray: 7,
      padding: {
        top: -1,
        right: 0,
        left: -12,
        bottom: 5
      }
    },
    dataLabels: { enabled: false },
    colors: [
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.background.default,
      theme.palette.primary.main,
      theme.palette.background.default,
      theme.palette.background.default
    ],
    states: {
      hover: {
        filter: { type: 'none' }
      },
      active: {
        filter: { type: 'none' }
      }
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      tickPlacement: 'on',
      labels: { show: false },
      axisTicks: { show: false },
      axisBorder: { show: false }
    },
    yaxis: {
      show: true,
      tickAmount: 4,
      labels: {
        offsetX: -17,
        formatter: value => `${value > 999 ? `${(value / 1000).toFixed(0)}` : value}k`
      }
    }
  }

  return (
    
    <Card>
      <Card>
        <Grid container spacing={12}>
          <Grid
            item
            sm={3.5}
            // xs={2}
            // sx={{ paddingTop: ['0 !important', '1.5rem !important'], paddingLeft: ['1.5rem !important', '0 !important'] }}
          >
            <CardContent
              sx={{
                height: '100%',
                display: 'flex',
                // textAlign: 'center',
                // alignItems: 'center',
                // justifyContent: 'center',
                backgroundColor: 'action.hover',
                padding: theme => `${theme.spacing(18, 5, 16)} !important`
              }}
            >
              <Box>
                <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'left',  }}>
                  <Typography variant='h6' sx={{ lineHeight: 1, fontWeight: 600, fontSize: '3.75rem !important' }}>
                    EKS
                  </Typography>
                  
                </Box>

                <Divider sx={{ marginBottom: 6.75 }} />

                <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
                        <Typography variant='h5'>Device</Typography>
                        </Box>
                        <Typography variant='body2'>Communication</Typography>
                        
                        <Chip
                          label='ACKNOWLEDGED'
                          color='info'
                          sx={{
                            height: 24,
                            fontSize: '0.75rem',
                            textTransform: 'capitalize',
                            '& .MuiChip-label': { fontWeight: 500 }
                          }}
                        />
                        <Typography variant='caption'>Data Report 1 year ago (01 Feb 2022, 13:49:22)</Typography>

                        <Box sx={{ minWidth: 300,  flexDirection: 'column' }}>
                          <Typography variant='body2'>Contract: Global Standard</Typography>
                          <LinearProgress color='primary' value={75} variant='determinate' />
                        </Box>
                      </Box>
                </Box>

                <Divider sx={{ marginBottom: 6.75 }} />

                <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>Last Message</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
                        <Typography variant='h5'>Device Data Report</Typography>
                        </Box>
                        <Typography variant='caption'>Received: 1 year ago (01 Feb 2022, 13:49:22)</Typography>
                      </Box>
                </Box>

                <Divider sx={{ marginBottom: 6.75 }} />

                {/* <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>Latest IP Address</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
                        <Typography variant='h6'>10.19.66.110</Typography>
                        </Box>
                        <Typography variant='caption'> Allocated IPs: 10.19.66.110</Typography>
                        <Typography variant='caption'> Fixed IP Pool: New Internet Allowed (Wild West)</Typography>
                      </Box>
                </Box> */}

              </Box>
            </CardContent>
          </Grid>
          
          <Grid item xs={12} sm={8}>
            <CardContent sx={{ padding: theme => `${theme.spacing(3.25, 5.75, 6.25)} !important` }}>
              <Typography variant='body2'  sx={{ marginTop: 6.5 }}>UID</Typography>
              <Typography variant='h6'>
                354018115928362
              </Typography>
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
              <Divider sx={{  marginBottom: 6.75 }} />

              <Grid container spacing={4}>
                <Grid item xs={12} sm={5}>
                  {/* <StyledBox> */}
                  <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>Name</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Typography variant='h6'>...</Typography>
                          {/* <Typography variant='body2'> Units</Typography> */}
                        </Box>
                      </Box>
                    </Box>

                    <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>IMEI</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Typography variant='h6'>354018115928362</Typography>
                          {/* <Typography variant='body2'> Units</Typography> */}
                        </Box>
                      </Box>
                    </Box>
                    
                    <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>Linked SIM</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Typography variant='h6'>279602010510068</Typography>
                          {/* <Typography variant='body2'> Units</Typography> */}
                        </Box>
                      </Box>
                    </Box>
                    
                    <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Typography variant='body2'>Data Lens</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                        <Typography variant='h6'>Teltonika: FMB1-Series</Typography>
                        </Box>
                      </Box>
                    </Box>

                  {/* </StyledBox> */}
                </Grid>
              </Grid>

              <Divider sx={{  marginBottom: 6.75 }} />

               
              <Box sx={{ mt: 1.75, display: 'flex', alignItems: 'center' }}>
                <Typography variant='h6'>Data Focus</Typography>
              </Box>
              <Grid container spacing={12}>
                <Grid
                  item
                  sm={4}
                  xs={12}
                  sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
                >
                <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='body2'>Altitude</Typography>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
                    <Typography variant='h5'>0</Typography>
                    </Box>
                    <Typography variant='caption'>1 year, 2 months ago</Typography>
                  </Box>
                </Box>

                </Grid>
                  <Grid
                    item
                    sm={4}
                    xs={12}
                    sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
                  >
                  <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant='body2'>Satellites</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
                      <Typography variant='h5'>0</Typography>
                      </Box>
                      <Typography variant='caption'>1 year, 2 months ago</Typography>
                    </Box>
                  </Box>

                </Grid>

                <Grid
                  item
                  sm={4}
                  xs={12}
                  sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
                >
                  <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography variant='body2'>GPS Speed</Typography>
                      <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
                      <Typography variant='h5'>0 km/h</Typography>
                      </Box>
                      <Typography variant='caption'>1 year, 2 months ago</Typography>
                    </Box>
                  </Box>

                </Grid>
              </Grid>


            </CardContent>
          </Grid>
        </Grid>
      </Card>
    </Card>
  )
}

export default Overview
