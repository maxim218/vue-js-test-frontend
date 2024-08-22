"use strict";

import { defineStore } from "pinia";

export const usePlayerStore = defineStore('player', {
    state: () => ({ 
        xNum: 100,
        sString: 'Programming',
        coins: 0, 
        firstname: "", 
        lastname: "" 
    }), getters: {
        getCoins: (state) => state.coins,
        getFirstname: (state) => state.firstname,
        getLastname: (state) => state.lastname
    },
    actions: {
        incCount() { this.coins += 1 },
        setFirstname(value) { this.firstname = value },
        setLastname(value) { this.lastname = value }
    }
});