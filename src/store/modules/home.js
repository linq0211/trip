import { getHomeCategories, getHomeHotSuggests, getHomeHouseList } from "@/services";
import { defineStore } from "pinia";

const startDate = new Date()
const endDate = new Date().setTime(startDate.getTime()+24*60*60*1000)

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houseList: [],  
    startDate,
    endDate
  }),
  actions: {
    async fetchHotSuggests() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategories() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseList() {
      const res = await getHomeHouseList(this.currentPage)
      this.houseList.push(...res.data)
      this.currentPage++
    }
  }
})

export default useHomeStore