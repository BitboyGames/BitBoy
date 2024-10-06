<template>
  <div class="home-wrapper-v3">

    <!-- 111 -->
    <div class="sp-track-1">
      <div class="sp-screen-1">

        <div class="mobile-video-box">
          <video class="sp1-video-3" 
            ref="sp1Video3" 
            muted 
            preload="auto" 
            playsinline="true" 
            x5-playsinline="true" 
            webkit-playsinline="true" 
            name="media"
            loop
            src="../../assets/video/sp-1-3.mp4">
          </video>
        </div>

        <div class="mask"></div>
        <div>
          <h1>BITBOY ONE</h1>
          <h3>Meet the Future of Web3 Gaming:<br/>⚡️ Play, Earn, Mine, Repeat.</h3>
        </div>
        <p>Bitcoin Summer Orange Edition &nbsp;<span>Sold Out</span></p>
        <video class="sp1-video" 
          ref="sp1Video1" 
          muted 
          preload="auto" 
          playsinline="true" 
          x5-playsinline="true" 
          webkit-playsinline="true" 
          name="media"  
          src="../../assets/video/sp-5-1.mp4"
          :style="{opacity: showSp1Video2 && 0}"
          @ended="onVideoEnded">
        </video>
        <video class="sp1-video-2" 
          ref="sp1Video2" 
          muted 
          preload="auto" 
          playsinline="true" 
          x5-playsinline="true" 
          webkit-playsinline="true" 
          name="media"
          loop
          :style="{opacity: showSp1Video2 && 1}"
          src="../../assets/video/sp-1-3.mp4">
        </video>
      </div>
    </div>

    <!-- 555 -->
    <div class="highlight-title">
      <p>Get the Highlights.</p> 
    </div>
    <div id="spTrack5" class="sp-track-5">
      <div class="sp-screen-5">
        <div class="sp-screen-5-content">

          <div class="slider-box" :style="{'transform': `translateY(-${videoPercent(87.5, 100) * 50}px)`, 'opacity': `${ 1 - videoPercent(87.5, 100)}`}">
            <div class="slider-row" :class="{'show': !!sp5Stage}">
              <div class="slider-row-item" :class="{'activity': sp5Stage == 'sp5-1'}">
                <div class="normal"></div>
                <div :style="{'transform': `translateX(${sliderPercent(0, 25)}%)`}" class="active"></div>
              </div>
              <div class="slider-row-item" :class="{'activity': sp5Stage == 'sp5-2'}">
                <div class="normal"></div>
                <div :style="{'transform': `translateX(${sliderPercent(25, 50)}%)`}" class="active"></div>
              </div>
              <div class="slider-row-item" :class="{'activity': sp5Stage == 'sp5-3'}">
                <div class="normal"></div>
                <div :style="{'transform': `translateX(${sliderPercent(50, 75)}%)`}" class="active"></div>
              </div>
              <div class="slider-row-item" :class="{'activity': sp5Stage == 'sp5-4'}">
                <div class="normal"></div>
                <div :style="{'transform': `translateX(${sliderPercent(75, 100)}%)`}" class="active"></div>
              </div>
            </div>
            <div class="slider-title">
              <div class="slider-title-item" :class="{'show': sp5Stage == 'sp5-1'}" :style="{'filter': `blur(${videoPercent(12.5, 25) * 10}px)`}">
                <h6>A Web3 Gaming Revolution</h6>
                <p>Seamless gaming meets<br/>blockchain mining</p>
              </div>
              <div class="slider-title-item" :class="{'show': sp5Stage == 'sp5-2'}" :style="{'filter': `blur(${videoPercent(37.5, 50) * 10}px)`}">
                <h6>Nostalgia Meets Tokenization</h6>
                <p>From retro classics to the latest<br/>on-chain games</p>
              </div>
              <div class="slider-title-item" :class="{'show': sp5Stage == 'sp5-3'}" :style="{'filter': `blur(${videoPercent(62.5, 75) * 10}px)`}">
                <h6>Play with Your Friends</h6>
                <p>Enjoy a social gaming experience<br/>online or IRL</p>
              </div>
              <div class="slider-title-item" :class="{'show': sp5Stage == 'sp5-4'}">
                <h6>More Rewarding Than Ever</h6>
                <p>Every game becomes a chance to earn Bitcoin<br/>and other cryptocurrencies</p>
              </div>
              
            </div>
          </div>

          <!-- <div class="sp5-video-box" :style="{'filter': `blur(${videoPercent(87.5, 100) * 100}px)`, 'opacity': `${ 1 - videoPercent(87.5, 100)}`}">
            <video class="sp5-video-1" ref="sp5Video1" muted width="100%" height="100%" preload="auto" playsinline="true" x5-playsinline="true" webkit-playsinline="true" name="media" loop  src="../../assets/video/sp-5-1.mp4"></video>
            <video class="sp5-video-2" ref="sp5Video2" :style="{'z-index': (sp5Percent >= 12.5) ? '1' : '-1', 'transform': `scale(${videoPercent(12.5, 25)})`, 'opacity': `${videoPercent(12.5, 25) + 0.2}`}" muted width="100%" height="100%" preload="auto" playsinline="true" x5-playsinline="true" webkit-playsinline="true" name="media" loop  src="../../assets/video/sp-5-2.mp4"></video>
            <video  class="sp5-video-3" ref="sp5Video3" :style="{'z-index': (sp5Percent >= 37.5) ? '2' : '-2', 'transform': `scale(${videoPercent(37.5, 50)})`, 'opacity': `${videoPercent(37.5, 50) + 0.2}`}" muted width="100%" height="100%" preload="auto" playsinline="true" x5-playsinline="true" webkit-playsinline="true" name="media" loop  src="../../assets/video/sp-5-1.mp4"></video>
            <video  class="sp5-video-4" ref="sp5Video4" :style="{'z-index': (sp5Percent >= 75) ? '3' : '-3', 'opacity': `${videoPercent(75, 87.5) + 0.2}`}" muted width="100%" height="100%" preload="auto" playsinline="true" x5-playsinline="true" webkit-playsinline="true" name="media" loop  src="../../assets/video/sp-5-2.mp4"></video>
          </div> -->

          <div class="sp5-video-box">
            <video class="sp5-video-1" ref="sp5Video1" muted width="100%" height="100%" preload="auto" playsinline="true" x5-playsinline="true" webkit-playsinline="true" name="media"  src="../../assets/video/sp-5-1.mp4"></video>
            <video class="sp5-video-2" ref="sp5Video2" :style="{'z-index': (sp5Percent >= 25) ? '1' : '-1'}" muted width="100%" height="100%" preload="auto" playsinline="true" x5-playsinline="true" webkit-playsinline="true" name="media"  src="../../assets/video/sp-5-2.mp4"></video>
            <video  class="sp5-video-3" ref="sp5Video3" :style="{'z-index': (sp5Percent >= 50) ? '2' : '-2'}" muted width="100%" height="100%" preload="auto" playsinline="true" x5-playsinline="true" webkit-playsinline="true" name="media"  src="../../assets/video/sp-5-3.mp4"></video>
            <video  class="sp5-video-4" ref="sp5Video4" :style="{'z-index': (sp5Percent >= 75) ? '3' : '-3'}" muted width="100%" height="100%" preload="auto" playsinline="true" x5-playsinline="true" webkit-playsinline="true" name="media"  src="../../assets/video/sp-5-4.mp4"></video>
          </div>

          <div class="sp-screen-5-content-title" :style="{'transform': `translateY(-${videoPercent(87.5, 100) * 50}px)`, 'opacity': `${ 1 - videoPercent(87.5, 100)}`}">
            <h5 :class="{'show': sp5Stage == 'sp5-1'}" :style="{'filter': `blur(${videoPercent(12.5, 25) * 10}px)`}">A gaming device designed to<br/>onboard the future.</h5>
            <h5 :class="{'show': sp5Stage == 'sp5-2'}" :style="{'filter': `blur(${videoPercent(37.5, 50) * 10}px)`}">A hybrid gaming experience<br/>bridging web2 to web3.</h5>
            <h5 :class="{'show': sp5Stage == 'sp5-3'}" :style="{'filter': `blur(${videoPercent(62.5, 75) * 10}px)`}">Play multiplayer games<br/>and stay connected.</h5>
            <h5 :class="{'show': sp5Stage == 'sp5-4'}">Play, Earn, Mine, and Repeat.</h5>
          </div>

        </div>
      </div>
    </div>

    <!-- 333 -->
    <div class="highlight-title">
      <p>The New Gaming Economy.</p> 
    </div>
    <div class="sp-track-3">
      <div class="sp-screen-3">

        <div class="text-box">
          <div class="text-content">
            <p>
              <span class="opacity-50">The world's first Web3 Gaming Device, a groundbreaking innovation powered by #Bitcoin + #GameFi + #DEPIN.</span>
              <span id="text-content-span1">{{ renderSpan.span1 }}</span>
            </p>
            <p>
              <span class="opacity-50">BitBoy offers a unique blend of nostalgia and modern innovation, fostering a strong community while delivering a hybrid gaming experience that encompasses both digital and physical realms, all deeply intertwined with the Bitcoin blockchain.</span>
              <span id="text-content-span2">{{ renderSpan.span2 }}</span>
            </p>
            <p>
              <span class="opacity-50">Get BitBoy and level up with legacy! Dive back into your childhood by playing any retro games, from classic to HTML games and on-chain ROM emulators, all synced with the cloud for Token and NFT rewards. Experience timeless gaming, forever preserved on the Bitcoin blockchain.</span>
              <span id="text-content-span3">{{ renderSpan.span3 }}</span>
            </p>
          </div>
        
        </div>

      </div>
    </div>

    <!-- 222 -->
    <div class="sp-track-2">
      <div class="sp-screen-2">

        <div class="sp2-video-box" @click="pauseBitboy()">
          <video id="newHomeBitboyVideo" ref="sp2-video" muted width="100%" height="100%" preload="auto" playsinline="true" x5-playsinline="true" webkit-playsinline="true" name="media" loop  src="../../../public/bitboy.mp4"></video>
        </div>

        <div class="sp2-video-mask" @click="playBitboy()" v-if="isShowVideoMask">
          <div class="sp2-video-mask-btn">
            <img src="@/assets/img/play-icon.svg" alt="">
          </div>
        </div>

      </div>
    </div>

    <!-- 444 -->
    <div class="highlight-title">
      <p>BitBoy Forever on Bitcoin.</p> 
    </div>
    <div class="sp-track-4">
      <div class="sp-screen-4">
        <div class="bitboy-preview">
          <iframe title="html-content" sandbox="allow-scripts" draggable="false" scrolling="no" width="100%" height="100%" frameborder="0" class="tw-w-full tw-h-full tw-object-contain tw-rounded-xl" :src="`https://assets.bitboy.games/content/1d800fc3a11915b9e169315b237f4067c3d139966af415c6df1d49b1102249fbi0`" style="background-color: transparent;"></iframe>
        </div>
        <p class="sp4-desc">Click and turn to explore BitBoy onchain</p>
        <p class="sp4-desc">Buy on
          <a href="https://magiceden.io/ordinals/marketplace/bitboy_one_genesis" target="_blank" rel="noopener noreferrer">
            MagicEden
          </a>
        </p>
      </div>
    </div>

    <!-- 666 -->
    <div class="highlight-title">
      <p>Hardware. Power the Future.</p> 
    </div>
    <div class="sp-track-6">
      <div class="sp-screen-6">
        <img src="@/assets/img/hardware/hardware.png" alt="">
        <div class="hardware-list">
          <div class="hardware-item">
            <img src="@/assets/img/hardware/display.png" alt="">
            <h6>Display</h6>
            <p>3.45” IPS screen</p>
          </div>
          <div class="hardware-item">
            <img src="@/assets/img/hardware/resolution.png" alt="">
            <h6>Resolution</h6>
            <p>640 × 480</p>
          </div>
          <div class="hardware-item">
            <img src="@/assets/img/hardware/memory.png" alt="">
            <h6>Memory</h6>
            <p>4GB LPDDR4</p>
          </div>
          <div class="hardware-item">
            <img src="@/assets/img/hardware/connectivity.png" alt="">
            <h6>Connectivity</h6>
            <p>Dual-band WiFi / Bluetooth 4.2</p>
          </div>
          <div class="hardware-item">
            <img src="@/assets/img/hardware/battery.png" alt="">
            <h6>Battery</h6>
            <p>Up to 8 Hours Game Play</p>
          </div>
          <div class="hardware-item">
            <img src="@/assets/img/hardware/os.png" alt="">
            <h6>OS</h6>
            <p>BitBoy OS</p>
          </div>
        </div>
      </div>
    </div>

    <div class="highlight-title">
      <p>FAQ</p> 
    </div>
    <div class="faq-box" :style=" {transform: `translateY(${textOption.mtTop})`}">
      <ComponentFaq />
    </div>

  </div>
