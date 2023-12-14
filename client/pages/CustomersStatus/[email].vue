<template>
    <div>{{ accept.status }}
    </div>
</template>
<script setup>
const route = useRoute().params.email
const { data: request } = await useFetch('http://localhost:3001/api/customers');
const customers = request._rawValue.docs;

let accept;

customers.forEach(customers => {
    console.log(customers.email);
    if (customers.email === route) {
        accept = customers;
    }
});

console.log(accept)
</script>