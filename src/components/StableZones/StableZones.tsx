import { FC } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Alert from '@mui/material/Alert'
import { findStableZones } from '../../utils/findStableZones'
import { parseSensorsGrid } from '../../utils/parseSensorsGrid'

interface StableZonesProps {
  data: string
  threshold: number
}

export const StableZones: FC<StableZonesProps> = ({ data, threshold }) => {
  const sensorGrid = parseSensorsGrid(data.replace(/'/g, '"'), threshold)

  return (
    <>
      <Typography variant="h5">Stable zones output</Typography>
      {!sensorGrid.errorMsg ? (
        <Box
          minHeight={260}
          sx={{
            backgroundColor: '#1e1e1e',
            color: '#dcdcdc',
            padding: '15px',
            borderRadius: 1,
            fontFamily: 'monospace',
            whiteSpace: 'pre-wrap',
            overflowX: 'auto',
            maxHeight: '480px',
          }}
        >
          {JSON.stringify(findStableZones(sensorGrid.data, threshold), null, 2)}
        </Box>
      ) : (
        <Alert severity="error">{sensorGrid.errorMsg}</Alert>
      )}
    </>
  )
}