</template>

<script>

// Vuex
import { mapState, mapMutations } from 'vuex'
// Mixins
import mixinFilters from '@/mixins/filters'
import mixinMethods from '@/mixins/methods'
// Components
import ComponentFaq from '@/components/faq'


export default {
  mixins: [ mixinFilters, mixinMethods ],
  components: {
    ComponentFaq
  },
  data () {
    return {

      textOption: {
        originSpan1: ['The', "world's", 'first', 'Web3', 'Gaming', 'Device,', 'a', 'groundbreaking', 'innovation', 'powered', 'by', '#Bitcoin', '+', '#GameFi', '+', '#DEPIN.'],
        originSpan2: ['BitBoy', 'offers', 'a', 'unique', 'blend', 'of', 'nostalgia', 'and', 'modern', 'innovation,', 'fostering', 'a', 'strong', 'community', 'while', 'delivering', 'a', 'hybrid', 'gaming', 'experience', 'that', 'encompasses', 'both', 'digital', 'and', 'physical', 'realms,', 'all', 'deeply', 'intertwined', 'with', 'the', 'Bitcoin', 'blockchain.'],
        originSpan3: ['Get', 'BitBoy', 'and', 'level', 'up', 'with', 'legacy!', 'Dive', 'back', 'into', 'your', 'childhood', 'by', 'playing', 'any', 'retro', 'games,', 'from', 'classic', 'to', 'HTML', 'games', 'and', 'on-chain', 'ROM', 'emulators,', 'all', 'synced', 'with', 'the', 'cloud', 'for', 'Token', 'and', 'NFT', 'rewards.', 'Experience', 'timeless', 'gaming,', 'forever', 'preserved', 'on', 'the', 'Bitcoin', 'blockchain.'],
        spanIndex: 0, 
      },

      isMobile: false,

      pageScrollY: 0, 
      sp5StartY: 0, 
      sp5EndY: 0,

      isShowVideoMask: true,

      sp2VideoIsPlay: false, 

      showSp1Video2: false,
    }
  },
  computed: {
    ...mapState(['currentEnvState']),

    sp5Percent () {
      let percent = 0
      if (this.pageScrollY < this.sp5StartY) {
        percent = -1
      }
      else if (this.pageScrollY >= this.sp5StartY && this.pageScrollY <= this.sp5EndY) {
        let range = this.sp5EndY - this.sp5StartY
        let current = this.pageScrollY - this.sp5StartY
        percent = (current / range * 100)
      }
      else if (this.pageScrollY > this.sp5EndY) {
        percent =  100
      }
      return percent
    },

    sp5Stage () {
      if (this.sp5Percent < 0) {
        return null
      } else if (this.sp5Percent >= 0 && this.sp5Percent < 25) {
        return 'sp5-1';
      } else if (this.sp5Percent >= 25 && this.sp5Percent < 50) {
        return 'sp5-2';
      } else if (this.sp5Percent >= 50 && this.sp5Percent < 75) {
        return 'sp5-3';
      } else if (this.sp5Percent >= 75 && this.sp5Percent <= 100) {
        return 'sp5-4';
      } else if (this.sp5Percent > 100) {
        return 'sp5-4';
      }
    },

    renderSpan () {
      let arr = [...this.textOption.originSpan1, ...this.textOption.originSpan2, ...this.textOption.originSpan3]
      let sliceIndex = this.textOption.originSpan1.length
      let sliceIndex2 = this.textOption.originSpan2.length


      let span1 = ''
      let span2 = ''
      let span3 = ''

      if (this.textOption.spanIndex <= sliceIndex) {
        span1 = arr.slice(0, this.textOption.spanIndex).join(' ')
      } else if (this.textOption.spanIndex > sliceIndex && this.textOption.spanIndex <= (sliceIndex + sliceIndex2)) {
        span1 = arr.slice(0, sliceIndex).join(' ')
        span2 = arr.slice(sliceIndex, this.textOption.spanIndex).join(' ')
      } else {
        span1 = arr.slice(0, sliceIndex).join(' ')
        span2 = arr.slice(sliceIndex, sliceIndex + sliceIndex2).join(' ')
        span3 = arr.slice(sliceIndex + sliceIndex2, this.textOption.spanIndex).join(' ')
      }

      return { span1, span2, span3 }
    },
    textLength() {
      return this.textOption.originSpan1.length + this.textOption.originSpan2.length + this.textOption.originSpan3.length
    }
  },
  watch: {
    sp5Stage: {
      handler (val) {
        if (val === 'sp5-1') {
          this.$refs.sp5Video1.pause()
          this.$refs.sp5Video1.currentTime = 0
          this.$refs.sp5Video1.play()
        } else if (val === 'sp5-2') {
          this.$refs.sp5Video2.pause()
          this.$refs.sp5Video2.currentTime = 0
          this.$refs.sp5Video2.play()
        } else if (val === 'sp5-3') {
          this.$refs.sp5Video3.pause()
          this.$refs.sp5Video3.currentTime = 0
          this.$refs.sp5Video3.play()
        } else if (val === 'sp5-4') {
          this.$refs.sp5Video4.pause()
          this.$refs.sp5Video4.currentTime = 0
          this.$refs.sp5Video4.play()
        }
      }
    }
  },
  created () {

  },
  mounted () {

    this.isMobile = this.isMobileFn()

    document.body.style.overflowX = 'hidden'

    this.settTextHeight()
    window.addEventListener('resize', this.settTextHeight)
    window.addEventListener('scroll', this.scrollView, { passive: false } )


    this.initVideo('sp2-video', true)
    this.initVideo('sp1Video1', true)
    this.initVideo('sp1Video2')

    this.initVideo('sp1Video3', true)


    this.initVideo('sp5Video1')
    this.initVideo('sp5Video2')
    this.initVideo('sp5Video3')
    this.initVideo('sp5Video4')

    this.initScrollRangeOfSP5()
  },
  methods: {

    onVideoEnded () {
      console.log('onVideoEnded')
      this.showSp1Video2 = true
      this.$refs.sp1Video2.play()
    },


    sliderPercent (x, y) {
      if (this.sp5Percent < x) {
        return -100
      }
      if (this.sp5Percent >= y) {
        return 100
      }

      const normalizedValue = (this.sp5Percent - x) / (y - x);

      const mappedValue = normalizedValue * 200 - 100;

      return mappedValue;
    },

    videoPercent (x, y) {
       if (this.sp5Percent < x) {
        return 0
      }
      if (this.sp5Percent >= y) {
        return 1
      }

      const normalizedValue = (this.sp5Percent - x) / (y - x);
      return normalizedValue;
  },

    initScrollRangeOfSP5 () {
      const element = document.getElementById('spTrack5');
      const rect = element.getBoundingClientRect();
      const startY = rect.top + window.scrollY + 60;
      const endY = startY + (window.innerHeight * 3);
      this.sp5StartY = startY
      this.sp5EndY = endY
    },

    initVideo (ref, isPlay) {
      let myVideo = this.$refs[ref]
      if (myVideo) {
        myVideo.style.opacity = '0';
        if (isPlay) {
          myVideo.play();
        }
        myVideo.setAttribute('controls','controls');
        this.$nextTick(() => {
          setTimeout(() => {
            myVideo.removeAttribute('controls');
            myVideo.style.opacity = '1';
          },0)
        })
      }
    },

    isMobileFn() {
      return !!navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
    },

    playBitboy () {
      if (this.sp2VideoIsPlay) {
        let myVideo  = this.$refs['sp2-video'];
        myVideo.muted = !myVideo.muted;
        myVideo.play();
        this.isShowVideoMask = false
        return
      }
      let myVideo  = this.$refs['sp2-video'];
      myVideo.currentTime = 0;
      myVideo.muted = !myVideo.muted;
      this.isShowVideoMask = false
      this.sp2VideoIsPlay = true;
    },

    pauseBitboy () {
      let myVideo  = this.$refs['sp2-video'];
      myVideo.pause();
      myVideo.muted = !myVideo.muted;
      this.isShowVideoMask = true
    },

    settTextHeight () {
      let textContent = document.querySelector('.text-content')
      if (textContent) {
        let pArr = textContent.querySelectorAll('p')

        pArr.forEach(p => {
          p.style.height = p.firstElementChild.offsetHeight + 'px'
        })

      }
    },

    scrollView (e) {

      this.pageScrollY = window.scrollY

      let domScrollHeight = window.innerHeight / 2;
      let maxStep = this.textLength; 
      let stepHeight = domScrollHeight/maxStep; 
      if(stepHeight <5){
        domScrollHeight = window.innerHeight / 3 * 2
        stepHeight = domScrollHeight/maxStep
      }
      let textBox = document.querySelector('.text-box');

      let changeTop = textBox.offsetTop - window.innerHeight/2
      if(window.scrollY - changeTop >= 0 && window.scrollY - changeTop < domScrollHeight){
        let step = Math.ceil((window.scrollY - changeTop) / stepHeight)
        this.textOption.spanIndex = step
      }else if(window.scrollY - changeTop <= 0){
        this.textOption.spanIndex = 0
      }else{
        this.textOption.spanIndex = maxStep
      }
    }
  }
}
</script>

<style lang="scss">
  @import "./index.scss";
  @import "./sp.scss";
  @import "./mobile.scss";
</style>

