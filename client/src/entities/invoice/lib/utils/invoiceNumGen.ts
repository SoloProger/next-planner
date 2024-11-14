export default function invoiceNumGen(): number {
  const chars = "0123456789";
  const keyLength = 12;
  let key = "";
  for (let i = 0; i <= keyLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    key += chars.substring(randomNumber, randomNumber + 1);
  }
  return +key;
}
