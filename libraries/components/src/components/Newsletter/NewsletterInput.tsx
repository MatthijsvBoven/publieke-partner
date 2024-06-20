import { useIntl } from 'react-intl'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Button, FormControl, TextField, useMediaQuery, useTheme } from '@mui/material'

type Inputs = {
  email: string
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
    <FormControl
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: isMobileDown ? 'column' : 'row',
        gap: 1,
      }}
    >
      <TextField
        sx={{
          textAlign: 'center',
          px: '5px',
          width: '100%',
        }}
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
      <Button sx={{ width: '100%' }} variant={'actionButton'} onClick={handleSubmit(onSubmit)}>
        {formatMessage({ id: 'newsletter.submit-button' })}
      </Button>
    </FormControl>
  )
}
