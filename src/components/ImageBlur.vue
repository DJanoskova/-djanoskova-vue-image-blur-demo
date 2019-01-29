<template>
  <div class="image-blur" :style="styleDimensions">
    <img class="image-blur__thumb" ref="thumb" v-if="thumb" src="">
    <img class="image-blur__large" ref="image" src="" :class="{'loaded': loaded}" v-if="loadedThumb">
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    },
    thumb: {
      type: String
    },
    width: {
      type: String
    },
    height: {
      type: String
    }
  },
  data () {
    return {
      loaded: false,
      loadedThumb: false,
      loadingImage: null
    }
  },
  methods: {
    async initLoad () {
      this.loaded = false
      this.loadedThumb = false
      await this.handleLoadThumb()
      await this.handleLoadImage()
    },
    loadImage (image, url) {
      return new Promise(resolve => {
        const downloadingImage = new Image()
        downloadingImage.onload = function () {
          image.src = this.src
          resolve()
        }
        downloadingImage.src = url
      })
    },
    async handleLoadThumb () {
      const thumb = this.$refs.thumb
      if (!thumb) return
      await this.loadImage(thumb, this.thumb)
      this.loadedThumb = true
    },
    async handleLoadImage () {
      const image = this.$refs.image
      if (!image) return
      await this.loadImage(image, this.image)
      setTimeout(() => {
        this.loaded = true
      }, 20)
    }
  },
  computed: {
    styleDimensions () {
      const dimensions = {}
      if (this.width) dimensions.width = this.width + 'px'
      if (this.height) dimensions.height = this.height + 'px'
      return dimensions
    }
  },
  watch: {
    image () {
      this.initLoad()
    }
  },
  mounted () {
    this.initLoad()
  }
}
</script>

<style>
.image-blur {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.image-blur img {
  transition: 0.4s;
  object-fit: cover;
  width: 100%;
  height: 100%;
  filter: blur(30px);
  position: absolute;
  left: 0;
  top: 0;
}

.image-blur__large {
  opacity: 0;
}

.image-blur__large.loaded {
  filter: blur(0);
  opacity: 1;
}
</style>