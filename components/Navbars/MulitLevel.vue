<template>
  <div
    class="xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 bg-white text-gray-900"
  >
    <!-- First Level -->
    <div
      v-for="(item, index) in navbarItems"
      :key="index"
      class="group inline-block"
    >
      <button
        class="outline-none focus:outline-none border px-3 py-1 bg-white rounded-sm flex items-center min-w-32"
      >
        <span class="pr-1 font-semibold flex-1 hover:text-[#FF4646]">{{ item.text }}</span>
        <span v-if="item.submenus && item.submenus.length > 0">
          <svg
            class="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
            />
          </svg>
        </span>
      </button>
      <!-- Second Level -->
      <ul
        class="bg-white border rounded-sm transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top min-w-32"
      >
        <li
          v-for="(submenu, submenuIndex) in item.submenus"
          :key="submenuIndex"
          class="group relative px-3 py-1 hover:bg-gray-100"
          :class="{ 'text-green-500': hasSubmenus(submenu)}"
        >
          <button
            class="w-full text-left flex items-center outline-none focus:outline-none"
          >
            <span v-if="hasSubmenus(submenu)" class="pr-1 flex-1 hover:text-[#FF4646]">{{ submenu.text }}  || {{ hasSubmenus(submenu) }}</span>
            <NuxtLink v-if="!hasSubmenus(submenu)"> {{ submenu.text }} </NuxtLink>
            <span class="mr-auto" v-if="submenu.subsubmenus && submenu.subsubmenus.length > 0">
              <svg
                class="fill-current h-4 w-4 transition duration-150 ease-in-out"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                />
              </svg>
            </span>
          </button>
          <!-- Third Level -->
          <ul
            class="bg-white border rounded-sm absolute top-0 right-0 transition duration-150 ease-in-out origin-top-left min-w-32"
          >
            <li
              v-for="(subsubmenu, subsubmenuIndex) in submenu.subsubmenus"
              :key="subsubmenuIndex"
              class="px-3 py-1 hover:bg-gray-100 hover:text-[#FF4646]"
            >
              {{ subsubmenu.text }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="group inline-block text-info pl-6">
    Remained free gap
  </div>
  </div>
</template>

<script>
export default {
  methods: {
    hasSubmenus(submenu) {
      // Check if the submenu has either submenus or subsubmenus
      return (
        (submenu.submenus && submenu.submenus.length > 0) ||
        (submenu.subsubmenus && submenu.subsubmenus.length > 0)
      );
    },
  },

  data() {
    return {
      // Multi-level Navbar Items
      navbarItems: [
  {
    text: "Electronics",
    submenus: [
      {
        text: "Mobile Phones & Accessories",
        subsubmenus: [
          { text: "Smartphones" },
          { text: "Phone Cases & Covers" },
          // ... other subsubcategories
        ],
      },
      { text: "Laptops & Computers" },
      { text: "Cameras & Photography" },
      // ... other subcategories
    ],
  },
  {
    text: "Fashion",
    submenus: [
      {
        text: "Clothing",
        subsubmenus: [
          { text: "Dresses" },
          { text: "T-Shirts & Tops" },
          // ... other subsubcategories
        ],
      },
      {
        text: "Shoes",
        subsubmenus: [
          { text: "Sneakers" },
          { text: "Boots" },
          // ... other subsubcategories
        ],
      },
      // ... other subcategories
    ],
  },
  {
    text: "Home & Garden",
    submenus: [
      {
        text: "Furniture",
        subsubmenus: [
          { text: "Living Room Furniture" },
          { text: "Bedroom Furniture" },
          // ... other subsubcategories
        ],
      },
      {
        text: "Kitchen & Dining",
        subsubmenus: [
          { text: "Cookware" },
          { text: "Tableware" },
          // ... other subsubcategories
        ],
      },
      // ... other subcategories
    ],
  },
  {
    text: "Beauty & Health",
    submenus: [
      {
        text: "Skincare & Makeup",
        subsubmenus: [
          { text: "Facial Cleansers" },
          { text: "Lipsticks & Lip Care" },
          // ... other subsubcategories
        ],
      },
      {
        text: "Hair Care",
        subsubmenus: [
          { text: "Shampoos & Conditioners" },
          { text: "Hair Styling Tools" },
          // ... other subsubcategories
        ],
      },
      // ... other subcategories
    ],
  },

  {
    text: "Motor",
    submenus: [
      {
        text: "Motorcycles",
        subsubmenus: [
          { text: "Sport Bikes" },
          { text: "Cruisers" },
          // ... other subsubcategories for motorcycles
        ],
      },
      {
        text: "Automobiles",
        subsubmenus: [
          { text: "Sedans" },
          { text: "SUVs" },
          // ... other subsubcategories for automobiles
        ],
      },
      {
        text: "Accessories & Parts",
        subsubmenus: [
          { text: "Helmets" },
          { text: "Tires & Wheels" },
          // ... other subsubcategories for motor accessories & parts
        ],
      },
    ],
  },

  {
    text: "Sport",
    submenus: [
      {
        text: "Outdoor Sports",
        subsubmenus: [
          { text: "Soccer" },
          { text: "Tennis" },
          // ... other outdoor sports
        ],
      },
      {
        text: "Indoor Sports",
        subsubmenus: [
          { text: "Basketball" },
          { text: "Badminton" },
          // ... other indoor sports
        ],
      },
      {
        text: "Fitness & Gym",
        subsubmenus: [
          { text: "Exercise Equipment" },
          { text: "Yoga Accessories" },
          // ... other fitness and gym products
        ],
      },
    ],
  },

  {
    text: "Industries",
    submenus: [
      {
        text: "Manufacturing",
        subsubmenus: [
          { text: "Automobile Manufacturing" },
          { text: "Electronics Manufacturing" },
          // ... other manufacturing subcategories
        ],
      },
      {
        text: "Technology",
        subsubmenus: [
          { text: "Software Development" },
          { text: "Hardware Manufacturing" },
          // ... other technology subcategories
        ],
      },
      {
        text: "Healthcare",
        subsubmenus: [
          { text: "Hospitals" },
          { text: "Pharmaceuticals" },
          // ... other healthcare subcategories
        ],
      },
      {
        text: "Construction",
        subsubmenus: [
          { text: "Residential Construction" },
          { text: "Commercial Construction" },
          // ... other construction subcategories
        ],
      },
      // ... other industry-related subcategories
    ],
  },

  {
    text: "Bookings & Ordering",
    submenus: [
      {
        text: "Food Delivery",
        subsubmenus: [
          { text: "Pizza Delivery" },
          { text: "Chinese Food Delivery" },
          { text: "Fast Food Delivery" },
          // ... other food delivery options
        ],
      },
      {
        text: "Hotel Bookings",
        subsubmenus: [
          { text: "Luxury Hotels" },
          { text: "Budget Hotels" },
          { text: "Resorts" },
          // ... other hotel booking options
        ],
      },
      {
        text: "Transportation",
        subsubmenus: [
          { text: "Car Rentals" },
          { text: "Airport Transfers" },
          // ... other transportation options
        ],
      },
      {
        text: "Event Tickets",
        subsubmenus: [
          { text: "Concert Tickets" },
          { text: "Sports Events" },
          // ... other event ticket options
        ],
      },
      // ... other booking and ordering subcategories
    ],
  },

  // ... other main categories with third-level subcategories
]

    };
  },
};
</script>

<style>
/* since nested groupes are not supported we have to use 
       regular css for the nested dropdowns 
    */
li > ul {
  transform: translatex(100%) scale(0);
}
li:hover > ul {
  transform: translatex(101%) scale(1);
}
li > button svg {
  transform: rotate(-90deg);
}
li:hover > button svg {
  transform: rotate(-270deg);
}

/* Below styles fake what can be achieved with the tailwind config
       you need to add the group-hover variant to scale and define your custom
       min width style.
         See https://codesandbox.io/s/tailwindcss-multilevel-dropdown-y91j7?file=/index.html
         for implementation with config file
    */
.group:hover .group-hover\:scale-100 {
  transform: scale(1);
}
.group:hover .group-hover\:-rotate-180 {
  transform: rotate(180deg);
}
.scale-0 {
  transform: scale(0);
}
.min-w-32 {
  min-width: 4rem;
}
</style>
