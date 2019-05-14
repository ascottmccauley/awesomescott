<template>
  <main>
    <h1>Cloudinary Test</h1>
    <h2>Cloud Name: {{ cloud }}</h2>
    <cld-image
      cloud-name="demo"
      public-id="sample"
      crop="scale"
      width="200"
    />
    <cld-image
      public-id="sample"
      crop="scale"
      width="200"
    />
    <cld-image
      public-id="20170615-DSC08186_akq0yz"
      crop="scale"
      width="200"
    />
    <cld-image
      :cloud-name="cloud"
      public-id="sample"
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
