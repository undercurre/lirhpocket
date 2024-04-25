# 数组工具

## getArrsUnion

获取两个数组的并集

### Usage Example

```ts
<script lang="ts" setup>
const arr1 = [1,2,3,4];
const arr2 = [1,2,3];
const union = getArrsUnion(arr1, arr2);
</script>
```

## getArrsCross

获取两个数组的交集

### Usage Example

```ts
<script lang="ts" setup>
const arr1 = [1,2,3,4];
const arr2 = [1,2,3];
const cross = getArrsCross(arr1, arr2);
</script>
```

## getArrsDiff

获取两个数组的差集

### Usage Example

```ts
<script lang="ts" setup>
const arr1 = [1,2,3,4];
const arr2 = [1,2,3];
const diff = getArrsDiff(arr1, arr2);
</script>
```
