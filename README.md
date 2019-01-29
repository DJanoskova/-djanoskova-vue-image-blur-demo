# Blurry image Load

### Demo
See the working example at [blurryimages.danajanoskova.sk](https://blurryimages.danajanoskova.sk).

### Component usage
```
<template>
 <ImageBlur
    width="390"
    height="500"
    :image="myImage.large"
    :thumb="myImage.thumb"/>
</template>
```
Either specify the width and height as props or style the .image-blur class to have fixed dimensions.

```
<script>
import ImageBlur from './components/ImageBlur'

export default {
  data () {
    return {
      myImage: {
        large: 'http://mysite.com/image_large.jpg',
        thumb: 'http://mysite.com/image_thumb.jpg'
      }
    }
  },
  components: {
    ImageBlur
  }
}
</script>
```

Check the component source for more information.