<template>
  <MainLayout>
    <div id="IndexPage" class="mt-12 max-w-[1200px] mx-auto px-2">
      <div
        class="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4"
      >
        <div v-if="products" v-for="product in products" :key="product">
          <!-- <SkeletonsTailwind></SkeletonsTailwind> -->
          <!-- <SkeletonsProduct></SkeletonsProduct> -->
          <Product :product="product"/>
        </div>
      </div>
      
      <!-- <ClientOnly> -->
        <!-- <SkeletonsDataTable/> -->
        <!-- <DataTableMain /> -->
        <!-- <Loading/> -->
      <!-- </ClientOnly> -->
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from "vue";

// const isClientOnly = ref(false);

import MainLayout from "~/layouts/MainLayout.vue";

// import "tw-elements/dist/css/tw-elements.min.css";

// import Datepicker from "./../components/Datepicker.vue";

// import { useUserStore } from '~/stores/user';
// const userStore = useUserStore()

let products = ref(null);

// onMounted(() => {
//   isClientOnly.value = true;
// });

onBeforeMount(async () => {
  // products.value = await useFetch('/api/prisma/get-all-products')
  // console.log(fakeProducts)
  // products.value = fakeProducts
  products.value = generateFakeProducts(12);
  // setTimeout(() => userStore.isLoading = false, 1000)
});

function generateFakeProducts(count) {
  const fakeProducts = [];
  for (let i = 1; i <= count; i++) {
    fakeProducts.push({
      id: i,
      url: "ozula.jpg",
      price: getRandomPrice(100, 5000), // Random price between 1 and 50
      title: `Lorem Ipsum Product ${i}`,
    });
  }
  return fakeProducts;
}

function getRandomPrice(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
</script>
