import { createStore } from 'vuex'
import journalModule from "../modules/daybook/store/journal";
const store = createStore({
    mdoules:{        
            journal: journalModule
    }
})

export default store