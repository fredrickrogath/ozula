<template>
    <div class="mt-12 pt-12">
      <div class="mt-12 pt-12 rounded-md">
        <h1>
          <span data-char="O">O</span>
          <span data-char=".">Z</span>
          <span data-char="U">U</span>
          <span data-char=".">L</span>
          <span data-char="A">A</span>
          <!-- <span data-char=".">L</span>
          <span data-char="O">O</span>
          <span data-char=".">A</span>
          <span data-char="D">D</span>
          <span data-char=".">I</span>
          <span data-char="N">N</span>
          <span data-char=".">G</span> -->
        </h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    mounted() {
      var text = document.querySelector('h1');
      var char = text.querySelectorAll('span');
      var replaceChar = text.querySelectorAll('span:not([data-char="."])');
  
      var t1 = this.$gsap.timeline();
      t1.set(char, {
        yPercent: -110
      });
      t1.set(text, {
        autoAlpha: 1
      });
      t1.to(char, {
        duration: 1,
        yPercent: 0,
        stagger: 0.05,
        ease: "expo.inOut"
      }).to(replaceChar, {
        duration: 1,
        yPercent: 110,
        ease: "expo.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.1
      })
    }
  };
  </script>
  
  <style scoped>
  h1 {
    font-size: 6vw;
    display: flex;
    line-height: 0.95;
    font-weight: 700;
    letter-spacing: .05em;
    -webkit-text-stroke: 3px #FF4646;
    color: transparent;
    overflow: hidden;
    /* border: 1px solid #70b062; */
    margin: 0; /* Remove default margin */
  }
  
  h1 span {
    display: block;
    position: relative;
  }
  
  h1 span::before {
    content: attr(data-char);
    position: absolute;
    left: 0;
    top: 0;
    color: #FF4646;
    transform: translateY(-110%);
  }
  </style>
  