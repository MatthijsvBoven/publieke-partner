import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'

export type CategoryProps = {
  id: number
  name: string
}

type CategoriesFilterProps = {
  categories: Array<CategoryProps>
}

export const CategoriesFilter = ({ categories }: CategoriesFilterProps) => (
  <FormGroup>
    {categories.map((category) => (
      <FormControlLabel control={<Checkbox size="medium" />} label={category.name} key={category.id} />
    ))}
  </FormGroup>
)
