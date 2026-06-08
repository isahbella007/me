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
    name: 'README.md',
    href: '/',
    extension: 'md',
  },
  {
    type: 'folder',
    name: 'experience',
    children: [
      { type: 'file', name: 'dag-nigeria.md',    href: '/experience/bajaj-nigeria',    extension: 'md' },
      { type: 'file', name: 'lots.md',              href: '/experience/lots',              extension: 'md' },
      { type: 'file', name: 'code-derivatives.md',  href: '/experience/code-derivatives',  extension: 'md' },
      { type: 'file', name: 'orion-resources.md',  href: '/experience/orion-resources',  extension: 'md' },
      { type: 'file', name: 'locumator.md',  href: '/experience/locumator',  extension: 'md' },
    ],
  },
  {
    type: 'folder',
    name: 'systems-architecture',
    children: [
      { type: 'file', name: 'hr-identity-pipeline.md',     href: '/systems-architecture/hr-identity-pipeline',     extension: 'md' },
      { type: 'file', name: 'resume-parser-ai.md',          href: '/systems-architecture/resume-parser-ai',          extension: 'md' },
      { type: 'file', name: 'marketing-to-sales-etl.md',    href: '/systems-architecture/marketing-to-sales-etl',    extension: 'md' },
    ],
  },
  {
    type: 'folder',
    name: 'off-duty',
    children: [
      { type: 'file', name: 'workshops-&-training.md', href: '/off-duty/workshops-training', extension: 'md' },
      { type: 'file', name: 'interests.json',           href: '/off-duty/interests',           extension: 'json' },
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
