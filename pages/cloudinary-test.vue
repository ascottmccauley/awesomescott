<template>
  <main>
    <h1>Cloudinary Test</h1>
    <h2>Cloud Name: {{ cloud }}</h2>
    <cld-image
      cloudName="demo"
      publicId="sample"
      crop="scale"
      width="200"
    />
    <cld-image
      publicId="sample"
      crop="scale"
      width="200"
    />
    <cld-image
      publicId="20170615-DSC08186_akq0yz"
      crop="scale"
      width="200"
    />
    <cld-image
      :cloud-name="cloud"
      publicId="sample"
      lazy
      crop="scale"
      width="300"
    />
  </main>
</template>

<script>
export default {
  computed: {
    cloud() {
      return process.env.CLOUDINARY_CLOUD_NAME
    }
  }
}
</script>
<style lang="scss">
</style>
