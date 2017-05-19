<template>
    <div>
        fsanfsaknflsa
        <img :src="image" alt="">
    </div>
</template>

<script>
  export default {
    data () {
      return {
        image: 'https://i1.kwejk.pl/k/obrazki/2012/04/5d12fa84b1ae6df938290e38ce8b52f8.jpg'
      }
    },

    head: {
      meta: [
        {property: 'og:image', content: this.image},
        {property: 'og:description', content: 'Ble ble ble :D'}
      ]
    }
  }
</script>
