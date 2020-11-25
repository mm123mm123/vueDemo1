<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <Notes/>
    <Tags :data-source.sync="tags"/>
  </Layout>
</template>

<script>
import Tags from '@/components/money/Tags'
import Notes from '@/components/money/Notes'
import Types from '@/components/money/Types'
import NumberPad from '@/components/money/NumberPad'

export default {
  name: 'Money.vue',
  components: {NumberPad, Types, Notes, Tags},
  data() {
    return{
      tags:['衣','食','住','行','理财']
    }
  }
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
