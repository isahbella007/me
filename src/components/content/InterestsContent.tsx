import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { COLORS } from '@/theme';
import { interests } from '@/data/content';

type JsonPrimitive = string | number | boolean;
type JsonValue = JsonPrimitive | string[];

function renderValue(val: JsonValue): React.ReactNode {
  if (typeof val === 'string')  return <span style={{ color: COLORS.pink }}>&quot;{val}&quot;</span>;
  if (typeof val === 'boolean') return <span style={{ color: COLORS.mauve }}>{String(val)}</span>;
  if (typeof val === 'number')  return <span style={{ color: COLORS.orange }}>{val}</span>;
  if (Array.isArray(val)) {
    return (
      <>
        {'['}
        {val.map((item, i) => (
          <span key={i}>
            <span style={{ color: COLORS.pink }}>&quot;{item}&quot;</span>
            {i < val.length - 1 ? ', ' : ''}
          </span>
        ))}
        {']'}
      </>
    );
  }
  return null;
}

export default function InterestsContent() {
  const entries = Object.entries(interests) as [string, JsonValue][];

  return (
    <Box sx={{ maxWidth: 860, mx: 'auto', px: { xs: 2, sm: 4 }, py: 4 }}>

      {/* ── Header ── */}
      <Box sx={{ mb: 3 }}>
        <Typography
          sx={{
            fontFamily: 'inherit',
            fontSize: { xs: 20, sm: 26 },
            fontWeight: 700,
            color: COLORS.textPrimary,
            mb: 0.5,
          }}
        >
          <span style={{ color: COLORS.mauve }}>{'{'}</span>
          <span style={{ color: COLORS.textPrimary }}>&nbsp;interests.json&nbsp;</span>
          <span style={{ color: COLORS.mauve }}>{'}'}</span>
        </Typography>
        <Typography
          sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textMuted, fontStyle: 'italic' }}
        >
          {'// the human behind the pipelines'}
        </Typography>
      </Box>

      {/* ── JSON block ── */}
      <Box
        sx={{
          bgcolor: COLORS.codeBg,
          border: `1px solid ${COLORS.border}`,
          borderRadius: 1,
          p: 2.5,
          position: 'relative',
        }}
      >
        <Box sx={{ position: 'absolute', top: 10, right: 14, display: 'flex', gap: 0.75 }}>
          {['#ff5f57', '#febc2e', '#28c840'].map(c => (
            <Box key={c} sx={{ width: 10, height: 10, borderRadius: '50%', bgcolor: c }} />
          ))}
        </Box>

        <Typography
          component="div"
          sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textMuted, mb: 0.75, fontStyle: 'italic' }}
        >
          {'// isabella-kpai/off-duty/interests.json'}
        </Typography>

        <Typography component="div" sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary, lineHeight: 1.9 }}>
          {'{'}
        </Typography>

        {entries.map(([key, val], i) => (
          <Typography
            key={key}
            component="div"
            sx={{ fontFamily: 'inherit', fontSize: 13, lineHeight: 1.9, pl: 2 }}
          >
            <span style={{ color: COLORS.cyan }}>&quot;{key}&quot;</span>
            <span style={{ color: COLORS.textSecondary }}>: </span>
            {renderValue(val)}
            {i < entries.length - 1 ? ',' : ''}
          </Typography>
        ))}

        <Typography component="div" sx={{ fontFamily: 'inherit', fontSize: 13, color: COLORS.textPrimary }}>
          {'}'}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: 'inherit',
          fontSize: 12,
          color: COLORS.textMuted,
          fontStyle: 'italic',
          mt: 2,
        }}
      >
        {/* {'// Yes, generalists will inherit the tech industry. Fight me. 🤝'} */}
      </Typography>
    </Box>
  );
}
