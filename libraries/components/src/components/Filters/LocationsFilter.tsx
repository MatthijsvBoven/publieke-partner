import { Box, Button, useMediaQuery, useTheme } from '@mui/material'
import { useIntl } from 'react-intl'
import { useStateToggle } from '../../utils/useStateToggle'
import { Modal } from '../Modal/Modal'
import { LocationButton, LocationButtons } from './LocationButtons'

export type LocationsFilterType = {
  locations: Array<LocationButton>
  handleFilter: (location?: string) => void
}

export const LocationsFilter = ({ locations, handleFilter }: LocationsFilterType) => {
  const { formatMessage } = useIntl()
  const theme = useTheme()
  const isMobileDown = useMediaQuery(theme.breakpoints.down('sm'))
  const {
    isOpen: filterModalIsOpen,
    handleClose: filterModalHandleClose,
    handleOpen: filterModalHandleOpen,
  } = useStateToggle()

  return isMobileDown ? (
    <Box>
      <Button variant="contained" onClick={filterModalHandleOpen}>
        {formatMessage({ id: 'filters.locations.open-mobile-modal' })}
      </Button>
      <Modal
        open={filterModalIsOpen}
        title={formatMessage({ id: 'filters.locations.modal.title' })}
        handleClose={filterModalHandleClose}
      >
        <LocationButtons locations={locations} handleFilter={handleFilter} />
      </Modal>
    </Box>
  ) : (
    <LocationButtons locations={locations} handleFilter={handleFilter} />
  )
}
