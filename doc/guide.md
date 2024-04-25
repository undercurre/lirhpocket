# Get Started

## Installation

```
pnpm add lirhpocket
```

## Usage Example

```ts
<script lang="ts" setup>
import {ref} from 'vue';
import {getArrsUnion} from 'lirhpocket';

const arr1 = ref([1,2,3]);
const arr2 = ref([1,2,3,4]);
const union = getArrsUnion(arr1.value, arr2.value);
</script>
```
