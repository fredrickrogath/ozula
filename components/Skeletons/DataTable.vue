<template>
    <v-container>
        <v-col cols="12" md="12">
          <v-skeleton-loader
            class="mx-auto border"
            max-width=""
            type="table-heading, table-thead, table-row, table-row"
          ></v-skeleton-loader>
        </v-col>
    </v-container>
  </template>

<script>
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
export default {
  components: {
    VSkeletonLoader,
  },
};
</script>