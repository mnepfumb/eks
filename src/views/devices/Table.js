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
import Avatar from '@mui/material/Avatar'
import { useRouter } from 'next/router'

const rows = [
  {
    age: 27,
    status: 'current',
    date: '09/27/2018',
    name: 'Sally Quinn',
    salary: '$19586.23',
    email: 'eebsworth2m@sbwire.com',
    designation: 'Human Resources Assistant'
  },
  {
    age: 61,
    date: '09/23/2016',
    salary: '$23896.35',
    status: 'professional',
    name: 'Margaret Bowers',
    email: 'kocrevy0@thetimes.co.uk',
    designation: 'Nuclear Power Engineer'
  },
  {
    age: 59,
    date: '10/15/2017',
    name: 'Minnie Roy',
    status: 'rejected',
    salary: '$18991.67',
    email: 'ediehn6@163.com',
    designation: 'Environmental Specialist'
  },
  {
    age: 30,
    date: '06/12/2018',
    status: 'resigned',
    salary: '$19252.12',
    name: 'Ralph Leonard',
    email: 'dfalloona@ifeng.com',
    designation: 'Sales Representative'
  },
  {
    age: 66,
    status: 'applied',
    date: '03/24/2018',
    salary: '$13076.28',
    name: 'Annie Martin',
    designation: 'Operator',
    email: 'sganderton2@tuttocitta.it'
  },
  {
    age: 33,
    date: '08/25/2017',
    salary: '$10909.52',
    name: 'Adeline Day',
    status: 'professional',
    email: 'hnisius4@gnu.org',
    designation: 'Senior Cost Accountant'
  },
  {
    age: 61,
    status: 'current',
    date: '06/01/2017',
    salary: '$17803.80',
    name: 'Lora Jackson',
    designation: 'Geologist',
    email: 'ghoneywood5@narod.ru'
  },
  {
    age: 22,
    date: '12/03/2017',
    salary: '$12336.17',
    name: 'Rodney Sharp',
    status: 'professional',
    designation: 'Cost Accountant',
    email: 'dcrossman3@google.co.jp'
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
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>Unique ID</Typography>
                <Typography variant='caption'>Serial Number</Typography>
              </TableCell>
              <TableCell>Name</TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>Communication State</Typography>
                <Typography variant='caption'>Contract</Typography>
              </TableCell>
              <TableCell>
                <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>State</Typography>
                <Typography variant='caption'>Last Seen</Typography>
              </TableCell>
              <TableCell>Data Lens</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} onClick={()=> router.push(`/devices/details`)} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell sx={{ py: theme => `${theme.spacing(5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      width: 100,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>                <TableCell sx={{ py: theme => `${theme.spacing(5)} !important` }}>
                  <Box sx={{display: 'flex',  alignItems: 'center',}}>
                  <Avatar
                    variant='rounded'
                    sx={{
                      mr: 3,
                      width: 34,
                      height: 34,
                      boxShadow: 3,
                      color: 'common.white',
                      backgroundColor: 'success.main'
                    }}
                  >
                    A
                  </Avatar>
                    <Box sx={{ minWidth: 85, display: 'flex', flexDirection: 'column' }}>
                      <Typography variant='caption'>Remaining:    100mb</Typography>
                      <Typography variant='caption' >Monthly:     1000mb</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>{row.name}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
