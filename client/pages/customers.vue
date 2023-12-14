<template>
    <div>
	  <h1 class="text-center text-2xl font-semibold mb-6">Form Registrasi</h1>
        <form @submit.prevent="submitForm">
            <div>
                <label>Name</label>
                <input v-model="formData.name" type="text" name="name" required>
            </div>
            <div>
                <label>Email</label>
                <input v-model="formData.email" type="email" name="email" required>
            </div>
            <div>
                <label>School</label>
                <input v-model="formData.school" type="text" name="school" required>
            </div>
            <button type="submit">Register</button>
        </form>
        <div v-if="isFormSubmitted">
            <h5>Success</h5>
        </div>
        <NuxtLink to="/"> 
      <button class="bg-gray-500 hover:bg-gray-600 text-white font-semibold py-2 px-4 rounded mb-4">
        Back
      </button>
    </NuxtLink>
    </div>
</template>
<script setup>
const formData = ref({
    name: '',
    email: '',
    school: '',
});

const isFormSubmitted = ref(false);

const getCurrentDate = () => {
    var currentDate = new Date();

    var day = currentDate.getDate();
    var monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var month = monthNames[currentDate.getMonth()];
    var year = currentDate.getFullYear();

    var formattedDate = day + ' ' + month + ' ' + year;

    return formattedDate
}

const submitForm = async () => {
    console.log(getCurrentDate());
  try {
    const response = await fetch('http://localhost:3001/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify({
        name: formData.value.name,
        email: formData.value.email,
        school: formData.value.school,
        date: getCurrentDate()
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.json();
    console.log(responseData);
    isFormSubmitted.value = true;
    formData.value = {
      name: '',
      email: '',
      school: '',
    };
  } catch (error) {
    console.error('Error submitting form:', error.message);
  }
};
</script>