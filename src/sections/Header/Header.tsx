import EditCalendarOutlinedIcon from '@mui/icons-material/EditCalendarOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import routes from '@/routes';
import { FlexBox } from '@/components/styled';
import { title } from '@/config';
import useSidebar from '@/store/sidebar';
import useTheme from '@/store/theme';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
// import useOrientation from '@/hooks/useOrientation';
import { ScheduleController } from '@/controllers/schedule';

function Header() {
  // const isPortrait = useOrientation();

  // return isPortrait ? <MobileHeader /> : <DesktopHeader />;
  return <MobileHeader />;
}

export default Header;

const MobileHeader = () => {
  const [, sidebarActions] = useSidebar();
  const [theme] = useTheme();
  const { isOpen, toggleModal } = ScheduleController();

  return (
    <Box sx={{ flexGrow: 1 }} data-pw={`theme-${theme}`}>
      <AppBar elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <IconButton
              onClick={sidebarActions.toggle}
              size="large"
              edge="start"
              color="info"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
            <Button color="info">{title}</Button>
          </FlexBox>
          <FlexBox>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Agendar" arrow>
              <IconButton color="info" edge="end" size="large" onClick={toggleModal}>
                <EditCalendarOutlinedIcon />
              </IconButton>
            </Tooltip>
          </FlexBox>
        </Toolbar>
      </AppBar>
      <Dialog
        open={isOpen}
        onClose={toggleModal}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <DialogTitle>Agendar</DialogTitle>
        <DialogContent>
          <form action="">
            <select>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </form>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export const DesktopHeader = () => {
  const [, sidebarActions] = useSidebar();
  const [theme] = useTheme();
  const { isOpen, toggleModal } = ScheduleController();

  return (
    <Box sx={{ flexGrow: 1 }} data-pw={`theme-${theme}`}>
      <AppBar elevation={1} position="static">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <Button color="info">{title}</Button>
          </FlexBox>
          <FlexBox>
            <FlexBox
              sx={{
                alignItems: 'center',
              }}
            >
              {Object.values(routes)
                .filter((route) => route.title)
                .map(({ path, title }, index) => (
                  <>
                    <Button
                      key={path}
                      component={Link}
                      to={path as string}
                      onClick={sidebarActions.close}
                    >
                      <Typography>{title}</Typography>
                    </Button>
                    {index === Object.values(routes).length - 1 ? null : (
                      <Divider orientation="vertical" flexItem />
                    )}
                  </>
                ))}
            </FlexBox>
            <Divider orientation="vertical" flexItem />
            <Tooltip title="Switch theme" arrow>
              <IconButton
                color="info"
                edge="end"
                size="large"
                onClick={() => alert('To schedule')}
                data-pw="theme-toggle"
              >
                <EditCalendarOutlinedIcon />
              </IconButton>
            </Tooltip>
          </FlexBox>
        </Toolbar>
      </AppBar>
      <Dialog onClose={toggleModal} open={isOpen}></Dialog>
    </Box>
  );
};
