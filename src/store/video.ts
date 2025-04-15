import { defineStore } from 'pinia'
// import artists from '../constants/artists'
import type { Artist } from '../types/artists'
import axios from '../plugins/axios'

export const useArtistsStore = defineStore('artists', {
  state: () => ({
    artists: [] as Artist | []
  }),
  actions: {
    async fetchArtists(){
      try {
        const res = await axios.get('artists/')
        this.artists = res.data
        console.log('Artists fetched successfully')
      } catch (error: any) {
        throw new Error(error)
      }
    }
  }
})
