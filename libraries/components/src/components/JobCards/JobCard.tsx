import { Button, Card, CardActions, CardContent, IconButton, Tooltip, Typography } from '@mui/material'
import type { StaticRequire } from 'next/dist/shared/lib/get-img-props'
import type { StaticImageData } from 'next/image'
import { useIntl } from 'react-intl'
import Image from 'next/image'
import { AccessTimeFilled, Euro, LocationOn, Work } from '@mui/icons-material'

interface JobCardProps {
  title: string
  company?: string
  city?: string
  hours?: string
  rate?: string
  category?: string
  state?: string
  image?: string | StaticRequire | StaticImageData
  imageAlt?: string
}

export const JobCard = ({
  title,
  company,
  city,
  hours,
  rate,
  category,
  state,
  image,
  imageAlt = 'Afbeelding van de opdrachtgever',
}: JobCardProps) => {
  const { formatMessage } = useIntl()

  return (
    <Card key={title}>
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        {!!image && (
          <Tooltip title={imageAlt as string}>
            <Image src={image} alt={imageAlt as string} width="200" height="200" priority />
          </Tooltip>
        )}
        {!!company && (
          <IconButton>
            <Work />
            <Typography>{company}</Typography>
          </IconButton>
        )}
        {!!city && (
          <IconButton>
            <LocationOn />
            <Typography>{city}</Typography>
          </IconButton>
        )}
        {!!hours && (
          <IconButton>
            <AccessTimeFilled />
            <Typography>{hours}</Typography>
          </IconButton>
        )}
        {!!rate && (
          <IconButton>
            <Euro />
            <Typography>{rate}</Typography>
          </IconButton>
        )}
        {!!category && <Button>{category}</Button>}
        {!!state && <Button>{state}</Button>}
      </CardContent>
      <CardActions>
        <Button>{formatMessage({ id: 'jobcards.action.button.label' })}</Button>
      </CardActions>
    </Card>
  )
}
