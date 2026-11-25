import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const tip = 'Tip: If your agent says "one small change," commit first. That is how it tells you the diff is about to develop a plot.';
const outputDirectory = process.env.OUTPUT_DIR ?? '/output';

mkdirSync(outputDirectory, { recursive: true });
writeFileSync(join(outputDirectory, 'entry.txt'), tip, 'utf8');
