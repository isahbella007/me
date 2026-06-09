export type TreeFile = {
  type: 'file';
  name: string;
  href: string;
  extension: 'md' | 'json' | 'ts';
};

export type TreeFolder = {
  type: 'folder';
  name: string;
  children: TreeItem[];
};

export type TreeItem = TreeFile | TreeFolder;

export const fileTree: TreeItem[] = [
  {
    type: 'file',
    name: 'About Me',
    href: '/',
    extension: 'md',
  },
  {
    type: 'folder',
    name: 'experience',
    children: [
      { type: 'file', name: 'Dag Nigeria Industries',    href: '/experience/bajaj-nigeria',    extension: 'md' },
      { type: 'file', name: 'Lots',              href: '/experience/lots',              extension: 'md' },
      { type: 'file', name: 'Code Derivatives',  href: '/experience/code-derivatives',  extension: 'md' },
      { type: 'file', name: 'Orion Resources',  href: '/experience/orion-resources',  extension: 'md' },
      { type: 'file', name: 'Locumator',  href: '/experience/locumator',  extension: 'md' },
    ],
  },
  {
    type: 'folder',
    name: 'systems-architecture',
    children: [
      { type: 'file', name: 'HR Identity Pipeline',     href: '/systems-architecture/hr-identity-pipeline',     extension: 'md' },
      { type: 'file', name: 'Custom ATS',               href: '/systems-architecture/custom-ats',               extension: 'md' },
      { type: 'file', name: 'Resume Parser AI',          href: '/systems-architecture/resume-parser-ai',          extension: 'md' },
      { type: 'file', name: 'Marketing To Sales ETL',    href: '/systems-architecture/marketing-to-sales-etl',    extension: 'md' },
    ],
  },
  {
    type: 'folder',
    name: 'articles',
    children: [
      { type: 'file', name: 'HR Data Apocalypse', href: '/articles/hr-data-apocalypse', extension: 'md' },
    ],
  },
  {
    type: 'folder',
    name: 'off-duty',
    children: [
      { type: 'file', name: 'Workshops & Training', href: '/off-duty/workshops-training', extension: 'md' },
      { type: 'file', name: 'Interests',           href: '/off-duty/interests',           extension: 'json' },
    ],
  },
];

export function getAllFiles(items: TreeItem[]): TreeFile[] {
  const files: TreeFile[] = [];
  for (const item of items) {
    if (item.type === 'file') files.push(item);
    else files.push(...getAllFiles(item.children));
  }
  return files;
}
