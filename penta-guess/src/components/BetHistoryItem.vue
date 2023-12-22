<template>
    <div class="bg-stone-400 text-white text-2xl">
        <HeaderComponent></HeaderComponent>

        <div>Bet History Item</div>

        <table class="table-auto mx-auto">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Bet Status</th>
                    <th>Date Played</th>
                    <th></th>
                    <th>Draw Numbers</th>
                    <th>Player Numbers</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bet in this.bets" :key="bet.id">
                    <td class="text-gray-800">{{ bet.userName }}</td>
                    <td class="text-gray-800">{{ bet.betStatus }}</td>
                    <td class="text-gray-800">{{ epochToDate(bet.playedOn) }}</td>
                    <td></td>
                    <td v-for="number in bet.systemNumbers" :key="number">
                        <h1 class="w-16 font-mono font-bold text-orange-400 rounded-full bg-gray-800 p-3 m-3">
                            {{ number }}
                        </h1>
                    </td>
                    <td v-for="number in bet.userNumbers" :key="number">
                        <h1 class="w-16 font-mono font-bold text-orange-400 rounded-full bg-gray-800 p-3 m-3">
                            {{ number }}
                        </h1>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';
import axios from 'axios';

export default {
    name: "BetHistoryItem",
    props: {
        number: String,
    },
    data() {
        return {
            bets: [],
        }
    },
    mounted() {
        if (this.$store.state.userEmail === "") {
            this.$router.push({ name: 'login' });
        }
    },
    components: { HeaderComponent },
    async created() {
        try {
            // https://pentaguess-default-rtdb.europe-west1.firebasedatabase.app/bets.json?orderBy="userName"&equalTo="byron2@arx.net"
            const response = await axios.get(process.env.VUE_APP_FIREBASE_BET_URL, { params: this.axiosParams });
            this.bets = response.data;
        } catch (error) {
            console.error(error);
        }
    },
    computed: {
        axiosParams() {
            const userEmail = this.$store.state.userEmail;
            const params = new URLSearchParams();
            params.append('orderBy', '"userName"');
            params.append('equalTo', '"' + userEmail + '"');
            return params;
        }
    },
    methods: {
        epochToDate(epoch) {
            let objectDate = new Date(epoch * 1000);
            let day = objectDate.getDate();
            let month = objectDate.getMonth();
            let year = objectDate.getFullYear();
            let hour = objectDate.getHours();
            let minutes = objectDate.getMinutes();
            return day + "/" + month + "/" + year + " " + hour + ":" + minutes;
        }
    }
};
</script>