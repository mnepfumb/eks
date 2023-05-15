// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import { useTheme } from '@mui/material/styles'

// ** Icons Imports
import EyeOutline from 'mdi-material-ui/EyeOutline'
import KeyOutline from 'mdi-material-ui/KeyOutline'
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'


const SessionRecords = () => {
  // ** Hook
  const theme = useTheme()

  // ** States
  const [values, setValues] = useState({
    newPassword: '',
    currentPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showCurrentPassword: false,
    showConfirmNewPassword: false
  })

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
    <form>
      <CardContent sx={{ paddingBottom: 0 }}>

        <Grid container spacing={12}>
          <Grid item
            sm={6}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
          <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2'>Number of sessions</Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
              <Typography variant='h5'>482</Typography>
              </Box>
              <Typography variant='caption'> Over the last 45 days 03:15:37</Typography>
            </Box>
          </Box>

          </Grid>

          <Grid item
            sm={6}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
          <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2'>Online Ratio</Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
              <Typography variant='h5'>80.9 %</Typography>
              </Box>
              <Typography variant='caption'> Over the last 45 days 03:15:37</Typography>
            </Box>
          </Box>

          </Grid>
        </Grid>

        <Grid container spacing={12}>
          <Grid
            item
            sm={4}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
          <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2'>Max Session Length</Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
              <Typography variant='h5'>1 day 00:00:00</Typography>
              </Box>
              <Typography variant='caption'>Longest session</Typography>
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
                <Typography variant='body2'>Mean Session Length</Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
                <Typography variant='h5'>01:49:02</Typography>
                </Box>
                <Typography variant='caption'>Average session length</Typography>
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
                <Typography variant='body2'>Median Session Length</Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
                <Typography variant='h5'>00:10:42</Typography>
                </Box>
                <Typography variant='caption'>Median session length</Typography>
              </Box>
            </Box>

          </Grid>
        </Grid>

        <Grid container spacing={12}>
          
          <Grid
            item
            sm={4}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
          <Box sx={{ mb: 3.5, display: 'flex', alignItems: 'flex-end',  }}>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Typography variant='body2'>Max Dwell Time</Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
              <Typography variant='h5'>2 days 15:59:25</Typography>
              </Box>
              <Typography variant='caption'>Longest time between sessions</Typography>
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
                <Typography variant='body2'>Mean Dwell Time</Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
                <Typography variant='h5'>00:25:48</Typography>
                </Box>
                <Typography variant='caption'>Average time between sessions</Typography>
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
                <Typography variant='body2'>Median Dwell Time</Typography>
                <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'start' }}>
                <Typography variant='h5'>00:00:02</Typography>
                </Box>
                <Typography variant='caption'>Median time between sessions</Typography>
              </Box>
            </Box>

          </Grid>
        </Grid>


        <Grid container spacing={12}>
              <Grid item
            sm={6}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
               
            <Box sx={{ mt: 1.75, display: 'flex', alignItems: 'center' }}>
              {/* <KeyOutline sx={{ marginRight: 3 }} /> */}
              <Typography variant='h6'>Session Duration</Typography>
            </Box>
              <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
                <CardHeader
                  title='Session length histogram'
                  titleTypographyProps={{
                    sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
                  }}
                />
                <Divider sx={{ marginBottom: 6.75 }} />
                <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
                  <ReactApexcharts type='bar' height={205} options={options} series={[{ data: [37, 57, 45, 75, 57, 40, 65] }]} />
                  <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
                    
                  </Box>
                </CardContent>
              </CardContent>

              </Grid>

              <Grid item
            sm={6}
            xs={12}
            sx={{ display: 'flex', marginTop: [7.5, 2.5], alignItems: 'center', justifyContent: 'center' }}
          >
                
              <Box sx={{ mt: 1.75, display: 'flex', alignItems: 'center' }}>
                {/* <KeyOutline sx={{ marginRight: 3 }} /> */}
                <Typography variant='h6'>Dwell Time</Typography>
              </Box>
              <CardContent sx={{ pt: theme => `${theme.spacing(3)} !important` }}>
                <CardHeader
                  title='Time between sessions'
                  titleTypographyProps={{
                    sx: { lineHeight: '2rem !important', letterSpacing: '0.15px !important' }
                  }}
                />
                <Divider sx={{ marginBottom: 6.75 }} />
                <CardContent sx={{ '& .apexcharts-xcrosshairs.apexcharts-active': { opacity: 0 } }}>
                  <ReactApexcharts type='bar' height={205} options={options} series={[{ data: [37, 57, 45, 75, 57, 40, 65] }]} />
                  <Box sx={{ mb: 7, display: 'flex', alignItems: 'center' }}>
                    
                  </Box>
                </CardContent>
              </CardContent>

              </Grid>
            </Grid>
          
      </CardContent>

      <Divider sx={{ marginBottom: 6.75 }} />

      <CardContent>
        <Box sx={{ mt: 1.75, display: 'flex', alignItems: 'center' }}>
          {/* <KeyOutline sx={{ marginRight: 3 }} /> */}
          <Typography variant='h6'>Session History</Typography>
        </Box>

        <TableContainer>
            <Table sx={{ minWidth: 800 }} aria-label='SIM cards table'>
                <TableHead>
                    <TableRow>
                    <TableCell>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>IP</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>Start</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>Stop</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>Duration</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>Dwell</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>Stop Cause</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>In</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>Out</Typography>
                    </TableCell>
                    <TableCell>
                        <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>Total</Typography>
                    </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>


                {rows.map(row => (
                    <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>


                            <TableCell sx={{ py: theme => `${theme.spacing(4)} !important` }}>
                                <Typography variant='caption'>{row.ip}</Typography>
                            </TableCell>

                            <TableCell   sx={{ py: theme => `${theme.spacing(4)} !important` }}>
                            <Typography variant='caption'>{row.Start}</Typography>
                            </TableCell>

                            <TableCell  sx={{ py: theme => `${theme.spacing(4)} !important` }}>
                                <Typography variant='caption'>{row.Stop}</Typography>
                            </TableCell>

                            <TableCell sx={{ py: theme => `${theme.spacing(4)} !important` }}>
                                <Typography variant='caption'>{row.Duration}</Typography>
                            </TableCell>

                            <TableCell sx={{ py: theme => `${theme.spacing(4)} !important` }}>
                                <Typography variant='caption'>{row.Dwell}</Typography>
                            </TableCell>

                            <TableCell sx={{ py: theme => `${theme.spacing(4)} !important` }}>
                                <Typography variant='caption'>{row.Stop_Cause}</Typography>
                            </TableCell>

                            <TableCell sx={{ py: theme => `${theme.spacing(4)} !important` }}>
                                <Typography variant='caption'>{row.In}</Typography>
                            </TableCell>

                            <TableCell sx={{ py: theme => `${theme.spacing(4)} !important` }}>
                                <Typography variant='caption'>{row.Out}</Typography>
                            </TableCell>

                            <TableCell sx={{ py: theme => `${theme.spacing(4)} !important` }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                  <Typography variant='caption'>{row.Total}</Typography>
                                </Box>
                            </TableCell>

                    </TableRow>


                ))}
                </TableBody>
            </Table>
        </TableContainer>

      </CardContent>
    </form>
  )
}

