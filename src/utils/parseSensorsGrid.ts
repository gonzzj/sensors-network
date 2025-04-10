export const parseSensorsGrid = (data: string, threshold: number) => {
  let parsedGrid = []

  try {
    parsedGrid = JSON.parse(data)
  } catch {
    return {
      data,
      errorMsg: 'The sensors grid format is wrong',
    }
  }

  if (parsedGrid.length === 0) {
    return {
      data: parsedGrid,
      errorMsg: 'The sensors grid is empty',
    }
  }

  const lengthRow = parsedGrid[0].length
  for (const gridRow of parsedGrid) {
    if (gridRow.length !== lengthRow) {
      return {
        data: parsedGrid,
        errorMsg: 'The sensors grid has rows with different sizes',
      }
    }
  }

  if (!threshold) {
    return {
      data: parsedGrid,
      errorMsg: 'The threshold is empty',
    }
  }

  return {
    data: parsedGrid,
    errorMsg: '',
  }
}
