import fs from 'fs';

export function readJson(fileName: string): unknown[] {
  try {
    const filedata = fs.readFileSync(fileName, 'utf-8');
    const data = JSON.parse(filedata);
    if (Array.isArray(data)) {
      const err =  new Error()
      err.name = 'SyntaxError';
      throw err;
    }
    return data;
  } catch (e: unknown) {
    const errName = (e as Error).name;
    if (errName === 'Error') {
      throw new Error('Invalid file')
    }
    if (errName === 'SyntaxError') {
      throw new Error('Invalid JSON format')
    }
    return []
  }
}

// console.log(readJson('./src/practicals/p09/datasets/products.json'));
// console.log(readJson('./datasets/x.json'));
// console.log(readJson('./src/practicals/p09/datasets/invalid'));