'use client';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import CodeIcon from '@mui/icons-material/Code';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import { COLORS } from '@/theme';

const GITHUB   = 'https://github.com/isahbella007';
const LINKEDIN = 'https://www.linkedin.com/in/isabella-kpai';

interface Props {
  onMenuClick: () => void;
  isMobile: boolean;
}

export default function ActivityBar({ onMenuClick, isMobile }: Props) {
  return (
    <Box
      sx={{
        width: 48,
        flexShrink: 0,
        bgcolor: COLORS.activityBar,
        borderRight: `1px solid ${COLORS.border}`,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        py: 1,
        gap: 0.5,
      }}
    >
      {isMobile ? (
        <Tooltip title="Explorer" placement="right">
          <IconButton
            onClick={onMenuClick}
            size="small"
            sx={{ color: COLORS.textPrimary, '&:hover': { color: COLORS.lavender } }}
          >
            <MenuIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip title="Explorer" placement="right">
          <IconButton size="small" sx={{ color: COLORS.lavender }}>
            <CodeIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      )}

      <Box sx={{ flex: 1 }} />

      <Tooltip title="GitHub" placement="right">
        <IconButton
          component="a"
          href={GITHUB}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          sx={{ color: COLORS.textSecondary, '&:hover': { color: COLORS.textPrimary } }}
        >
          <GitHubIcon fontSize="small" />
        </IconButton>
      </Tooltip>

      <Tooltip title="LinkedIn" placement="right">
        <IconButton
          component="a"
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          size="small"
          sx={{ color: COLORS.textSecondary, '&:hover': { color: COLORS.cyan } }}
        >
          <LinkedInIcon fontSize="small" />
        </IconButton>
      </Tooltip>
    </Box>
  );
}
