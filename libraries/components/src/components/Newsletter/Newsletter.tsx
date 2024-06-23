import { Box, IconButton, Typography, useMediaQuery, useTheme } from '@mui/material'
import { useIntl } from 'react-intl'
import { Mail } from '@mui/icons-material'
import { Modal } from '../Modal/Modal'
import { useStateToggle } from '../../utils/useStateToggle'
import { NewsletterInput } from './NewsletterInput'

export const Newsletter = () => {
  const { formatMessage } = useIntl()
  const {
    isOpen: newsletterModalIsOpen,
    handleClose: newsletterModalHandleClose,
    handleOpen: newsletterModalHandleOpen,
  } = useStateToggle()
  const theme = useTheme()
  const isMobileDown = useMediaQuery(theme.breakpoints.down('sm'))

  return isMobileDown ? (
    <Box sx={{ mt: 1, mb: 1 }}>
      <IconButton
        size="large"
        aria-label={formatMessage({ id: 'newsletter.submit-button' })}
        aria-controls="modal-newsletter"
        aria-haspopup="true"
        onClick={newsletterModalHandleOpen}
        color="inherit"
      >
        <Mail color="primary" />
      </IconButton>
      <Modal
        open={newsletterModalIsOpen}
        title={formatMessage({ id: 'newsletter.modal.title' })}
        handleClose={newsletterModalHandleClose}
      >
        <NewsletterInput />
      </Modal>
    </Box>
  ) : (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 6, mb: 1, mt: 1 }}>
      <Typography variant="h2">{formatMessage({ id: 'newsletter.title' })}</Typography>
      <NewsletterInput />
    </Box>
  )
}
