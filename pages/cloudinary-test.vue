<template>
  <main>
    <h1>Cloudinary Test</h1>
    <h2>Cloud Name: {{ cloud }}</h2>
    <Thumbnail />
  </main>
</template>

<script>
import Thumbnail from '~/components/Thumbnail'
export default {
  components: {
    Thumbnail
  },
  computed: {
    cloud() {
      return process.env.CLOUDINARY_CLOUD_NAME
    }
  }
}
</script>
<style lang="scss">
</style>
