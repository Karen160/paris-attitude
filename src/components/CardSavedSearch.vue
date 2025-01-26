<template>
  <q-chip class="card-saved-search" v-for="(v, k) in savedSearch" :key="k" clickable @click="emit('search', v)">
    <p v-if="!v.borough && !v.min && !v.max && !v.bedrooms" class="q-mb-none">Search 1</p>
    <p v-else class="q-mb-none">
      {{ v.borough || '' }} {{ v.min || '' }} {{ v.max || '' }} {{ v.bedrooms || '' }}
    </p>
    <q-btn label="x" rounded class="btn-delete" text-color="black" @click="emit('delete', v)" />
  </q-chip>
</template>

<script setup>
import { computed } from 'vue'
import { useSearchStore } from 'stores/search-store.js'

const emit = defineEmits(['search', 'delete'])

const searchStore = useSearchStore()

const savedSearch = computed(() => searchStore.savedSearch)
</script>

<style lang="scss" scoped>
.card-saved-search {
  padding-right: 0;
  .btn-delete {
    margin-left: 10px;
    font-size: 10px;
  }
}
</style>
