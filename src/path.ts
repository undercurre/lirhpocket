/**
 * @description 解析url中的参数
 * @param { String } url 路径
 * @return { Object } 参数集
 */

export const parseQuery = (url) => {
  const q: Record<string, string | null | boolean> = {};
  url.replace(/([^?&=]+)=([^&]+)/g, (_, k, v) => (q[k] = v));
  return q;
};
