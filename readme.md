# Prior to install

Setup firebase environment variable on circle_ci

firebase functions:config:set envs.cloudinary_cloud_name=$CLOUDINARY_CLOUD_NAME
firebase deploy --only functions
