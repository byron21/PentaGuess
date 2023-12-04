<template>
    <div class="bg-stone-400 text-white text-2xl h-screen">
        <HeaderComponent></HeaderComponent>

        <div>Bet History</div>

        <table class="table-auto mx-auto">
            <thead>
                <tr>
                    <th>Player</th>
                    <th>Bet Status</th>
                    <th>Date Played</th>
                    <th>Numbers</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="bet in this.bets" :key="bet.id">
                    <td class="text-gray-800">{{ bet.userName }}</td>
                    <td class="text-gray-800">{{ bet.betStatus }}</td>
                    <td class="text-gray-800">{{ epochToDate(bet.playedOn) }}</td>
                    <td v-for="number in bet.numbers" :key="number">
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
    name: "BetHistory",
    props: {
        number: String,
    },
    data() {
        return {
            bets: [],
        }
    },
    components: { HeaderComponent },
    async created() {
        try {
            // https://pentaguess-default-rtdb.europe-west1.firebasedatabase.app/bets.json?orderBy="userName"&equalTo="byron2@arx.net"
            const response = await axios.get(process.env.VUE_APP_FIREBASE_BET_URL, { params: this.axiosParams });
            this.bets = response.data;

            // Object.keys(this.bets).forEach(key => {
            //     const betValue = this.bets[key];
            //     console.log(`${key}: ${betValue}`);
            //     const bet = Object.assign({}, betValue);
            //     console.log(bet);
            //     bet.numbers.sort();
            // });

        } catch (error) {
            console.error(error);
        }
    },
    computed: {
        axiosParams() {
            const params = new URLSearchParams();
            params.append('orderBy', '"userName"');
            params.append('equalTo', '"byron2@arx.net"');
            return params;
        }
    },
    methods: {
        epochToDate(epoch) {
            let objectDate = new Date(epoch * 1000);
            let day = objectDate.getDate();
            let month = objectDate.getMonth();
            let year = objectDate.getFullYear();
            return day + "/" + month + "/" + year;
        }
    }
};
</script>