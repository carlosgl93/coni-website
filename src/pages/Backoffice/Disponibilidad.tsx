import { Container, Subtitle, Text, Title } from '@/components/styled';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { Box, Button } from '@mui/material';
import Loading from '@/components/Loading';
import { useDisponibilidad } from '@/hooks/useDisponibilidad';
import { ListAvailableDays } from './ListAvailableDays';
import { EditAvailableDays } from './EditAvailableDays';

export const Disponibilidad = () => {
  const { handleEditDisponibilidad, isLoading, editDisponibilidad, availability } =
    useDisponibilidad();

  return (
    <Container>
      <Title>Disponibilidad</Title>
      <Subtitle>Dias y horas disponible</Subtitle>
      <Text>
        Agrega que dias y horas estas disponible para que te lleguen solicitudes que te acomoden.
      </Text>
      <Box
        sx={{
          my: '1rem',
          mx: 'auto',
          width: {
            xs: '75vw',
            sm: '50vw',
            md: 'fit-content',
          },
        }}
      >
        <Button
          fullWidth
          variant="outlined"
          startIcon={<EditOutlinedIcon />}
          onClick={handleEditDisponibilidad}
          sx={{ fontWeight: 'bold' }}
        >
          {editDisponibilidad ? 'Editando' : 'Editar'}
        </Button>
      </Box>
      {isLoading ? (
        <Loading />
      ) : !editDisponibilidad ? (
        <ListAvailableDays availability={availability} />
      ) : (
        <EditAvailableDays availability={availability} />
      )}
    </Container>
  );
};
