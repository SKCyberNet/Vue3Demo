<template>
  <div class="home">
    <div class="bigScreen">
      <HeaderTab></HeaderTab>
      <div class="content">
        <ContentLeft class="contentLeft"></ContentLeft>
        <ContentCenter class="contentCenter"> </ContentCenter>
        <ContentRight class="contentRight"></ContentRight>
        <div class="ButtonArea">
          <div class="Button" @click="AddPOIs">加点</div>
          <div class="Button" @click="RemovePOIs">减点</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import HeaderTab from '@/components/layout/headerTab'
import ContentCenter from '@/components/home/contentCenter/contentCenter'
import ContentRight from '@/components/home/contentRight/contentRight'
import ContentLeft from '@/components/home/contentLeft/contentLeft'
import pois_request from '@/pois'

export default defineComponent({
  components: {
    HeaderTab,
    ContentCenter,
    ContentRight,
    ContentLeft
  },
  setup() {
    onMounted(() => {
      // console.log('home')
      __cy.SetupListener('Demo', (event) => {
        console.log('event :', event)
      })
      __cy.Connect('http://xxxxxxxx:pppp')
    })
    return {}
  },
  methods: {
    AddPOIs() {
      __cy.SendRequest('UpdatePOIs', pois_request, (result: any) => {
        console.log('Request Result : ', result)
      })
    },
    RemovePOIs() {
      __cy.SendRequest('DeleteAllPOIs', {}, (result: any) => {
        console.log('Request Result : ', result)
      })
    }
  }
})
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transform-origin: left top;
  .bigScreen {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .content {
      display: flex;
      justify-content: space-between;
      height: 100%;
      .contentLeft {
        width: 20%;
        background: rgba(0, 0, 0, 0.5);
        pointer-events: fill;
      }
      .contentCenter {
        width: 60%;
      }
      .contentRight {
        width: 20%;
        background: rgba(0, 0, 0, 0.5);
        pointer-events: fill;
      }
    }
  }
}

.ButtonArea {
  display: flex;
  position: absolute;
  bottom: 0;
  pointer-events: fill;
  left: 50%;
  transform: translate(-50%, 0);
}

.Button {
  padding: 10px 30px;
  background: #5757b7;
  color: white;
  font-size: 16px;
  margin-right: 12px;
}
</style>
