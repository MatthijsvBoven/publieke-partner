import { useIntl } from 'react-intl'
import { BoxPage } from '../components/BoxPage/BoxPage.tsx'
import { LocationsFilter } from '@publiekepartner/components'
import { Locations } from '../mockdata/Locations.ts'
import { useState } from 'react'
import { LocationButton } from '@publiekepartner/components'

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
      <LocationsFilter locations={LocationsData} handleFilter={setFilters} />
    </BoxPage>
  )
}

export default Index
