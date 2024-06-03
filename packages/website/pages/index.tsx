import { useIntl } from 'react-intl'
import { BoxPage } from '../components/BoxPage/BoxPage.tsx'

const Index = () => {
  const { formatMessage } = useIntl()

  return (
    <BoxPage
      seo={{
        title: formatMessage({ id: 'homepage.seo.title' }),
        description: formatMessage({ id: 'homepage.seo.description' }),
      }}
      title={formatMessage({ id: 'homepage.title' })}
    />
  )
}

export default Index
