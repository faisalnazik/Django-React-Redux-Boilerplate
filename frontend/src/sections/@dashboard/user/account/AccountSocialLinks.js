import PropTypes from 'prop-types';
import { useSnackbar } from 'notistack';
// form
import { useForm } from 'react-hook-form';
// @mui
import { Stack, Card, InputAdornment } from '@mui/material';
import { LoadingButton } from '@mui/lab';
// components
import Iconify from '../../../../components/Iconify';
import { FormProvider, RHFTextField } from '../../../../components/hook-form';

// ----------------------------------------------------------------------

const SOCIAL_LINKS = [
  {
    value: 'facebookLink',
    icon: <Iconify icon={'eva:facebook-fill'} width={24} height={24} />,
  },
  {
    value: 'instagramLink',
    icon: <Iconify icon={'ant-design:instagram-filled'} width={24} height={24} />,
  },
  {
    value: 'linkedinLink',
    icon: <Iconify icon={'eva:linkedin-fill'} width={24} height={24} />,
  },
  {
    value: 'twitterLink',
    icon: <Iconify icon={'eva:twitter-fill'} width={24} height={24} />,
  },
];

// ----------------------------------------------------------------------

AccountSocialLinks.propTypes = {
  myProfile: PropTypes.shape({
    facebookLink: PropTypes.string,
    instagramLink: PropTypes.string,
    linkedinLink: PropTypes.string,
    twitterLink: PropTypes.string,
  }),
};

export default function AccountSocialLinks({ myProfile }) {
  const { enqueueSnackbar } = useSnackbar();

  const defaultValues = {
    facebookLink: myProfile.facebookLink,
    instagramLink: myProfile.instagramLink,
    linkedinLink: myProfile.linkedinLink,
    twitterLink: myProfile.twitterLink,
  };

  const methods = useForm({
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      enqueueSnackbar('Update success!');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Card sx={{ p: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3} alignItems="flex-end">
          {SOCIAL_LINKS.map((link) => (
            <RHFTextField
              key={link.value}
              name={link.value}
              InputProps={{
                startAdornment: <InputAdornment position="start">{link.icon}</InputAdornment>,
              }}
            />
          ))}

          <LoadingButton type="submit" variant="contained" loading={isSubmitting}>
            Save Changes
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Card>
  );
}
