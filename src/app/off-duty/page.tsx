import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import WorkshopsContent from '@/components/content/WorkshopsContent';
import InterestsContent from '@/components/content/InterestsContent';

export default function OffDutyPage() {
  return (
    <Box>
      <WorkshopsContent />
      <Divider />
      <InterestsContent />
    </Box>
  );
}
