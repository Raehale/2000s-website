<script setup>
import { ref } from 'vue'
import viteLogo from '../assets/vite.svg'
import vueLogo from '../assets/vue.svg'
import sparkleCoffeeRat from '../assets/sparkleCoffeeRat.gif';
import purpleCd from '../assets/purple-cd.png';
import ratFace from '../assets/purple-rat-face.png';

const count = ref(0)
</script>

<template>
  <img :src="purpleCd" width="400" class="cd-graphic" />

  <section id="center">
    <div class="hero">
      <!-- TODO:: rat graphic here, sparkly one -->
      <img :src="sparkleCoffeeRat" width="170" />
    </div>
    <div>
      <h1>Rae's Website</h1>
      <p>I never made a cool early 2000s website so I am fulfillying that dream now.</p>
    </div>
    <!-- TODO:: Make this button do smthin else -->
    <button type="button" class="counter" @click="count++">
      Count is {{ count }}
    </button>
  </section>

  <div class="ticks"></div>

  <section id="next-steps">
    <div id="docs" class="window-section light-pink">
      <div class="window-header">
        <h2>About Me</h2>
        <svg class="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#social-icon"></use>
        </svg>
      </div>
      <!-- TODO:: that sucks -->
       <div class="window-body">
        <p>My personal and professional thingies,, like stuffs.</p>
        <ul>
          <li>
            <a href="https://vite.dev/" target="_blank">
              Personal
            </a>
          </li>
          <li>
            <a href="https://vuejs.org/" target="_blank">
              Professional
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="social" class="window-section dark-blue">
      <div class="window-header">
        <h2>Connect with me</h2>
        <svg class="icon" role="presentation" aria-hidden="true">
          <use href="/icons.svg#social-icon"></use>
        </svg>
      </div>
      <div class="window-body">
        <p>Let me know what's goin on, how you feelin?</p>
        <ul>
          <li>
            <a href="https://github.com/Raehale" aria-label="Rae Haley's Github Profile" target="_blank">
              <svg class="button-icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#github-icon"></use>
              </svg>
              GitHub
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/rae-haley-b30239215/" aria-label="Rae Haley's LinkedIn Profile" target="_blank">
              <svg class="button-icon" role="presentation" aria-hidden="true">
                <use href="/icons.svg#linkedin-icon"></use>
              </svg>
              LinkedIn
            </a>
          </li>
          <li>
            <a href="https://x.com/vite_js" target="_blank">
              <svg class="button-icon" role="presentation" aria-hidden="true">
              </svg>
              Form
            </a>
          </li>
          <li>
            <a href="https://bsky.app/profile/vite.dev" target="_blank">
              <svg class="button-icon" role="presentation" aria-hidden="true">
              </svg>
              Pics
            </a>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <img :src="ratFace" width="200" class="rat-face-graphic" />

  <div class="ticks"></div>
  <section id="spacer"></section>
</template>
