'use client';
import { useEffect, useRef, useState } from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import { COLORS } from '@/theme';

let counter = 0;

function resolveCssVar(value: string): string {
  const match = value.match(/^var\((--[^)]+)\)$/);
  if (!match) return value;
  return getComputedStyle(document.documentElement).getPropertyValue(match[1]).trim() || value;
}

export default function MermaidDiagram({ chart }: { chart: string }) {
  const id       = useRef(`mermaid-${++counter}`);
  const [svg, setSvg]     = useState<string | null>(null);
  const [errored, setErr] = useState(false);

  useEffect(() => {
    let cancelled = false;

    import('mermaid').then(({ default: mermaid }) => {
      mermaid.initialize({
        startOnLoad: false,
        theme: 'base',
        themeVariables: {
          primaryColor:        resolveCssVar(COLORS.selected),
          primaryTextColor:    resolveCssVar(COLORS.textPrimary),
          primaryBorderColor:  COLORS.pink,
          lineColor:           COLORS.mauve,
          background:          resolveCssVar(COLORS.codeBg),
          mainBkg:             resolveCssVar(COLORS.codeBg),
          nodeBorder:          resolveCssVar(COLORS.border),
          clusterBkg:          resolveCssVar(COLORS.hover),
          titleColor:          resolveCssVar(COLORS.textPrimary),
          edgeLabelBackground: resolveCssVar(COLORS.codeBg),
          fontFamily:          'JetBrains Mono, Fira Code, monospace',
          fontSize:            '12px',
        },
      });

      mermaid
        .render(id.current, chart)
        .then(({ svg: rendered }) => { if (!cancelled) setSvg(rendered); })
        .catch(() => { if (!cancelled) setErr(true); });
    });

    return () => { cancelled = true; };
  }, [chart]);

  if (errored) return null;

  if (!svg) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
        <CircularProgress size={20} sx={{ color: COLORS.pink }} />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        bgcolor: COLORS.codeBg,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 1,
        p: 3,
        overflow: 'auto',
        my: 3,
        '& svg': { maxWidth: '100%', height: 'auto', display: 'block', mx: 'auto' },
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
