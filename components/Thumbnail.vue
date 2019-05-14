<template>
  <img :src="imageSrc">
</template>

<script>
import cloudinary from 'cloudinary-core'
const cloudName = process.env.CLOUDINARY_CLOUD_NAME
const cl = new cloudinary.Cloudinary({ cloud_name: cloudName, secure: true })

export default {
  computed: {
    imageSrc() {
      return cl.url('serenity_6b96_3360x2100_bgjde7.jpg', {
        width: 500,
        crop: 'fill'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
