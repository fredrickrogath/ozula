<template>
    <div id="MainLayout" class="w-full fixed z-50">
        <div 
            id="TopMenu"
            class="w-full bg-[#FAFAFA] border-b md:block hidden"
        >
            <ul 
                class="
                    flex 
                    items-center 
                    justify-center
                    text-sm
                    text-gray-900
                    font-semibold 
                    px-2
                    h-10
                    bg-[#FAFAFA]
                    mx-auto 
                    max-w-[1200px] 
                "
            >
                <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
                    Sell on {{ 'appName' }}
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
                    Cookie Preferences
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
                    Help
                </li>
                <li class="border-r border-r-gray-400 px-3 hover:text-[#FF4646] cursor-pointer">
                    Buyer Protection
                </li>
                <li class="px-3 hover:text-[#FF4646] cursor-pointer">
                    <Icon name="ic:sharp-install-mobile" size="17"/>
                    App
                </li>
                <li 
                    @mouseenter="isAccountMenu = true"
                    @mouseleave="isAccountMenu = false"
                    class="relative flex items-center px-2.5 hover:text-[#FF4646] h-full cursor-pointer"
                    :class="isAccountMenu ? 'bg-white border z-40 shadow-[0_15px_100px_40px_rgba(0,0,0,0.3)]' : 'border border-[#FAFAFA]'"
                >
                    <Icon name="ph:user-thin" size="17"/>
                    Account
                    <Icon name="mdi:chevron-down" size="15" class="ml-5"/>

                    <div 
                        id="AccountMenu" 
                        v-if="isAccountMenu"
                        class="absolute bg-white w-[220px] text-[#333333] z-40 top-[38px] -left-[100px] border-x border-b"
                    >
                        <div v-if="!user">
                            <div class="text-semibold text-[15px] my-2 px-3">Welcome to Ozula</div>
                            <div class="flex items-center gap-1 px-3 mb-2">
                                <NuxtLink 
                                    to="/auth"
                                    class="bg-[#FF4646] text-center w-full text-[13px] rounded-sm text-white font-semibold p-1 pb-2"
                                >
                                    Login / Register
                                </NuxtLink>
                            </div>
                        </div>
                        <div class="border-b"/>
                        <ul class="bg-white ">
                            <li 
                                @click="navigateTo('/orders')"
                                class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
                            >
                            My Orders
                            </li>
                            <li 
                                v-if="user" 
                                @click="client.auth.signOut()"
                                class="text-[13px] py-2 px-4 w-full hover:bg-gray-200"
                            >
                                Sign out
                            </li>
                        </ul>
                        
                    </div>
                </li>
            </ul>
        </div>
        <div 
            id="MainHeader" 
            class="flex items-center w-full bg-white"
        >
            <div class="flex lg:justify-center justify-between gap-12 max-w-[1000px] w-full px-3 py-3 mx-auto">
                <NuxtLink to="/" class="min-w-[0px]">
                    <img 
                        width="40"
                        src="/emblem.png"
                    >
                </NuxtLink>

                <div class="max-w-[700px] w-full md:block hidden">
                    <div class="relative">
                        <div class="flex items-center border-2 rounded-md w-full border-[#FD374F]">
                            <input 
                                class="
                                    w-full
                                    placeholder-gray-400
                                    text-gray-400
                                    pl-3
                                    focus:outline-none
                                "
                                placeholder="kitchen accessories"
                                type="text"
                                v-model="searchItem"
                            >
                            <Icon 
                                v-if="isSearching" 
                                name="eos-icons:loading" 
                                size="25" 
                                class="mr-2"
                            />
                            <button class="flex items-center h-[100%] p-1.5 px-2 bg-[#FF4646]">
                                <Icon name="ph:magnifying-glass" size="20" color="#ffffff"/>
                            </button>
                        </div>

                        <div class="absolute bg-white max-w-[700px] h-auto w-full">
                            <div 
                                v-if="items && items.data" 
                                v-for="item in items.data" 
                                class="p-1"
                            >
                                <NuxtLink 
                                    :to="`/item/${item.id}`" 
                                    class="flex items-center justify-between w-full cursor-pointer hover:bg-gray-100"
                                >
                                    <div class="flex items-center">
                                        <img class="rounded-md" width="40" :src="item.url">
                                        <div class="truncate ml-2">{{ item.title }}</div>
                                    </div>
                                    <div class="truncate">${{ item.price / 100 }}</div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>
                
                <NuxtLink 
                    to="/shoppingcart"
                    class="flex items-center"
                >
                    <button 
                        class="relative md:block hidden"
                        @mouseenter="isCartHover = true"
                        @mouseleave="isCartHover = false"
                    >
                        <span 
                            class="
                                absolute 
                                flex 
                                items-center 
                                justify-center 
                                -right-[3px] 
                                top-0 
                                bg-[#FF4646] 
                                h-[17px] 
                                min-w-[17px] 
                                text-xs 
                                text-white
                                px-0.5 
                                rounded-full
                            "
                        >
                            {{ userStore.cart.length }}
                        </span>
                        <div class="min-w-[40px] text-gray-400">
                            <Icon 
                                name="ph:shopping-cart-simple-light" 
                                size="33" 
                                :color="isCartHover ? '#FF4646' : ''"
                            />
                        </div>
                    </button>
                </NuxtLink>

                <button 
                    @click="userStore.isMenuOverlay = true"
                    class="md:hidden block rounded-full p-1.5 -mt-[4px] hover:text-gray-200"
                >
                    <Icon name="radix-icons:hamburger-menu" size="30" />
                </button>
            </div>
        </div>
        <NavbarsMulitLevel></NavbarsMulitLevel>
    </div>

    <!-- <Loading v-if="userStore.isLoading" /> -->
    <!-- You can avoid the hydration error by wrapping the title with <client-only>...</client-only> -->

    <div class="lg:pt-[110px] md:pt-[100px] pt-[70px]"/>

    <slot />

    <!-- <Footer v-if="true"/> -->

</template>

<script setup>
// const appName = process.env.APP_NAME;
import { useUserStore } from '~/stores/user';
const userStore = useUserStore()

// const client = useSupabaseClient()
// const user = useSupabaseUser()
const user = null

let isAccountMenu = ref(false)
let isCartHover = ref(false)
let isSearching = ref(false)
let searchItem = ref('')
let items = ref(null)

// const searchByName = useDebounce(async () => {
//     isSearching.value = true
//     items.value = await useFetch(`/api/prisma/search-by-name/${searchItem.value}`)
//     isSearching.value = false
// }, 100)

watch(() => searchItem.value, async () => {
    if (!searchItem.value) { 
        setTimeout(() => {
            items.value = ''
            isSearching.value = false
            return
        }, 500)
    }
    searchByName() 
})
</script>
