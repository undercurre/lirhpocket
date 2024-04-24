/**
 * @description 复制文本到剪贴板
 * @param { String } text 文本内容
 */

export const copy2Clipboard = (text: string) =>
  navigator.clipboard.writeText(text);
