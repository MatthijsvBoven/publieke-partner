import { Box, Button, SxProps } from '@mui/material'
import { useIntl } from 'react-intl'
import { useEffect, useState } from 'react'

export type LocationButton = {
  id: number
  name: string
  isFiltered?: boolean
}

type LocationButtonsType = {
  locations: Array<LocationButton>
  handleFilter: (location?: string) => void
}

export const LocationButtons = ({ locations, handleFilter }: LocationButtonsType) => {
  const { formatMessage } = useIntl()
  const [Sx, setSx] = useState<SxProps>({})

  useEffect(() => {
    const isFilterApplied = locations.find((location) => location.isFiltered)
    setSx({
      color: !!isFilterApplied ? 'black' : 'white',
      bgcolor: !!isFilterApplied ? 'white' : 'primary',
    })
  }, [locations])

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 2, width: '100%' }}>
      <Button sx={Sx} variant="contained" onClick={() => handleFilter()}>
        {formatMessage({ id: 'filters.locations.all' })}
      </Button>
      {locations.map((location) => (
        <Button
          sx={{ color: location.isFiltered ? 'white' : 'black', bgcolor: location.isFiltered ? 'primary' : 'white' }}
          variant="contained"
          key={location.id}
          onClick={() => handleFilter(location.name)}
        >
          {location.name}
        </Button>
      ))}
    </Box>
  )
}
