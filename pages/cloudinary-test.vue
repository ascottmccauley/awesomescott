<template>
  <main>
    <h1>Cloudinary Test</h1>
    <st-cloudinary
      cloud-name="demo"
      public-id="lady"
      width="200"
      height="200"
      crop="fill"
    />
    <st-cloudinary
      :cloud-name="cloud"
      public-id="20170615-DSC08186_akq0yz"
      width="200"
      height="200"
      crop="fill"
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
