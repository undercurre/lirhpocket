/**
 * @description 获取某个日期位于当年的第几天
 * @param { Boolean } date 日期
 * @return { Number } 第几天
 */

export const dayOfYear = (date: Date) =>
  Math.floor(
    date.getTime() -
      new Date(date.getFullYear(), 0, 0).getTime() / 1000 / 60 / 60 / 24
  );
