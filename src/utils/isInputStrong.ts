export function isInputStrong(str: string): boolean {
  return (
    /[ `!@#$%^&*()_+\-={};':"\\|,.<>?~]/.test(str) &&
    str.length >= 7 &&
    /[A-Z]/.test(str) &&
    /[a-z]/.test(str)
  );
}
