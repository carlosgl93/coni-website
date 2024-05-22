import Typography from '@mui/material/Typography';

import Meta from '@/components/Meta';
import { FullSizeCenteredFlexBox } from '@/components/styled';

function Tarot() {
  return (
    <>
      <Meta title="Tarot" />
      <FullSizeCenteredFlexBox flexDirection="column">
        <Typography variant="h3">Tarot</Typography>
      </FullSizeCenteredFlexBox>
    </>
  );
}

export default Tarot;
