<template>
    <div class="coverflow-container">
        <div class="coverflow" ref="coverflowRef" tabindex="0" @keydown="handleKeydown">
            <div
                v-for="(cover, index) in covers"
                :key="index"
                class="cover"
                :class="{ 'center': index === currentIndex }"
                :style="coverStyle(index)"
            >
                <img :src="cover.image" :alt="cover.title" />
                <div class="reflection"></div>
            </div>
        </div>
        <div class="controls">
            <button @click="prev" :disabled="currentIndex === 0">&lt; Previous</button>
            <button @click="next" :disabled="currentIndex === covers.length - 1">Next &gt;</button>
        </div>
        <div class="album-info">
            <h2>{{ currentCover.title }}</h2>
            <p>{{ currentCover.artist }}</p>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios';

let coversData;
await axios.get('http://localhost:3000/api/song/getAll').then((res) => {
    coversData = res.data.songs;
    console.log(coversData);
});

let covers = [];
for (let cover of coversData) {
    const coverEntry = {title: cover.name, artist: cover.artist, image: cover.cover};
    covers.push(coverEntry);
}

const currentIndex = ref(0)
const coverflowRef = ref(null)

const currentCover = computed(() => covers[currentIndex.value])

const coverStyle = (index) => {
    const offset = index - currentIndex.value
    const rotateY = offset * 45
    const translateZ = Math.abs(offset) * 50
    const opacity = 1 - Math.abs(offset) * 0.3

    return {
        transform: `translateX(${offset * 50}%) rotateY(${rotateY}deg) translateZ(${-translateZ}px)`,
        opacity: opacity,
        zIndex: covers.length - Math.abs(offset)
    }
}

const next = () => {
    if (currentIndex.value < covers.length - 1) {
        currentIndex.value++
    }
}

const prev = () => {
    if (currentIndex.value > 0) {
        currentIndex.value--
    }
}

const handleKeydown = (e) => {
    if (e.key === 'ArrowRight') {
        next()
    } else if (e.key === 'ArrowLeft') {
        prev()
    }
}

onMounted(() => {
    coverflowRef.value.focus()
})
</script>

<style scoped>
.coverflow-container {
    width: 100%;
    height: 100vh;
    background: linear-gradient(to bottom, #1a1a1a, #000);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    perspective: 1000px;
}

.coverflow {
    position: relative;
    width: 100%;
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;
}

.cover {
    position: absolute;
    width: 200px;
    height: 200px;
    transition: all 0.5s ease;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
}

.cover img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.cover.center {
    z-index: 1000;
    transform: scale(1.5) !important;
}

.reflection {
    position: absolute;
    bottom: -100%;
    left: 0;
    right: 0;
    height: 100%;
    transform: scaleY(-1);
    opacity: 0.5;
    pointer-events: none;
}

.controls {
    margin-top: 20px;
}

button {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 0 10px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

button:hover:not(:disabled) {
    background-color: rgba(255, 255, 255, 0.2);
}

button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
}

.album-info {
    margin-top: 20px;
    text-align: center;
    color: white;
}

.album-info h2 {
    font-size: 24px;
    margin-bottom: 5px;
}

.album-info p {
    font-size: 18px;
    opacity: 0.7;
}
</style>