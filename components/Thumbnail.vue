<template>
  <img :src="imageSrc">
</template>

<script>
import cloudinary from 'cloudinary-core'
const cloudName = process.env.CLOUDINARY_CLOUD_NAME
const cl = new cloudinary.Cloudinary({ cloud_name: cloudName, secure: true })

export default {
  props: {
    publicId: { type: String, default: '20170616-DSC08204_qdllb1' }
  },
  computed: {
    imageSrc() {
      return cl.url(this.publicId + '.jpg', {
        quality: 'auto',
        width: 200,
        crop: 'fill',
        fetchFormat: 'auto'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
