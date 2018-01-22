<template>
<div class="topHeader">
<h1 class="bottomText">APO Lost and Found</h1>

  <div class="topnav">
    <router-link :to='{name:"LostForm"}'>Log Lost</router-link>
    <router-link :to='{name:"LoggedForm"}'>Log Found</router-link>
</div>
</div>
</template>

<script>
export default {
  name: 'top-bar'
}
</script>