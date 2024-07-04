import { useIntl } from 'react-intl'
import { BoxPage } from '../components/BoxPage/BoxPage.tsx'
import { CategoriesFilter, JobCard, LocationsFilter } from '@publiekepartner/components'
import { Locations } from '../mockdata/Locations.ts'
import { useState } from 'react'
import { LocationButton } from '@publiekepartner/components'
import { Categories } from '../mockdata/Categories.ts'
import { Grid } from '@mui/material'
import { Jobs } from '../mockdata/Jobs.ts'

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
      <Grid container spacing={2}>
        <Grid item xs={6} sm={4} md={3} lg={3}>
          <CategoriesFilter categories={Categories} />
        </Grid>
        <Grid item xs={6} sm={8} md={9} lg={9}>
          <LocationsFilter locations={LocationsData} handleFilter={setFilters} />
        </Grid>
        {Jobs.map((Job) => (
          <Grid item key={Job.title} xs={12} sm={6} md={6} lg={6}>
            <JobCard {...Job} />
          </Grid>
        ))}
      </Grid>
    </BoxPage>
  )
}

export default Index
