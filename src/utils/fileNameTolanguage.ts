export const fileNameToLanguage = (name: string) => {
  const suffix = name.split(".").pop() || ""
  switch (suffix) {
  case "ts":
  case "tsx":
    return "typescript"
  case "js":
  case "jsx":
    return "javascript"
  case "css":
    return "css"
  case "json":
    return "json"
  default:
    return "javascript"
  }
}