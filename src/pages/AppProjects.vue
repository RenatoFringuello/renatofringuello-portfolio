<template >
    <section class="main-section">
        <ProjectsList/>
    </section>
    {{ sortBy }}
</template>

<script>
import ProjectsList from '../components/partials/projects/ProjectsList.vue';

export default {
    name:'AppProjects',
    components:{
        ProjectsList
    },
    data() {
        return {
            
        }
    },
    computed:{
        sortBy(){
            return this.$route.query.sortBy || 'all';
        }
    }
}
</script>

<style lang="scss" scoped>
    
</style>