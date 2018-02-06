<template>
	<div class="formFields">
		<h2>Log Lost Item </h2>
		<div class="categoryFormat">
			<label>Category:</label>
			<select v-model="lostItem.category" v-on:change="resetColumnData">
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
		<category-form v-bind:category="lostItem.category" v-bind:columnOneData="lostItem.columnOneData" v-bind:columnTwoData="lostItem.columnTwoData" v-bind:columnThreeData="lostItem.columnThreeData" v-on:updateColumnOne="changeColumnOne($event)" v-on:updateColumnTwo="changeColumnTwo($event)" v-on:updateColumnThree="changeColumnThree($event)"></category-form>
		<div v-if='lostItem.category' id="formEnd">
			<table class="formNoBorder">
				<tr>
					<td>
						<label>Contact Name</label>
					</td>
					<td>
						<input type="text" v-model="lostItem.contactName">
					</td>
					<td>
						<label>Contact Information</label>
					</td>
					<td>
						<input type="text" v-model="lostItem.contactInformation">
					</td>
				</tr>
				<tr>
					<td>
						<label>Rho Responsible</label>
					</td>
					<td>
						<input type="text" v-model="lostItem.loggerName">
					</td>
				</tr>
				<tr>
					<td>
						<label>Description</label>
					</td>
					<td colspan="4">
						<input class="descriptionBox" type="text" v-model="lostItem.description">
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
	name: "LostForm",
	components:{
		'category-form': CategoryForm
	},
  data: function() {
    return {
			lostItem: {
      	category: "",
      	description: "",
      	loggerName: "",
      	contactName: "",
      	contactInformation: "",
      	columnOneData: "",
      	columnTwoData: "",
				columnThreeData: ""
			}
		};
  },
  methods: {
		changeColumnOne: function(columnOneData){
			this.lostItem.columnOneData = columnOneData;
		},
		changeColumnTwo: function(columnTwoData){
			this.lostItem.columnTwoData = columnTwoData;
		},
		changeColumnThree: function(columnThreeData){
			this.lostItem.columnThreeData = columnThreeData;
		},
    resetColumnData: function() {
      this.lostItem.columnOneData = "";
      this.lostItem.columnTwoData = "";
      this.lostItem.columnThreeData = "";
		},
		formSubmit: function() {
			if(this.lostItem.category === "" ||
			this.lostItem.loggerName === "" ||
			this.lostItem.contactName === "" ||
			this.lostItem.contactInformation === ""){
				alert('Please fill out all required fields');
				return;
			}

			this.$router.push({ name: 'LostSimilarItems' , params: { item: this.lostItem}});
		}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
