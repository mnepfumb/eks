// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import LinearProgress from '@mui/material/LinearProgress'
import Avatar from '@mui/material/Avatar'
import { useRouter } from 'next/router'


// ** Next Imports
import Link from 'next/link'

const rows = [
    {
        name: 'HG09HRGP',
        msisdn: '279602007120376',
        ip: '10.19.66.110',
        imei: '352093080389504',
        imsi: '655016002140339',
        iccid: '89600000000021406393',
        mtd: '139.6 MB',
        processed: '4 minutes ago',
    },
    {
        name: 'HG09HRGP',
        msisdn: '279602007120376',
        ip: '10.19.66.110',
        imei: '352093080389504',
        imsi: '655016002140339',
        iccid: '89600000000021406393',
        mtd: '139.6 MB',
        processed: '4 minutes ago',
    }
]

const statusObj = {
    applied: { color: 'info' },
    rejected: { color: 'error' },
    current: { color: 'primary' },
    resigned: { color: 'warning' },
    professional: { color: 'success' }
}

const DashboardTable = () => {
    const router = useRouter()
    
    return (
        <Card>
            <TableContainer>
                <Table sx={{ minWidth: 800 }} aria-label='SIM cards table'>
                    <TableHead>
                        <TableRow>
                        <TableCell>
                            <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>Name</Typography>
                            <Typography variant='caption'>MSISDN</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>MNO</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>IP</Typography>
                            <Typography variant='caption'>IMEI</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>IMSI</Typography>
                            <Typography variant='caption'>ICCID</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>State</Typography>
                            <Typography variant='caption'>Budget Usage</Typography>
                        </TableCell>
                        <TableCell>
                            <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>MTD</Typography>
                            <Typography variant='caption'>Processed</Typography>
                        </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>


                    {rows.map(row => (
                        <TableRow hover key={row.name} onClick={()=> router.push(`/sims/details`)} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>


                                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                                    <Typography variant='caption'>{row.msisdn}</Typography>
                                </Box>
                                </TableCell>

                                <TableCell>
                                    <Avatar
                                    variant='rounded'
                                    sx={{
                                    mr: 3,
                                    width: 40,
                                    height: 40,

                                    // backgroundColor: theme => `rgba(${theme.palette.customColors.main}, 0.04)`
                                    }}
                                    >
                                    <img src='/eks/images/vodacom.png' alt='{item.title}' height={20} />
                                    </Avatar>
                                </TableCell>

                                <TableCell  sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.ip}</Typography>
                                    <Typography variant='caption'>{row.imei}</Typography>
                                </Box>
                                </TableCell>

                                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.imsi}</Typography>
                                    <Typography variant='caption'>{row.iccid}</Typography>
                                </Box>
                                </TableCell>

                                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                                <Box sx={{display: 'flex',  alignItems: 'center',}}>
                                <Avatar
                                    variant='rounded'
                                    sx={{
                                    mr: 3,
                                    width: 44,
                                    height: 44,
                                    boxShadow: 3,
                                    color: 'common.white',
                                    backgroundColor: 'success.main'
                                    }}
                                >
                                    A
                                </Avatar>
                                {/* <Chip
                                    label='A'
                                    color='success'
                                    sx={{
                                    height: 34,
                                    fontSize: '1.2rem',
                                    textTransform: 'capitalize',
                                    '& .MuiChip-label': { fontWeight: 900 }
                                    }}
                                /> */}
                                    <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                                    <Typography variant='caption'>Remaining:    100mb</Typography>
                                    <LinearProgress color='primary' value={75} variant='determinate' />
                                    <Typography variant='caption' >Monthly:     1000mb</Typography>
                                    </Box>
                                </Box>
                                </TableCell>

                                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.mtd}</Typography>
                                    <Typography variant='caption'>{row.processed}</Typography>
                                </Box>
                                {/* <Chip
                                    label={row.status}
                                    color={statusObj[row.status].color}
                                    sx={{
                                    height: 24,
                                    fontSize: '0.75rem',
                                    textTransform: 'capitalize',
                                    '& .MuiChip-label': { fontWeight: 500 }
                                    }}
                                /> */}
                                </TableCell>


                        </TableRow>


                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Card>
    )
}

export default DashboardTable
