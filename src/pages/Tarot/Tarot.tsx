import Meta from '@/components/Meta';
import styled from '@emotion/styled';
import { Avatar, Box } from '@mui/material';
import { Title } from '@/components/styled';

const Hero = styled(Box)({
  height: '25vh',
  backgroundImage:
    'url(https://t4.ftcdn.net/jpg/04/80/23/99/360_F_480239948_k2fIf9OMuCsPeAO37OsPRc7CjRVFrA4I.jpg)',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '10vh',
});

function Tarot() {
  return (
    <>
      <Meta title="Tarot" />
      <Hero>
        <Avatar
          sx={{
            position: 'relative',
            top: '50%',
            height: '96px',
            width: '96px',
          }}
          alt="Constanza Sepulveda"
          src="/profile-image.png"
        />
      </Hero>
      <Box
        sx={{
          height: '75vh',
          textAlign: 'center',
        }}
      >
        <Title>Tarot, como guía.</Title>
      </Box>
    </>
  );
}

export default Tarot;
