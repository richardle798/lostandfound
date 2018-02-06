<template>
	<div class="formFields">
		<h2>Log Found Item </h2>
		<div class="categoryFormat">
			<label>Category:</label>
			<select v-model="loggedItem.category" v-on:change="resetColumnData">
				<option value=""></option>
				<option value="clothes">Clothing</option>
				<option value="books">Books</option>
				<option value="schoolSupplies">School Supplies</option>
				<option value="bottles">Bottles</option>
				<option value="electronics">Electronics</option>
				<option value="cards">Cards</option>
				<option value="keys">Keys</option>
				<option value="other">Other</option>
			</select>
		</div>
		<category-form v-bind:category="loggedItem.category" v-bind:columnOneData="loggedItem.columnOneData" v-bind:columnTwoData="loggedItem.columnTwoData" v-bind:columnThreeData="loggedItem.columnThreeData" v-on:updateColumnOne="changeColumnOne($event)" v-on:updateColumnTwo="changeColumnTwo($event)" v-on:updateColumnThree="changeColumnThree($event)"></category-form>
		<div v-if='loggedItem.category' id="formEnd">
			<table class="formNoBorder">
				<tr>
					<td>
						<label>Location Stored</label>
					</td>
					<td>
						<input type="text" v-model="loggedItem.locationStored">
					</td>
					<td>
						<label>Rho Responsible</label>
					</td>
					<td>
						<input type="text" v-model="loggedItem.loggerName">
					</td>
				</tr>
				<tr>
					<td>
						<label>Description</label>
					</td>
					<td colspan="4">
						<input class="descriptionBox" type="text" v-model="loggedItem.description">
					</td>
				</tr>
			</table>
			<div>
				<button v-on:click="formSubmit">
					Submit
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import CategoryForm from './CategoryForm.vue'

export default {
	name: "LoggedForm",
	components:{
		'category-form': CategoryForm
	},
  data: function() {
    return {
			loggedItem: {
      	category: "",
      	description: "",
      	loggerName: "",
      	locationStored: "",
      	columnOneData: "",
      	columnTwoData: "",
				columnThreeData: ""
			}
		};
  },
  methods: {
		changeColumnOne: function(columnOneData){
			this.loggedItem.columnOneData = columnOneData;
		},
		changeColumnTwo: function(columnTwoData){
			this.loggedItem.columnTwoData = columnTwoData;
		},
		changeColumnThree: function(columnThreeData){
			this.loggedItem.columnThreeData = columnThreeData;
		},
    resetColumnData: function() {
      this.loggedItem.columnOneData = "";
      this.loggedItem.columnTwoData = "";
      this.loggedItem.columnThreeData = "";
		},
		formSubmit: function() {
			if(this.loggedItem.category === "" ||
			this.loggedItem.loggerName === "" ||
			this.loggedItem.contactName === "" ||
			this.loggedItem.contactInformation === ""){
				alert('Please fill out all required fields');
				return;
			}

			this.$router.push({ name: 'LoggedSimilarItems' , params: { item: this.loggedItem}});
		}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
