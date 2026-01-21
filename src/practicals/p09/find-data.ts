import fs from 'fs'
export function findData(fileName: string, key: string, value: string | number): void {
  try {
    // const data = fs.readFileSync(fileName)
  } catch (e) {
    console.log(e);
  }
}

// findData('./datasets/products.json');