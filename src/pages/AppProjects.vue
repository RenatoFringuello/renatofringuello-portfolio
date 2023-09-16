<template >
    <section class="main-section">
        projects
    </section>
    {{ sortBy }}
</template>

<script>
export default {
    name:'AppProjects',
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