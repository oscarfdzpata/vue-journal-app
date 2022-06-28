<template>

    <div class="mb-3 entry-container  p-2"
     @click="$router.push({ name:'entry', params: { id:10 }})"
    >
        <div class="d-flex entry-title">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fs-5 fw-light cursor-pointer">2021, jueves</span>
        </div>

        <div class="entry-description ">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto officia voluptates consectetur libero vero aut iste, omnis culpa amet ut.
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .entry-container{
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        cursor: pointer;

        &:hover{
            background-color: lighten($color: grey, $amount:45);
            transition: 0.2s all ease-in;

        }

        .entry-description{
            font-size: 12px;
        }

    }
</style>