import { Box, Checkbox, FormControlLabel, FormGroup, Typography } from '@mui/material'
import { useIntl } from 'react-intl'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { useState } from 'react'

export type FilterProps = {
  id: number
  name: string
}

type FiltersProps = {
  title: string
  handleFilter: (filter: FilterProps) => void
  filters: Array<FilterProps>
}

export const Filters = ({ title, handleFilter, filters }: FiltersProps) => {
  const { formatMessage } = useIntl()
  const [showMore, setShowMore] = useState(false)

  return (
    <Box sx={{ display: 'grid', alignItems: 'flex-start', justifyContent: 'space-between', mb: 3 }}>
      <Typography variant="h5">{title}</Typography>
      {filters.length <= 5 ? (
        <FormGroup>
          {filters.map((filter) => (
            <FormControlLabel
              control={<Checkbox size="small" onClick={() => handleFilter(filter)} />}
              label={filter.name}
              key={filter.id}
              sx={{ display: 'flex' }}
            />
          ))}
        </FormGroup>
      ) : (
        <FormGroup>
          {filters.slice(0, 5).map((filter) => (
            <FormControlLabel
              control={<Checkbox size="small" onClick={() => handleFilter(filter)} />}
              label={filter.name}
              key={filter.id}
              sx={{ display: 'flex' }}
            />
          ))}
          {showMore &&
            filters
              .slice(5)
              .map((filter) => (
                <FormControlLabel
                  control={<Checkbox size="small" onClick={() => handleFilter(filter)} />}
                  label={filter.name}
                  key={filter.id}
                  sx={{ display: 'flex' }}
                />
              ))}
          <FormControlLabel
            control={showMore ? <ExpandLess /> : <ExpandMore />}
            label={formatMessage({ id: showMore ? 'filters.show.less.button' : 'filters.show.more.button' })}
            onClick={() => setShowMore(!showMore)}
            sx={{ display: 'flex', ml: -0.5, gap: 0.8, color: 'primary.main' }}
          />
        </FormGroup>
      )}
    </Box>
  )
}
