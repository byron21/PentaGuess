<template>
    <div class="text-white text-2xl">
        <HeaderComponent></HeaderComponent>
        <div class="flex flex-col p-16">
            <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div class="inline-block  py-2 sm:px-6 lg:px-8">
                    <div class="overflow-hidden">
                        <table class=" text-left text-sm font-light">
                            <thead class="bg-black w-full border-b font-medium dark:border-neutral-500">
                                <tr>
                                    <th scope="col" class="px-6 py-4">Bet Status</th>
                                    <th scope="col" class="px-6 py-4">Amount Won</th>

                                    <!-- <th scope="col" class="px-6 py-4">Player</th> -->
                                    <th scope="col" class="px-6 py-4">Date Played</th>
                                    <th scope="col" class="px-6 py-4">Numbers</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr @click="showBetItem()" v-for="bet in this.bets" :key="bet.id"
                                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                                    
                                    <td class="whitespace-nowrap px-6 py-4">{{ bet.betStatus }}</td>
                                    <td class="whitespace-nowrap px-6 py-4">{{ bet.amountWon }}</td>

                                    <!-- <td class="whitespace-nowrap px-6 py-4">{{ bet.userName }}</td> -->
                                    <td class="whitespace-nowrap px-6 py-4">{{ epochToDate(bet.playedOn) }}</td>
                                    <td v-for="number in bet.userNumbers" :key="number">
                                        <p
                                            class="w-16 font-mono font-bold text-orange-400 rounded-full bg-gray-800 p-3 m-3">
                                            {{ number }}
                                        </p>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

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
            loading: true
        }
    },
    mounted() {
        if (this.$store.state.userEmail === "") {
            this.$router.push({ name: 'login' });
        }
    },
    components: { HeaderComponent },
    async created() {
        this.loading = true;
        console.log("BEFORE FETCHING");
        console.log(this.bets);
        console.log(typeof (this.bets));

        try {
            // https://pentaguess-default-rtdb.europe-west1.firebasedatabase.app/bets.json?orderBy="userName"&equalTo="byron2@arx.net"
            const response = await axios.get(process.env.VUE_APP_FIREBASE_BET_URL, { params: this.axiosParams });
            // response.sort((a, b) => (b.playedOn > a.playedOn))
            console.log("get bets:");
            console.log(response);
            this.bets = response.data;
            
        } catch (error) {
            console.error(error);
        }
        finally {
            this.loading = false;
            console.log("FINALLY");
            console.log(this.bets);
            console.log(typeof (this.bets));
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
        },
        showBetItem() {
            this.$router.push({ name: 'betItem' }).catch(() => { });
        }
    }
};
</script>