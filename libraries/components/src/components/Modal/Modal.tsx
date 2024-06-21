import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  Drawer,
  SxProps,
  Theme,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { ReactNode } from 'react'
import { colors } from '../../theme'
import { Close } from '@mui/icons-material'

export interface ModalProps {
  open: boolean
  title: string
  children: ReactNode
  handleClose: () => void
  contentSx?: SxProps<Theme>
}

export const Modal = ({ open, children, handleClose, title, contentSx }: ModalProps) => {
  const theme = useTheme()
  const isLargeUp = useMediaQuery(theme.breakpoints.up('lg'))

  return isLargeUp ? (
    <Dialog
      data-testid="modal"
      sx={{
        '& .MuiPaper-root': {
          p: 3,
          width: 800,
          maxWidth: 800,
          maxHeight: 660,
          borderRadius: '12px',
        },
      }}
      onClose={handleClose}
      open={open}
    >
      <DialogTitle
        data-testid="modalTitle"
        sx={{ m: 0, pb: 2, px: 0, pt: 0, fontSize: '18px', fontWeight: 700, lineHeight: '28px' }}
        id="customized-dialog-title"
      >
        {title}
      </DialogTitle>
      <Close
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 24,
          top: 24,
          color: colors.grayScale.darker,
          cursor: 'pointer',
        }}
      />
      <Divider sx={{ borderColor: colors.v1.gray.lightest, borderBottomWidth: '2px', mb: '12px' }} />
      <DialogContent sx={[...(Array.isArray(contentSx) ? contentSx : [contentSx]), { py: 2, px: 0 }]}>
        {children}
      </DialogContent>
    </Dialog>
  ) : (
    <Drawer
      data-testid="modal"
      sx={{
        '& .MuiDrawer-paper': {
          p: 2,
          top: '33px',
          bottom: 0,
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          borderTopRightRadius: '12px',
          borderTopLeftRadius: '12px',
        },
      }}
      anchor="bottom"
      open={open}
      onClose={handleClose}
    >
      <DialogTitle
        data-testid="modalTitle"
        sx={{ m: 0, pb: 2, px: 0, pt: 0, fontSize: '18px', fontWeight: 600 }}
        id="customized-dialog-title"
      >
        {title}
      </DialogTitle>
      <Close
        aria-label="close"
        onClick={handleClose}
        sx={{
          position: 'absolute',
          right: 16,
          top: 16,
          color: colors.grayScale.darker,
          cursor: 'pointer',
        }}
      />
      <Divider sx={{ borderColor: colors.v1.gray.lightest, borderBottomWidth: '2px', mb: '12px' }} />
      <DialogContent sx={{ py: 0, px: 0 }}>{children}</DialogContent>
    </Drawer>
  )
}
