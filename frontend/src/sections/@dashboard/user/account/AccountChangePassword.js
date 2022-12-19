import * as Yup from 'yup'
import { useSnackbar } from 'notistack'
import { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { updatePassword } from 'src/redux/slices/user'

// form
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
// @mui
import { Stack, Card } from '@mui/material'
import { LoadingButton } from '@mui/lab'
// components
import { FormProvider, RHFTextField } from '../../../../components/hook-form'

// ----------------------------------------------------------------------

export default function AccountChangePassword() {
  const dispatch = useDispatch()
  const { enqueueSnackbar } = useSnackbar()

  const { error, success } = useSelector((state) => state.user)

  const ChangePassWordSchema = Yup.object().shape({
    oldPassword: Yup.string().required('Old Password is required'),
    newPassword: Yup.string().min(6, 'Password must be at least 6 characters').required('New Password is required'),
    confirmNewPassword: Yup.string().oneOf([Yup.ref('newPassword'), null], 'Passwords must match')
  })

  const defaultValues = {
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: ''
  }

  const methods = useForm({
    resolver: yupResolver(ChangePassWordSchema),
    defaultValues
  })

  const {
    reset,
    watch,
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = methods
  const values = watch()
  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500))
      reset()
      // enqueueSnackbar('Update success!')
      dispatch(updatePassword({ old_password: values.oldPassword, new_password: values.newPassword }))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    if (error) {
      enqueueSnackbar(error.message, { variant: 'error' })
    } else if (!success) {
      enqueueSnackbar('Password updated successfully', { variant: 'success' })
    }
  }, [error])

  return (
    <Card sx={{ p: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} alignItems="flex-end">
          <RHFTextField name="oldPassword" type="password" label="Old Password" />

          <RHFTextField name="newPassword" type="password" label="New Password" />

          <RHFTextField name="confirmNewPassword" type="password" label="Confirm New Password" />

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Save Changes
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Card>
  )
}
