# 颜色工具

## gray

将rgb颜色灰度化（基于光感加权平均）

### Usage Example

```ts
<script lang="ts" setup>
const rgb = {r: 255, g: 255, b: 255};
gray(rgb.r, rgb.g, rgb.b);
</script>
```

## randomColor

生成随机HEX颜色

### Usage Example

```ts
<script lang="ts" setup>
const rc = randomColor();
</script>
```
