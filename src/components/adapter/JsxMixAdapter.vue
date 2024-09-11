<script setup lang="ts">
import { genUnsafeShortUniqueId } from '@/utils';

type T = unknown;

const props = defineProps<{
  context?: React.Context<T>,
  component: React.ReactNode,
}>();

const uid = genUnsafeShortUniqueId();
const id = `JsxMix-${uid}`;

</script>

<template>
  <div id={id}></div>
</template>
