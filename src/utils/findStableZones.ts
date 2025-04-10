import { SensorsGrid } from '../types/SensorsGrid'
import { StableZone } from '../types/StableZone'

export const findStableZones = (
  grid: SensorsGrid,
  threshold: number
): Array<StableZone> => {
  const DOWN_SENSOR_NODE = 'X'
  const rows = grid.length
  const cols = grid[0].length
  const visited = Array.from({ length: rows }, () => Array(cols).fill(false))
  const results = []

  const directions = [
    [-1, 0], // up
    [1, 0], // down
    [0, -1], // left
    [0, 1], // right
  ]

  const searchZoneByBFS = (startRow: number, startCol: number) => {
    const queue = [[startRow, startCol]]
    visited[startRow][startCol] = true

    const node = grid[startRow][startCol] as number
    let size = 1
    let sumTemp = node
    let min = node
    let max = node

    while (queue.length > 0) {
      const [row, col] = queue.shift() as [r: number, c: number]

      for (const [directionRow, directionCol] of directions) {
        const neighborRow = row + directionRow
        const neighborCol = col + directionCol

        if (
          isInBounds(rows, cols, neighborRow, neighborCol) &&
          !visited[neighborRow][neighborCol] &&
          grid[neighborRow][neighborCol] !== DOWN_SENSOR_NODE
        ) {
          const neighborNode = grid[neighborRow][neighborCol]
          min = min > neighborNode ? neighborNode : min
          max = max < neighborNode ? neighborNode : max

          if (max - min <= threshold) {
            visited[neighborRow][neighborCol] = true
            queue.push([neighborRow, neighborCol])
            sumTemp += neighborNode
            size++
          }
        }
      }
    }

    const avg_temp = (sumTemp / size).toFixed(2)

    return { size, avg_temp }
  }

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (!visited[r][c] && grid[r][c] !== DOWN_SENSOR_NODE) {
        const zoneData = searchZoneByBFS(r, c)

        if (zoneData.size > 1) {
          results.push(zoneData)
        }
      }
    }
  }

  return results
}

const isInBounds = (
  rows: number,
  cols: number,
  neighborRow: number,
  neighborCol: number
) =>
  neighborRow >= 0 &&
  neighborRow < rows &&
  neighborCol >= 0 &&
  neighborCol < cols
