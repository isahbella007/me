'use client';
import { useState } from 'react';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { COLORS } from '@/theme';
import { fileTree, TreeItem, TreeFile, TreeFolder } from '@/data/fileTree';

const extIcon: Record<string, string>  = { md: '≡', json: '{}', ts: 'TS' };
const extColor: Record<string, string> = {
  md:   COLORS.textSecondary,
  json: COLORS.orange,
  ts:   COLORS.cyan,
};

function FileItem({
  item,
  depth,
  activeHref,
  onClick,
}: {
  item: TreeFile;
  depth: number;
  activeHref: string;
  onClick: () => void;
}) {
  const isActive = item.href === activeHref;

  return (
    <Link href={item.href} onClick={onClick} style={{ display: 'block', textDecoration: 'none' }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          pl: `${12 + depth * 16}px`,
          pr: 1,
          py: '3px',
          bgcolor: isActive ? COLORS.selected : 'transparent',
          borderLeft: isActive ? `2px solid ${COLORS.pink}` : '2px solid transparent',
          cursor: 'pointer',
          '&:hover': {
            bgcolor: isActive ? COLORS.selected : COLORS.hover,
          },
          transition: 'background-color 0.1s',
        }}
      >
        <Typography
          component="span"
          sx={{
            fontSize: 10,
            fontFamily: 'inherit',
            fontWeight: 700,
            color: extColor[item.extension] ?? COLORS.textSecondary,
            mr: 0.75,
            flexShrink: 0,
            width: 16,
            textAlign: 'center',
            lineHeight: 1,
          }}
        >
          {extIcon[item.extension] ?? '≡'}
        </Typography>
        <Typography
          sx={{
            fontSize: 13,
            fontFamily: 'inherit',
            color: isActive ? COLORS.textPrimary : COLORS.textSecondary,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            '&:hover': { color: COLORS.textPrimary },
          }}
        >
          {item.name}
        </Typography>
      </Box>
    </Link>
  );
}

function FolderItem({
  item,
  depth,
  activeHref,
  onClick,
}: {
  item: TreeFolder;
  depth: number;
  activeHref: string;
  onClick: () => void;
}) {
  const isChildActive = item.children.some(
    child => child.type === 'file' && child.href === activeHref,
  );
  const [open, setOpen] = useState(true);

  return (
    <>
      <Box
        onClick={() => setOpen(o => !o)}
        sx={{
          display: 'flex',
          alignItems: 'center',
          pl: `${4 + depth * 16}px`,
          pr: 1,
          py: '3px',
          cursor: 'pointer',
          '&:hover': { bgcolor: COLORS.hover },
          transition: 'background-color 0.1s',
        }}
      >
        {open ? (
          <ExpandMoreIcon sx={{ fontSize: 14, color: COLORS.textSecondary, flexShrink: 0 }} />
        ) : (
          <ChevronRightIcon sx={{ fontSize: 14, color: COLORS.textSecondary, flexShrink: 0 }} />
        )}
        <Typography
          sx={{
            fontSize: 12,
            fontFamily: 'inherit',
            fontWeight: 600,
            color: isChildActive ? COLORS.lavender : COLORS.textSecondary,
            ml: 0.5,
            textTransform: 'lowercase',
            letterSpacing: '0.02em',
          }}
        >
          {item.name}
        </Typography>
      </Box>
      <Collapse in={open} timeout={120}>
        {item.children.map((child, i) => (
          <TreeNode key={i} item={child} depth={depth + 1} activeHref={activeHref} onClick={onClick} />
        ))}
      </Collapse>
    </>
  );
}

function TreeNode({
  item,
  depth,
  activeHref,
  onClick,
}: {
  item: TreeItem;
  depth: number;
  activeHref: string;
  onClick: () => void;
}) {
  if (item.type === 'file')
    return <FileItem item={item} depth={depth} activeHref={activeHref} onClick={onClick} />;
  return <FolderItem item={item} depth={depth} activeHref={activeHref} onClick={onClick} />;
}

export default function Sidebar({
  activeHref,
  onFileClick,
}: {
  activeHref: string;
  onFileClick: () => void;
}) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
      {/* Explorer header */}
      <Box
        sx={{
          px: 1.5,
          py: 0.75,
          borderBottom: `1px solid ${COLORS.border}`,
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'inherit',
            fontSize: 10,
            color: COLORS.textSecondary,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          Explorer
        </Typography>
      </Box>

      {/* Repo root label */}
      <Box
        sx={{
          px: 1,
          py: '5px',
          borderBottom: `1px solid ${COLORS.border}`,
          flexShrink: 0,
        }}
      >
        <Typography
          sx={{
            fontFamily: 'inherit',
            fontSize: 10,
            color: COLORS.textMuted,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            pl: 0.5,
          }}
        >
          📁 ISABELLA-KPAI
        </Typography>
      </Box>

      {/* Tree */}
      <Box sx={{ flex: 1, overflow: 'auto', pt: 0.5 }}>
        {fileTree.map((item, i) => (
          <TreeNode key={i} item={item} depth={0} activeHref={activeHref} onClick={onFileClick} />
        ))}
      </Box>
    </Box>
  );
}
