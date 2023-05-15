// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import Table from 'src/views/devices/Table'

const Devices = () => {
  return (
    <ApexChartWrapper>
        <Grid item xs={12}>
          <Table />
        </Grid>
    </ApexChartWrapper>
  )
}

export default Devices
