import { reactive } from "vue";

const store = reactive({
    /**
     * get the src value of the image to find in "src/assets/images"
     * @param {String} location the path to the folder of the image to get
     * @param {String} imgName the imageName
     * @returns src
     */
    getImageSrc(imgName, location = ""){
        return require(`@/assets/images/${location}${imgName}`);
    },
    
});

export {store};