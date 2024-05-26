import Meta from '@/components/Meta';
import { TextContainer, Title, Wrapper } from '@/components/styled';
import { Box, Button, TextField, Typography, useTheme } from '@mui/material';
import RegistrarPrestadorController from './RegistrarPrestadorController';
import { formInputs } from './formInputs';
import { useAuth } from '@/hooks/useAuth';

function RegistrarPrestador() {
  const { state, handleChange, handleSubmit } = RegistrarPrestadorController();
  const { createPrestadorLoading } = useAuth();
  const theme = useTheme();
  return (
    <>
      <Meta title="Registrar prestador de servicio Blui" />
      <Wrapper
        sx={{
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'background.paper',
        }}
      >
        <Title
          sx={{
            fontSize: '1.4rem',
            my: '2.5vh',
          }}
        >
          ¡Estas a un solo paso! Registrate para poder ofrecer tus servicios.
        </Title>
        <Box
          component={'form'}
          sx={{
            width: '100%',
            gap: theme.spacing(2),
            backgroundColor: 'background.default',
            borderRadius: '.5rem',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            boxShadow: 5,
          }}
          onSubmit={handleSubmit}
        >
          {state.error && (
            <TextContainer>
              <Typography
                variant="body1"
                sx={{
                  color: 'red',
                }}
              >
                {state.error}
              </Typography>
            </TextContainer>
          )}
          {formInputs.map((input) => {
            return (
              <TextField
                sx={{
                  m: {
                    xs: 1,
                    sm: 2,
                    md: 3,
                  },
                }}
                key={input.inputName}
                label={input.label}
                name={input.inputName}
                variant="outlined"
                placeholder={input.placeholder}
                onChange={handleChange}
                type={input.type}
                helperText={input?.helperText ?? ''}
              />
            );
            // }
          })}
          {/* TODO: ADD CAPTCHA */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}
          >
            <Button
              disabled={
                state.firstname === '' ||
                state.confirmPassword === '' ||
                state.password === '' ||
                state.rut === '' ||
                state.error !== '' ||
                createPrestadorLoading
              }
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit();
                }
              }}
              variant="contained"
              onClick={handleSubmit}
              sx={{
                marginTop: '5vh',
              }}
            >
              Registrar
            </Button>
          </Box>
        </Box>
      </Wrapper>
    </>
  );
}

export default RegistrarPrestador;
