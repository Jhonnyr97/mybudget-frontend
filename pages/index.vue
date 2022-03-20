<template>
    <div>
      <home />
    </div>
  </template>

  <script>
  export default {
    mounted() {
    console.log(process.env.BACKEND_URL)
}
  };
  </script>