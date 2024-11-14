type UseClipboardReturn = (text: string) => void;

export const useClipboard = (): UseClipboardReturn => {
  const copyTextToClipboard = async (text: string) => {
    if ("clipboard" in navigator)
      return await navigator.clipboard.writeText(text);
    else return console.warn("Clipboard API not supported");
  };

  const copyText = (text: string) => {
    copyTextToClipboard(text).catch((err) => console.error(err));
  };

  return copyText;
};
