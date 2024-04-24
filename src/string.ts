/**
 * @description 去掉字符串中的元素标记
 * @param { String } fragment html字符串
 * @return { String } 去掉元素标记后
 */

export const removeTag = (fragment) =>
  new DOMParser().parseFromString(fragment, "text/html").body.textContent || "";
