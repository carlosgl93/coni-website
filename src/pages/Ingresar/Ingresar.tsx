import { Box, Button, TextField, Typography } from '@mui/material';
import { FullSizeCenteredFlexBox, Title } from '@/components/styled';
import { useAuth } from '@/hooks/useAuth';
import Loading from '@/components/Loading';
import { Link } from 'react-router-dom';
import Meta from '@/components/Meta';
import { useState } from 'react';

function Ingresar() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login, loginLoading } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login({ correo: email, contrasena: password });
  };

  if (loginLoading) return <Loading />;

  return (
    <>
      <Meta title="Inicia Sesión" />
      <FullSizeCenteredFlexBox>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 2,
            width: '100%',
            maxWidth: 400,
            p: 3,
            bgcolor: 'background.paper',
            borderRadius: 1,
            boxShadow: 1,
          }}
        >
          <Title
            variant="h3"
            sx={{
              mb: 10,
            }}
          >
            Iniciar sesión
          </Title>
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button variant="contained" color="primary" type="submit" fullWidth>
            Ingresar
          </Button>

          <Typography variant="body2" mt={2}>
            Aun no tienes una cuenta? <Link to="/comienzo">Creala aqui</Link>
          </Typography>
        </Box>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Ingresar;
