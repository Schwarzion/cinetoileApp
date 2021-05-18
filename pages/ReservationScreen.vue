<template>
  <view>
    <button title="A venir" :on-press="() => changeMenu(false)" />
    <button title="Passées" :on-press="() => changeMenu(true)" />
    <reservation-list
      v-if="!switchMenu"
      class="text-container"
      v-for="reservation in incomingReservationList"
      :key="reservation.id"
      :item="reservation"
    />
    <reservation-list
      v-else
      class="text-container"
      v-for="reservation in passedReservationList"
      :key="reservation.id"
      :item="reservation"
    />
  </view>
</template>

<script>
import reservationList from "../components/reservationList.vue";
import {
  getPassedReservation,
  getIncomingReservation,
  editStatus,
} from "../services/reservation.service";

export default {
  components: { reservationList },
  data() {
    return {
      passedReservationList: [],
      incomingReservationList: [],
      switchMenu: false,
      firstSwitch: true,
    };
  },
  beforeMount() {
    this.incomingReservation();
  },
  props: {
    navigation: {
      type: Object,
    },
  },
  methods: {
    async passedReservation() {
      const res = await getPassedReservation();
      this.passedReservationList = res.data;
    },
    async incomingReservation() {
      const res = await getIncomingReservation();
      this.incomingReservationList = res.data;
    },
    async changeStatus(id, status) {
      const res = await editStatus(id, status);
    },
    changeMenu: function (bool) {
      console.warn(bool);
      if (this.firstSwitch) {
        this.passedReservation();
        this.firstSwitch = !this.firstSwitch;
      }
      this.switchMenu = bool;
    },
  },
};
</script>
