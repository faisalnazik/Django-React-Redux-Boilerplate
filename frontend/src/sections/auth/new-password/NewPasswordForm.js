import * as Yup from 'yup';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
// form
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
// @mui
import { Stack, IconButton, OutlinedInput, InputAdornment, FormHelperText } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import Iconify from '../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../components/hook-form';

// ----------------------------------------------------------------------

export default function NewPasswordForm() {
  const navigate = useNavigate();

  const { enqueueSnackbar } = useSnackbar();

  const [showPassword, setShowPassword] = useState(false);

  const emailRecovery = sessionStorage.getItem('email-recovery');

  const VerifyCodeSchema = Yup.object().shape({
    code1: Yup.string().required('Code is required'),
    code2: Yup.string().required('Code is required'),
    code3: Yup.string().required('Code is required'),
    code4: Yup.string().required('Code is required'),
    code5: Yup.string().required('Code is required'),
    code6: Yup.string().required('Code is required'),
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string()
      .required('Confirm password is required')
      .oneOf([Yup.ref('password'), null], 'Passwords must match'),
  });

  const defaultValues = {
    code1: '',
    code2: '',
    code3: '',
    code4: '',
    code5: '',
    code6: '',
    email: emailRecovery || '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm({
    mode: 'all',
    resolver: yupResolver(VerifyCodeSchema),
    defaultValues,
  });

  const {
    control,
    setValue,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = methods;

  useEffect(() => {
    const target = document.querySelector('input.field-code');

    target?.addEventListener('paste', handlePaste);

    return () => {
      target?.removeEventListener('paste', handlePaste);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePaste = (event) => {
    let data = event.clipboardData.getData('text');

    data = data.split('');

    [].forEach.call(document.querySelectorAll('.field-code'), (node, index) => {
      node.value = data[index];

      const fieldIndex = `code${index + 1}`;

      setValue(fieldIndex, data[index]);
    });

    event.preventDefault();
  };

  const handleChangeWithNextField = (event, handleChange) => {
    const { maxLength, value, name } = event.target;

    const fieldIndex = name.replace('code', '');

    const fieldIntIndex = Number(fieldIndex);

    if (value.length >= maxLength) {
      if (fieldIntIndex < 6) {
        const nextfield = document.querySelector(`input[name=code${fieldIntIndex + 1}]`);

        if (nextfield !== null) {
          nextfield.focus();
        }
      }
    }

    handleChange(event);
  };

  const onSubmit = async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      console.log('data:', {
        email: data.email,
        code: `${data.code1}${data.code2}${data.code3}${data.code4}${data.code5}${data.code6}`,
        password: data.password,
      });

      sessionStorage.removeItem('email-recovery');

      enqueueSnackbar('Change password success!');

      navigate(PATH_DASHBOARD.root, { replace: true });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        <RHFTextField name="email" label="Email" disabled={!!emailRecovery} />

        <Stack direction="row" spacing={2} justifyContent="center">
          {['code1', 'code2', 'code3', 'code4', 'code5', 'code6'].map((name, index) => (
            <Controller
              key={name}
              name={`code${index + 1}`}
              control={control}
              render={({ field, fieldState: { error } }) => (
                <OutlinedInput
                  {...field}
                  error={!!error}
                  autoFocus={index === 0}
                  placeholder="-"
                  onChange={(event) => handleChangeWithNextField(event, field.onChange)}
                  inputProps={{
                    className: 'field-code',
                    maxLength: 1,
                    sx: {
                      p: 0,
                      textAlign: 'center',
                      width: { xs: 36, sm: 56 },
                      height: { xs: 36, sm: 56 },
                    },
                  }}
                />
              )}
            />
          ))}
        </Stack>

        {(!!errors.code1 || !!errors.code2 || !!errors.code3 || !!errors.code4 || !!errors.code5 || !!errors.code6) && (
          <FormHelperText error sx={{ px: 2 }}>
            Code is required
          </FormHelperText>
        )}

        <RHFTextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <RHFTextField
          name="confirmPassword"
          label="Confirm New Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting} sx={{ mt: 3 }}>
          Change password
        </LoadingButton>
      </Stack>
    </FormProvider>
  );
}
