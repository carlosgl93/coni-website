import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';

const FlexBox = styled(Box)({
  display: 'flex',
});

const CenteredFlexBox = styled(FlexBox)({
  justifyContent: 'center',
  alignItems: 'center',
});

const FullSizeCenteredFlexBox = styled(CenteredFlexBox)(() => ({
  width: '100%',
  height: '100%',
}));

const Title = styled(Typography)({
  fontSize: '2rem',
  fontWeight: 'bold',
});

const Subtitle = styled(Typography)({
  fontSize: '1.5rem',
  fontWeight: '500',
});

const Text = styled(Typography)({
  fontSize: '1rem',
});

export const Wrapper = styled(Box)(() => ({
  padding: '1rem',
  minHeight: '75vh',
}));

export const Container = styled(Box)(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  justifyContent: 'center',
  padding: '1rem',
  marginBottom: '1rem',
  backgroundColor: 'white',
  boxSizing: 'border-box',
  borderRadius: '.5rem',
}));

const TextContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '3rem',
  [theme.breakpoints.down('sm')]: {
    paddingBottom: theme.spacing(4),
  },
}));

export { FlexBox, CenteredFlexBox, FullSizeCenteredFlexBox, Title, Subtitle, Text, TextContainer };
