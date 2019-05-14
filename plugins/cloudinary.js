import Vue from 'vue'
import Cloudinary from 'cloudinary-vue'

Vue.use(Cloudinary, {
  configuration: {
    // cloudName: 'demo',
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY
    // secure: true
  }
})
