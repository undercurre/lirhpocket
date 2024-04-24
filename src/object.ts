/**
 * @description 筛选对象属性
 * @param { Object } obj 被筛选对象
 * @param { String } props 被筛选对象的属性名
 * @return { Object } 筛选出的对象
 */

export const pick = (obj, ...props) => {
  Object.fromEntries(Object.entries(obj).filter(([k]) => props.includes(k)));
};
