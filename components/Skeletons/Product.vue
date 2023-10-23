<template>
  <v-card>
    <v-skeleton-loader
      class="mx-auto border"
      max-width="400"
      width="190"
      height="320"
      type="image, list-item-three-line, list-item-three-line"
    ></v-skeleton-loader>
  </v-card>
</template>

<script>
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
export default {
  components: {
    VSkeletonLoader,
  },
};
</script>
