<template>
  <!-- Faq -->
  <ul class="component-faq-wrapper">
    <!-- Q1 -->
    <li class="faq-item">
      <div class="faq-header">
        <p>What is BitBoy?</p>
        <i class="material-icons" :class="q1 ? 'bottom' : 'top'" @click="toggle(1)">expand_more</i>
      </div>
      <div class="faq-content" :class="q1 ? 'show' : 'hidden'">
        <p>
          BitBoy is a Bitcoin-based gaming console launched by Ordz Games. With BitBoy, users can earn points and farm
          airdrops by simply having the device running.
        </p>
      </div>
    </li>

    <!-- Q2 -->
    <li class="faq-item">
      <div class="faq-header">
        <p>How to Pre-order BitBoy One?</p>
        <i class="material-icons" :class="q2 ? 'bottom' : 'top'" @click="toggle(2)">expand_more</i>
      </div>
      <div class="faq-content" :class="q2 ? 'show' : 'hidden'">
        <p>
          Pre-orders for BitBoy One are available in phases:<br />BitBoy One Genesis (Sold Out): This initial phase
          featured a limited edition of 1,000 units in transparent orange, each bundled with an exclusive BitBoy One
          Genesis NFT.<br />BitBoy One Chapter 1: Offers a limited edition of 9,000 units in BTC Summer transparent
          orange.<br />Stay tuned for announcements on additional chapters. Details on how to participate in future
          pre-orders will be announced via twitter and discord.
        </p>
      </div>
    </li>

    <!-- Q8 -->
    <li class="faq-item">
      <div class="faq-header">
        <p>What are the Benefits of BitBoy Genesis vs. Chapter 1?</p>
        <i class="material-icons" :class="q8 ? 'bottom' : 'top'" @click="toggle(8)">expand_more</i>
      </div>
      <div class="faq-content" :class="q8 ? 'show' : 'hidden'">
        <p>Genesis Features:</p>
        <ul>
          <li>Exclusive NFT + physical in device</li>
          <li>More airdrops</li>
          <li>Extra mining points</li>
          <li>Extra referral points</li>
          <li>Game discounts</li>
          <li>Game season boosts</li>
          <li>More Dapp rewards</li>
          <li>Special event access</li>
        </ul>
        <p style="margin-top: 24px">Chapter 1 Features:</p>
        <ul>
          <li>Physical gaming device</li>
          <li>Airdrops</li>
          <li>Mining points</li>
          <li>Referral points</li>
          <li>Game access</li>
          <li>Exclusive Dapp usage and rewards</li>
        </ul>
      </div>
    </li>

    <!-- Q3 -->
    <li class="faq-item">
      <div class="faq-header">
        <p>How Much Will BitBoy One Cost?</p>
        <i class="material-icons" :class="q4 ? 'bottom' : 'top'" @click="toggle(4)">expand_more</i>
      </div>
      <div class="faq-content" :class="q4 ? 'show' : 'hidden'">
        <!-- <ul>
          <li><span>BitBoy Genesis NFT:</span> Play BitBoy both physically and virtually.</li>
          <li><span>Exclusive Mining:</span> Extra mining points to further boost rewards.</li>
          <li><span>Airdrops:</span> Receive valuable and exclusive airdrops.</li>
          <li><span>Ordz Games Access:</span> Unlimited access to all Ordz Games.</li>
          <li><span>Retro Emulation:</span> Relive the classics from NDS and PS1.</li>
          <li><span>Bitcoin Degens:</span> Special access for bitcoin degens.</li>
        </ul> -->
        <p>
          Standard Price for Chapter 1: $500<br />Discounted Rate: Available for Early Adopters and Referrals<br />Please
          note that pre-order prices do not include shipping fees.
        </p>
      </div>
    </li>

    <!-- Q4 -->
    <li class="faq-item">
      <div class="faq-header">
        <p>What Payment Methods Are Supported?</p>
        <i class="material-icons" :class="q3 ? 'bottom' : 'top'" @click="toggle(3)">expand_more</i>
      </div>
      <div class="faq-content" :class="q3 ? 'show' : 'hidden'">
        <p>
          Chapter 1 supports payments in both BTC and USDT. Payments may be made from any wallet, and you are free to
          use a different address for payments.
        </p>
        <!-- <p>The public preorder price for the Genesis is 0.01 BTC. Enjoy discounted rates if you qualify:</p>
        <p><span>GTD WL:</span> 30% off for OG Cartridge holders and Ordz asset stakers.</p>
        <p><span>FCFS WL:</span> 10% off for members of the Ordinals community raffle winners.</p>
        <p>Please note that all prices do not include shipping fees.</p> -->
      </div>
    </li>

    <!-- Q6 -->
    <li class="faq-item">
      <div class="faq-header">
        <p>What Is The Referral Program?</p>
        <i class="material-icons" :class="q5 ? 'bottom' : 'top'" @click="toggle(5)">expand_more</i>
      </div>
      <div class="faq-content" :class="q5 ? 'show' : 'hidden'">
        <p>
          Once you connect your Twitter account, you will receive an exclusive referral link. Use this link to earn
          points and enjoy great benefits when others pre-order using it!<br />Additionally, all holders who pre-ordered
          before will get a $450 discount on referral links for 2 weeks. Check your referral link on the
          <a href="/profile" target="_blank">Profile page</a>.
        </p>
      </div>
    </li>

    <!-- Q9 -->
    <li class="faq-item">
      <div class="faq-header">
        <p>How Do I Receive My Physical BitBoy If I Purchase a Genesis?</p>
        <i class="material-icons" :class="q9 ? 'bottom' : 'top'" @click="toggle(9)">expand_more</i>
      </div>
      <div class="faq-content" :class="q9 ? 'show' : 'hidden'">
        <p>
          Although all Genesis units are Sold Out, you can purchase one on
          <a href="https://magiceden.io/ordinals/marketplace/bitboy_one_genesis" target="_blank">Magic Eden</a>. All
          BitBoy One Genesis holders will receive a physical version of their Ordinal. Simply connect your wallet with
          Genesis to add your shipping address <a href="/profile" target="_blank">Here</a>.
        </p>
      </div>
    </li>

    <!-- Q5 -->
    <li class="faq-item">
      <div class="faq-header">
        <p>When Will BitBoy One Be Delivered?</p>
        <i class="material-icons" :class="q7 ? 'bottom' : 'top'" @click="toggle(7)">expand_more</i>
      </div>
      <div class="faq-content" :class="q7 ? 'show' : 'hidden'">
        <p>
          Early Batches: Scheduled for delivery by the end of Q4 2024.<br />Subsequent Deliveries: Will proceed
          progressively after the initial batch.
        </p>
      </div>
    </li>

    <!-- Q10 -->
    <li class="faq-item">
      <div class="faq-header">
        <p>Which Countries Will BitBoy One Be Available in?</p>
        <i class="material-icons" :class="q10 ? 'bottom' : 'top'" @click="toggle(10)">expand_more</i>
      </div>
      <div class="faq-content" :class="q10 ? 'show' : 'hidden'">
        <p>
          We strive to make BitBoy One available in as many markets as possible and may add more countries and regions
          before shipping begins. Alternative transportation solutions may also be available.
        </p>
      </div>
    </li>

    <!-- Q7 -->
    <li class="faq-item">
      <div class="faq-header">
        <p>Can I Change My Shipping Address After Placing an Order?</p>
        <i class="material-icons" :class="q6 ? 'bottom' : 'top'" @click="toggle(6)">expand_more</i>
      </div>
      <div class="faq-content" :class="q6 ? 'show' : 'hidden'">
        <p>
          Yes, you can update your shipping information anytime before your order is dispatched. Simply access
          <a href="/profile" target="_blank">your order</a> details to make changes.
        </p>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'ComponentFaq',
  data() {
    return {
      q1: true,
      q2: false,
      q3: false,
      q4: false,
      q5: false,
      q6: false,
      q7: false,
      q8: false,
      q9: false,
      q10: false
    }
  },
  methods: {
    toggle(index) {
      if (index === 1) this.q1 = !this.q1
      if (index === 2) this.q2 = !this.q2
      if (index === 3) this.q3 = !this.q3
      if (index === 4) this.q4 = !this.q4
      if (index === 5) this.q5 = !this.q5
      if (index === 6) this.q6 = !this.q6
      if (index === 7) this.q7 = !this.q7
      if (index === 8) this.q8 = !this.q8
      if (index === 9) this.q9 = !this.q9
      if (index === 10) this.q10 = !this.q10
    }
  }
}
</script>

