export default function validateEmail(email) {
  const regex = /^([A-Za-z0-9_\-\.])+\@(successive.tech)/;
  return regex.test(email);
}
