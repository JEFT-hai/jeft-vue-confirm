<!--
 * @Author: your name
 * @Date: 2020-05-19 16:23:20
 * @LastEditTime: 2020-05-20 10:05:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \jeft-vue-confirm\packages\confirm\main.vue
--> 
 <template>
  <div class="pop-up"
       v-if="show">
    <div class="popup-mask"
         v-if="hasMark"></div>
    <transition name="bottom">
      <div :class="['popup-note', 'bottom', {'popup-note-noBg': !bg}]">
        <div class="popup-note-bg-wrap">
          <img class="popup-note-bg" v-if="bg" :src="bg" alt="confirm_bg">
        </div>
        <div class="pop-content">
          <div :class="['pop-tit', {centerTitle:!msg}]">{{title}}</div>
          <p class="pop-note pop-subTit">
            <span class="msg"
                  v-html="msg"></span>
          </p>
          <div class="btn-wrapper"
               v-if="type == 'alert'"
               @click.stop="alertClick">
            <span class="btn btn-block yes-btn">{{alertBtnText}}</span>
          </div>
          <div class="btn-wrapper"
               v-if="type == 'confirm'">
            <span @touchstart.prevent="noClick"
                  class="btn">{{noBtnText}}</span>
            <span @touchstart.prevent="yesClick"
                  class="btn yes-btn">{{yesBtnText}}</span>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: '提示'
    },
    msg: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'alert'
    },
    alertBtnText: {
      type: String,
      default: '我知道了'
    },
    yesBtnText: {
      type: String,
      default: '确定'
    },
    noBtnText: {
      type: String,
      default: '取消'
    },
    hasMark: {
      type: Boolean,
      default: true
    },
    bg: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      promiseStatus: null,
      show: false
    }
  },
  methods: {
    confirm () {
      let _this = this
      this.show = true
      return new Promise(function(resolve, reject) {
        _this.promiseStatus = { resolve, reject }
      })
    },
    noClick () {
      this.show = false
      this.promiseStatus && this.promiseStatus.reject()
    },
    yesClick () {
      this.show = false
      this.promiseStatus && this.promiseStatus.resolve()
    },
    alertClick () {
      this.show = false
      this.promiseStatus && this.promiseStatus.resolve()
    }
  }
}
</script>
<style lang="less">
.pop-up {
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    z-index: 20000;
    display: flex;
    align-items: center;
    .popup-mask {
      position: absolute;
      height: 100%;
      width: 100%;
      top: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.65);
      z-index: 1;
    }
    .popup-note {
      position: relative;
      width:81.85vw;
      // height:72.31vw;
      z-index: 2;
      margin: auto;
      background:white;
      border-radius: 3vw;
      font-size: 0;
      // background-image: url('../../assets/y/index/comfirm.jpg');
      // background-size:90%;
      // background-position: top center;
      // background-repeat: no-repeat;
      padding-bottom: 5vw;
      text-align: center;
      &-bg-wrap{
        margin: 0 auto;
        width: 90%;
        height: auto;
        max-height: 170px;
        .popup-note-bg {
          width: 100%;
          height: 100%;
        }
      }
      .pop-tit {
        font-size: 5.2vw;
        color: #333333;
        font-weight: 500;
        text-align: center;
        // margin-top: 40vw;
        width:100%;
        &.centerTitle {
          text-align: center;
        }
      }
      .pop-subTit {
        font-size: 4.17vw;
        color: #333333;
        margin-top:2vw;
        width:100%;
        text-align: center;
        font-weight: 500;
      }
      .btn-wrapper {
        margin-top: 3vw;
        display: flex;
        justify-content: space-around;
        padding:0 4vw;
        box-sizing: border-box;
        // margin-left: 20vw;
        > span {
          // flex: 1;
          // max-width: 43vw;
          width:27.68vw;
          height:9.63vw;
          display:flex;
          align-items: center;
          justify-content: center;
          border-radius: 6vw;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
          &.btn {
            letter-spacing: 1px;
            border:1px solid #e6e6e6;
            color:rgb(155, 155, 155);
            font-size: 5vw;
          }
          &.yes-btn {
            color:white;
            background:rgb(255, 37, 66);
            font-size: 5vw;
          }
          &.btn-block {
            max-width: 100%;
            // border-top: 1px solid #f0f0f0;
          }
        }
      }
      &-noBg{
        // background-color: #f00;
        height: auto;
        padding: 5vw 0;
        .pop-tit{
          margin: 3vw auto;
        }
        .pop-subTit {
          margin: 6vw 0;
        }
      }
    }
  }
</style>
