<template>
    <!-- <h1>DayBookLayout</h1> -->
    <Navbar />
    <div class="d-flex">
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
//Metodo tradicional para importar componentes
// import Navbar from "../componentes/Navbar.vue";
// export default {
//     components: {
//         Navbar,
//     }
// }

import {defineAsyncComponent} from 'vue'

export default {
    components: {
        Navbar: defineAsyncComponent( () => import ('../componentes/Navbar.vue') ),
        EntryList: defineAsyncComponent( () => import ('../componentes/EntryList.vue') )
    }
}
</script>