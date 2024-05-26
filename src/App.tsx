import AppErrorBoundaryFallback from '@/error-handling/fallbacks/App';
import { esES, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { QueryClient, QueryClientProvider } from 'react-query';
import Notifications from '@/sections/Notifications';
import CssBaseline from '@mui/material/CssBaseline';
import { withErrorHandler } from '@/error-handling';
import { BrowserRouter } from 'react-router-dom';
import HotKeys from '@/sections/HotKeys';
import Sidebar from '@/sections/Sidebar';
import Header from '@/sections/Header';
import Pages from '@/routes/Pages';
import { Fragment } from 'react';
import SW from '@/sections/SW';
import './styles.css';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocalizationProvider
        dateAdapter={AdapterDayjs}
        adapterLocale="es-mx"
        localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
      >
        <Fragment>
          <CssBaseline />
          <Notifications />
          <HotKeys />
          <SW />
          <BrowserRouter>
            <Header />
            <Sidebar />
            <Pages />
          </BrowserRouter>
        </Fragment>
      </LocalizationProvider>
    </QueryClientProvider>
  );
}

export default withErrorHandler(App, AppErrorBoundaryFallback);
