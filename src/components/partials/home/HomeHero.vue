<template>
    <div class="hero position-relative bg-accent">
        <!-- hidden one -->
    </div>
    <div class="hero position-absolute">
        <img ref="heroImg" :src="store.getImageSrc(`wallpaper${imgId}-vecstock.jpg`, 'heroes/')" :alt="`vecstock art ${imgId}`"/>
        <div class="overlay d-flex position-absolute">
            <div class="description my-auto">
                Ciao, my name is Renato
            </div>
            <img class="chevron-down position-absolute" src="@/assets/images/heroes/scrollDown.gif" alt="scroll down gif">
        </div>
    </div>
</template>
<script>
import {store} from '@/store';

export default {
    name:'HomeHero',
    data() {
        return {
            store,
            imgId:1,
            i:0,
        }
    },
    methods: {
        /**
         * call this method in a Interval after at least 3s
         * to see the image for min 1s, that's beacuse the first 2 instruction
         * are called simultaneously with the setTimeout so :
         * - fade out (need 1s for the transition in css)
         * - after $fadeDuration of timeout: (default 1s, that's why change the id after 1000 ms)
         *   - change id 
         *   - fade in 
         */
        initWallpaperShow(){
            //fade out old
            this.$refs.heroImg.classList.remove('visible');
            this.$refs.heroImg.classList.add('hidden');

            const t = setTimeout(()=>{
                // change id
                this.imgId += (this.imgId >= 3 ? -2 : 1);
                clearTimeout(t);

                const t2 = setTimeout(()=>{
                    //fade in new
                    this.$refs.heroImg.classList.add('hidden');
                    this.$refs.heroImg.classList.add('visible');
                    clearTimeout(t2);
                }, 500)
            }, 1000)
        }
    },    
    created() {
        this.imgId = 1; //reset
        this.i = setInterval(()=>{
            this.initWallpaperShow();
        },6000)
    },
    beforeUnmount() {
        clearInterval(this.i);
    },
}
</script>
<style lang="scss">
    .hero{
        height:100dvh;
        width:100%;
        top:0;
        z-index:2;

        > img{
            //if you change this change the timing in the setTimeout in initWallpaperShow and setInterval in created
            $fadeDuration:1s; 

            height: inherit;
            width: inherit;
            object-fit:cover;
            object-position:center;

            &.hidden{
                visibility: hidden;
                opacity: 0;
                transition: visibility 0s $fadeDuration, opacity $fadeDuration linear;
            }
            &.visible{
                visibility: visible;
                opacity: 1;
                transition: opacity $fadeDuration linear;
            }
        }
        .overlay{
            height: 100%;
            width: 100%;
            top:0;
            background: -webkit-radial-gradient(#0005, #000);
            font-size:clamp(1.5rem, 8vw, 3.5rem);
            font-family: 'Bruno Ace';
            letter-spacing: clamp(.8rem, 4vw, 3rem);
            line-height: 1;
            color:$comp-accent-color;
            padding:0 .5rem ;

            .chevron-down{
                width: clamp(150px, 20vw,220px);
                aspect-ratio: 4/1;
                filter: invert(1);
                bottom:20px;
                left:50%;
                translate: -50% 0;
            }
        }
    }

    @media screen and (min-width: 992px) {
        .description{
            max-width: 70%;
            padding: 1rem;
        }
    }
</style>