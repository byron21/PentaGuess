<template>
    <div class="bg-amber-950 text-white text-2xl h-screen">
        <HeaderComponent></HeaderComponent>
        <div>Find your bets bellow</div>
        <div>Bet History</div>
        <div class="grid grid-cols-3">
                <p>Player</p>
                <p>Bet Status </p>
                <p>Date Played</p>
            </div>
        <div v-for="bet in this.betHistoryArray" :key="bet.id">
            <div class="grid grid-cols-3">
                <p>{{ bet.userName }}</p>
                <p>{{ bet.betStatus }}</p>
                <p>{{ bet.playedOn }}</p>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderComponent from './HeaderComponent.vue';

export default {
    name: "BetHistory",
    props: {
        number: String,
    },
    data() {
        return {
            betHistoryArray: [
                {
                    userName: "byron@arx.net",
                    betStatus: 0,
                    playedOn: 1701431898,
                    drawFinish: true,
                    drawDate: 1701431598,
                    id: 1400088111
                },
                {
                    userName: "byron@arx.net",
                    betStatus: 2,
                    playedOn: 1701431898,
                    drawFinish: true,
                    drawDate: 1701431598,
                    id: 1400088112
                },
                {
                    userName: "byron@arx.net",
                    betStatus: 4,
                    playedOn: 1701431898,
                    drawFinish: true,
                    drawDate: 1701431598,
                    id: 1400088113
                }
            ]
        }
    },
    components: { HeaderComponent }
};
</script>