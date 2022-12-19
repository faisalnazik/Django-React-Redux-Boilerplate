import PropTypes from 'prop-types'
// form
import { useFormContext, Controller } from 'react-hook-form'
// @mui
import { Slider } from '@mui/material'

// ----------------------------------------------------------------------

RHFSlider.propTypes = {
  name: PropTypes.string
}

export default function RHFSlider({ name, ...other }) {
  const { control } = useFormContext()

  return <Controller name={name} control={control} render={({ field }) => <Slider {...field} valueLabelDisplay="auto" {...other} />} />
}
