<template>
  <Layout class-prefix="layout">
    <NumberPad/>
    <Types/>
    <Notes/>
    <Tags/>
  </Layout>
</template>

<script>
import Tags from '@/components/money/Tags'
import Notes from '@/components/money/Notes'
import Types from '@/components/money/Types'
import NumberPad from '@/components/money/NumberPad'

export default {
  name: 'Money.vue',
  components: {NumberPad, Types, Notes, Tags}
}
</script>

<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
