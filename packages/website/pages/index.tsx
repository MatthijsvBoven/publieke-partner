import { useIntl } from 'react-intl'
import { BoxPage } from '../components/BoxPage/BoxPage.tsx'
import { FilterProps, Filters, JobCard, Modal } from '@publiekepartner/components'
import { Locations } from '../mockdata/Locations.ts'
import { Categories } from '../mockdata/Categories.ts'
import { Box, Grid, IconButton, useMediaQuery, useTheme } from '@mui/material'
import { Jobs } from '../mockdata/Jobs.ts'
import { useState } from 'react'
import { useStateToggle } from '@publiekepartner/components/src/utils/useStateToggle.ts'
import { Tune } from '@mui/icons-material'

const Index = () => {
  const { formatMessage } = useIntl()
  const [FilteredLocations, setFilteredLocations] = useState<Array<FilterProps>>([])
  const [FilteredCategories, setFilteredCategories] = useState<Array<FilterProps>>([])
  const theme = useTheme()
  const isMobileDown = useMediaQuery(theme.breakpoints.down('sm'))
  const {
    isOpen: filtersModalIsOpen,
    handleClose: filtersModalHandleClose,
    handleOpen: filtersModalHandleOpen,
  } = useStateToggle()

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

  const filters = (
    <Box>
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
    </Box>
  )

  return (
    <BoxPage
      seo={{
        title: formatMessage({ id: 'homepage.seo.title' }),
        description: formatMessage({ id: 'homepage.seo.description' }),
      }}
      title={formatMessage({ id: 'homepage.title' })}
    >
      <Grid container spacing={2}>
        {isMobileDown ? (
          <Grid item sm={12}>
            <IconButton
              size="large"
              aria-label={formatMessage({ id: 'filters.modal.title' })}
              aria-controls="modal-filters"
              aria-haspopup="true"
              onClick={filtersModalHandleOpen}
              color="inherit"
            >
              <Tune color="primary" />
            </IconButton>
            <Modal
              open={filtersModalIsOpen}
              title={formatMessage({ id: 'filters.modal.title' })}
              handleClose={filtersModalHandleClose}
            >
              {filters}
            </Modal>
          </Grid>
        ) : (
          <Grid item xs={6} sm={4} md={4} lg={4}>
            {filters}
          </Grid>
        )}
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