<style scoped>
.component-faq-wrapper {
  width: 100%;
}
.component-faq-wrapper .faq-item {
  padding: 32px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.15);
}
.component-faq-wrapper .faq-item:first-of-type {
  padding-top: 0;
}
.component-faq-wrapper .faq-item .faq-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.component-faq-wrapper .faq-item .faq-header p {
  font-weight: bold;
  font-size: 20px;
  line-height: 1.4;
  color: #fff;
}
.component-faq-wrapper .faq-item .faq-header i {
  user-select: none;
  border: 1px solid #fff;
  display: block;
  width: 28px;
  height: 28px;
  background: #fff;
  border-radius: 50%;
  text-align: center;
  line-height: 30px;
  color: #000;
  font-size: 26px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}
.component-faq-wrapper .faq-item .faq-header i:hover {
  background: transparent;
  color: var(--theme-color);
  border-color: var(--theme-color);
}
.component-faq-wrapper .faq-item .faq-content {
  padding-top: 24px;
}
.component-faq-wrapper .faq-item .faq-content p,
.component-faq-wrapper .faq-item .faq-content li {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  line-height: 28px;
  font-weight: normal;
}
.component-faq-wrapper .faq-item .faq-content p > span,
.component-faq-wrapper .faq-item .faq-content li > span {
  font-weight: bold;
  color: rgba(255, 255, 255, 1);
}
.component-faq-wrapper .faq-item .faq-content p > a,
.component-faq-wrapper .faq-item .faq-content li > a {
  transition: all 0.2s ease-in-out;
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
}
.component-faq-wrapper .faq-item .faq-content p > a:hover,
.component-faq-wrapper .faq-item .faq-content li > a:hover {
  color: var(--theme-color);
}
.component-faq-wrapper .faq-item .faq-content ul {
  list-style: inside;
  padding-left: 16px;
}
.component-faq-wrapper .show {
  display: block;
}
.component-faq-wrapper .hidden {
  display: none;
}
.component-faq-wrapper .bottom {
  transform: rotate(180deg);
}
.component-faq-wrapper .top {
  transform: rotate(0);
}
@media screen and (max-width: 540px) {
  .component-faq-wrapper .faq-item .faq-header p {
    font-size: 16px;
  }
  .component-faq-wrapper .faq-item .faq-content p {
    font-size: 14px;
  }
  .component-faq-wrapper .faq-item .faq-header i {
    width: 24px;
    height: 24px;
    font-size: 22px;
    line-height: 24px;
  }
}
</style>
