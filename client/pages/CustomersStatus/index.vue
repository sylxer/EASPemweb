<template>
    <div>
        <form @submit.prevent="submitForm">
            <label>Email</label>
            <input v-model="email" type="text" name="email" required>
            <button type="submit">Check</button>
        </form>
    </div>
</template>
<script setup>
const router = useRouter();
const email = ref('');
const submitForm = () => {
    router.push(`/customersStatus/${email.value}`);
}
</script>
<style lang="">
</style>