const rows = [
  {
      ip: '10.19.66.110',
      Start: '19 Apr 23 20:40:37',
      Stop: '20 Apr 23 02:07:34',
      Duration: '05:26:57',
      Dwell: '00:00:02',
      Stop_Cause: 'User-Request',
      In: '2.6 MB',
      Out: '3.5 MB',
      Total: '6.2 MB',
  },
  {
      ip: '10.19.66.110',
      Start: '19 Apr 23 08:30:15',
      Stop: '19 Apr 23 20:40:35',
      Duration: '12:10:20',
      Dwell: '00:00:23',
      Stop_Cause: 'User-Request',
      In: '6.1 MB',
      Out: '9.3 MB',
      Total: '15.4 MB',
  },
  {
      ip: '10.19.66.110',
      Start: '19 Apr 23 08:22:35',
      Stop: '19 Apr 23 08:29:52',
      Duration: '00:07:17',
      Dwell: '00:00:03',
      Stop_Cause: 'User-Request',
      In: '308 bytes',
      Out: '1.1 KB',
      Total: '1.4 KB',
  },
  {
      ip: '10.19.66.110',
      Start: '19 Apr 23 08:00:09',
      Stop: '19 Apr 23 08:22:32',
      Duration: '00:22:23',
      Dwell: '00:01:05',
      Stop_Cause: 'User-Request',
      In: '13.0 KB',
      Out: '7.3 KB',
      Total: '10.3 KB',
  },
]

export default SessionRecords
