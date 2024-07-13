import { useIntl } from 'react-intl'
import { BoxPage } from '../components/BoxPage/BoxPage.tsx'
import { FilterProps, Filters, JobCard } from '@publiekepartner/components'
import { Locations } from '../mockdata/Locations.ts'
import { Categories } from '../mockdata/Categories.ts'
import { Grid } from '@mui/material'
import { Jobs } from '../mockdata/Jobs.ts'
import { useState } from 'react'

const Index = () => {
  const { formatMessage } = useIntl()
  const [FilteredLocations, setFilteredLocations] = useState<Array<FilterProps>>([])
  const [FilteredCategories, setFilteredCategories] = useState<Array<FilterProps>>([])

  const filterCategories = async (category: FilterProps) => {
    const isFiltered = FilteredCategories.includes(category)
    if (!isFiltered) {
      setFilteredCategories([...FilteredCategories, category])
    } else {
      setFilteredCategories(FilteredCategories.filter((Category) => Category !== category))
    }
  }

  const filterLocations = async (location: FilterProps) => {
    const isFiltered = FilteredLocations.includes(location)
    if (!isFiltered) {
      setFilteredLocations([...FilteredLocations, location])
    } else {
      setFilteredLocations(FilteredLocations.filter((Location) => Location !== location))
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
        <Grid item xs={6} sm={4} md={4} lg={4}>
          <Filters
            title={formatMessage({ id: 'filters.categories.title' })}
            handleFilter={filterCategories}
            filters={Categories}
          />
          <Filters
            title={formatMessage({ id: 'filters.locations.title' })}
            handleFilter={filterLocations}
            filters={Locations}
          />
        </Grid>
        {Jobs.map((Job) => (
          <Grid item key={Job.title} xs={12} sm={8} md={8} lg={8}>
            <JobCard {...Job} />
          </Grid>
        ))}
      </Grid>
    </BoxPage>
  )
}

export default Index
