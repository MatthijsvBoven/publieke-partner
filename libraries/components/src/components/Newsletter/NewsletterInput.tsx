import { useIntl } from 'react-intl'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, FormControl, TextField, useMediaQuery, useTheme } from '@mui/material'

type Inputs = {
  email: string
}

const formControlStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: 3,
}

const textInputStyles = {
  textAlign: 'center',
  px: '5px',
  width: '100%',
}

export const NewsletterInput = () => {
  const { formatMessage } = useIntl()
  const theme = useTheme()
  const isMobileDown = useMediaQuery(theme.breakpoints.down('sm'))
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()

  return (
    <FormControl sx={{ flexDirection: isMobileDown ? 'column' : 'row', ...formControlStyles }}>
      <TextField
        sx={textInputStyles}
        placeholder={formatMessage({ id: 'newsletter.placeholder' })}
        helperText={
          errors.email?.type === 'required'
            ? formatMessage({ id: 'general.error.required' })
            : errors.email?.type === 'pattern'
              ? formatMessage({ id: 'general.error.email' })
              : undefined
        }
        {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
      />
      <Button sx={{ width: '100%', height: '55px' }} variant="actionButton" onClick={handleSubmit(onSubmit)}>
        {formatMessage({ id: 'newsletter.submit-button' })}
      </Button>
    </FormControl>
  )
}
