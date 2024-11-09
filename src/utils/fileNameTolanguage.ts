export const fileNameToLanguage = (name: string) => {
  const suffix = name.split('.').pop() || '';
  switch (suffix) {
    case 'ts':
    case 'tsx':
      return 'typescriptreact';
    case 'js':
    case 'jsx':
      return 'javascriptreact';
    case 'css':
      return 'css';
    case 'json':
      return 'json';
    default:
      return 'javascript';
  }
}