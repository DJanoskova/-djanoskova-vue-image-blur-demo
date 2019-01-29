<template>
  <div id="app">
    <div class="image-gallery">
      <p>
        Pick an image to preview:
      </p>
      <div
        class="image-preview"
        v-for="image in images"
        :key="image.large"
        @click="selectedImage = image">
        <img :src="image.thumb" alt="image.text">
      </div>
    </div>

    <template v-if="selectedImage">
      <ImageBlur
        width="390"
        height="500"
        :image="selectedImage.large"
        :thumb="selectedImage.thumb"/>
      <p>
        <a :href="selectedImage.link" target="_blank">Photo by {{ selectedImage.author }} on Unsplash</a>
      </p>
    </template>

    <h4><a href="https://github.com/DJanoskova/Vue.js-BlurryImageLoad" target="_blank">BlurryImageLoad @ GitHub</a></h4>
  </div>
</template>

<script>
import { images } from './const'
import ImageBlur from './components/ImageBlur'

export default {
  data () {
    return {
      images: images,
      selectedImage: null
    }
  },
  components: {
    ImageBlur
  }
}
</script>

<style lang="scss">
body {
  background: black;
  color: rgb(150, 150, 150);
}

a {
  color: rgb(150, 150, 150);
}

#app {
  font-family: Georgia, Serif;
  margin: 20px auto;
  text-align: center;
}

.image-gallery {
  margin: 40px;
}

.image-preview {
  width: 70px;
  height: 70px;
  display: inline-block;
  margin: 5px;
  overflow: hidden;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.9;
  cursor: pointer;
}

.image-preview img:hover {
  opacity: 1;
}
</style>
