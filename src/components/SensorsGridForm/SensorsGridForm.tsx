import { FC } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import DeleteIcon from '@mui/icons-material/Delete'

interface SensorsGridFormProps {
  sensorGrid: string
  setSensorGrid: (value: string) => void
  threshold: number
  setThreshold: (value: number) => void
}

export const SensorsGridForm: FC<SensorsGridFormProps> = ({
  sensorGrid,
  setSensorGrid,
  threshold,
  setThreshold,
}) => (
  <>
    <Typography variant="h5">Sensors data</Typography>
    <TextField
      label="Sensors"
      multiline
      rows={8}
      value={sensorGrid}
      onChange={(e) => setSensorGrid(e.target.value)}
      helperText="A string representing an NxM grid, where each cell can be an integer representing the temperature of that sensor or an X if the sensor is down"
    />
    <Box
      sx={{
        mt: -2,
        mb: 2,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
      }}
    >
      <Button
        color="error"
        startIcon={<DeleteIcon />}
        onClick={() => setSensorGrid('[]')}
      >
        Clear grid
      </Button>
    </Box>
    <TextField
      label="Threshold"
      type="number"
      helperText="A number T that represents the stability threshold"
      value={threshold}
      onChange={(e) => setThreshold(parseInt(e.target.value))}
    />
    <Alert severity="info">
      <Typography variant="caption">
        Example sensors grid: <br />
        <code>
          [ [23, 22, 22, "X", 30], [24, 23, "X", "X", 29], [22, 24, 25, 30, 31],
          ["X", "X", 25, 31, "X"] ]
        </code>
      </Typography>
    </Alert>
  </>
)
