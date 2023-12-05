export function generateArray(arraySize: number) {
  const numbers: Array<number> = [];
  for (let i = 0; i < arraySize; i++) {
    let randomNumber = Math.floor(Math.random() * 10);
    numbers.push(randomNumber);
  }
  return numbers;
}
