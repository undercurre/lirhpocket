/**
 * @description 将rgb颜色灰度化（基于光感加权平均）
 * @param { Number } r
 * @param { Number } g
 * @param { Number } b
 * @return { Number } 灰度值
 */

export const gray = (r, g, b) => 0.2126 * r + 0.7152 * g + 0.0722 * b;

/**
 * @description 生成随机HEX颜色
 * @return { String } 十六进制颜色字符串
 */

export const randomColor = () => {
  "#" +
    Math.floor(Math.random() + 0xffffff)
      .toString(16)
      .padEnd(6, "0");
};
