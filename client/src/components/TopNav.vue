<template>
<div class="topHeader">
<h1 class="bottomText">UNC Lost and Found</h1>

  <div class="topnav">
    <router-link :to='{name:"LostForm"}'>Log Lost</router-link>
    <router-link :to='{name:"LoggedForm"}'>Log Found</router-link>
    <router-link :to='{name:"LostList"}'>View Lost Items</router-link>
    <router-link :to='{name:"LoggedList"}'>View Found Items</router-link>
    <router-link :to='{name:"FoundList"}'>View Matched Items</router-link>
</div>
</div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>