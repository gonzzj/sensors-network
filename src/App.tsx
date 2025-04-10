import { useState } from 'react'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { SensorsGridForm, StableZones } from './components'

function App() {
  const [sensorGrid, setSensorGrid] = useState<string>('[]')
  const [threshold, setThreshold] = useState<number>(2)

  return (
    <Container maxWidth="lg">
      <Typography variant="h2" mt={4}>
        Sensors Network
      </Typography>
      <Typography variant="subtitle1" mb={3}>
        System to monitor a network of sensors distributed in a grid. Each
        sensor reports temperature data, but due to failures, some sensors do
        not report.
      </Typography>
      <Grid container spacing={6}>
        <Grid container spacing={3} size={6} direction="column">
          <SensorsGridForm
            sensorGrid={sensorGrid}
            setSensorGrid={setSensorGrid}
            threshold={threshold}
            setThreshold={setThreshold}
          />
        </Grid>
        <Grid container spacing={2} size={6} direction="column">
          <StableZones data={sensorGrid} threshold={threshold} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default App
