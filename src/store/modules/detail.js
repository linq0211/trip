import { getDetailInfos } from "@/services";
import { defineStore } from "pinia";

const useDetailStore = defineStore("detail", {
  state: () => ({
    detailInfos: {}
  }),
  actions: {
    async fetchDetailInfos(houseId) {
      const res = await getDetailInfos(houseId)
      this.detailInfos = res.data
    }
  }
})

export default useDetailStore