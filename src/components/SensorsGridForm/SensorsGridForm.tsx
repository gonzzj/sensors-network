import { FC } from 'react'
import { styled } from '@mui/material/styles'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import DeleteIcon from '@mui/icons-material/Delete'

interface SensorsGridFormProps {
  sensorGrid: string
  setSensorGrid: (value: string) => void
  threshold: number
  setThreshold: (value: number) => void
}

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

export const SensorsGridForm: FC<SensorsGridFormProps> = ({
  sensorGrid,
  setSensorGrid,
  threshold,
  setThreshold,
}) => {
  const handleUploadFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileReader = new FileReader()
    const files = e.target.files

    if (files) {
      fileReader.readAsText(files[0], 'UTF-8')
      fileReader.onload = (e) => {
        setSensorGrid((e.target?.result as string) || '')
      }
    }
  }

  return (
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
          justifyContent: 'space-between',
        }}
      >
        <Button
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          Upload file
          <VisuallyHiddenInput
            type="file"
            onChange={handleUploadFile}
            multiple
          />
        </Button>
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
            [ [23, 22, 22, "X", 30], [24, 23, "X", "X", 29], [22, 24, 25, 30,
            31], ["X", "X", 25, 31, "X"] ]
          </code>
        </Typography>
      </Alert>
    </>
  )
}
