import { useIntl } from 'react-intl'
import { BoxPage } from '../components/BoxPage/BoxPage.tsx'
import { CategoriesFilter, LocationsFilter } from '@publiekepartner/components'
import { Locations } from '../mockdata/Locations.ts'
import { useState } from 'react'
import { LocationButton } from '@publiekepartner/components'
import { Categories } from '../mockdata/Categories.ts'
import { Box } from '@mui/material'

const boxStyles = {
  display: 'flex',
  justifyContent: 'start',
  alignItems: 'start',
  gap: 4,
}

const Index = () => {
  const [FilteredLocations, setFilteredLocations] = useState<Array<string>>([])
  const [LocationsData, setLocationsData] = useState<Array<LocationButton>>(Locations)
  const { formatMessage } = useIntl()

  const setFilters = async (location?: string) => {
    if (!location) {
      setFilteredLocations([])
      LocationsData.forEach((LocationsMock) => (LocationsMock.isFiltered = false))
      setLocationsData([...LocationsData])
      return
    }
    const isFiltered = FilteredLocations.includes(location)
    if (!isFiltered) {
      setFilteredLocations([...FilteredLocations, location])
      const locationButton = LocationsData.find((Location) => Location.name === location)
      if (locationButton) locationButton.isFiltered = true
      setLocationsData([...LocationsData])
    } else {
      setFilteredLocations(FilteredLocations.filter((Location) => Location !== location))
      const locationButton = LocationsData.find((Location) => Location.name === location)
      if (locationButton) locationButton.isFiltered = false
      setLocationsData([...LocationsData])
    }
  }

  return (
    <BoxPage
      seo={{
        title: formatMessage({ id: 'homepage.seo.title' }),
        description: formatMessage({ id: 'homepage.seo.description' }),
      }}
      title={formatMessage({ id: 'homepage.title' })}
    >
      <Box sx={boxStyles}>
        <CategoriesFilter categories={Categories} />
        <LocationsFilter locations={LocationsData} handleFilter={setFilters} />
      </Box>
    </BoxPage>
  )
}

export default Index
