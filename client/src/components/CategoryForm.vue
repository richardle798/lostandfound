<template>
		<div id="content">
			<div v-if='category === "clothes"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-bind:value="columnOneData"  v-on:change="updateColumnOne($event)" class="form-control">
								<option value=""></option>
								<option value="shirt">Shirt</option>
								<option value="pants">Pants</option>
								<option value="dress">Dress</option>
								<option value="shoes">Shoes</option>
								<option value="sweatshirt">Sweatshirt</option>
								<option value="jacket">Jacket</option>
								<option value="other">Other</option>
							</select>
						</td>
						<td>
							<label>Brand</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnTwoData" v-on:change="updateColumnTwo($event)">
						</td>
					</tr>
					<tr>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnThreeData" v-on:change="updateColumnThree($event)">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='category === "accessories"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-bind:value="columnOneData"  v-on:change="updateColumnOne($event)" class="form-control">
								<option value=""></option>
								<option value="scarf">Scarf</option>
								<option value="watch">Watch</option>
								<option value="umbrella">Umbrella</option>
								<option value="hat">Hat</option>
								<option value="glasses">Glasses</option>
								<option value="belt">Belt</option>
								<option value="other">Other</option>
							</select>
						</td>
						<td>
							<label>Brand</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnTwoData" v-on:change="updateColumnTwo($event)">
						</td>
					</tr>
					<tr>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnThreeData" v-on:change="updateColumnThree($event)">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='category === "books"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-bind:value="columnOneData"  v-on:change="updateColumnOne($event)" class="form-control">
								<option value=""></option>
								<option value="textbook">Textbook</option>
								<option value="book">Book</option>
							</select>
						</td>
						<td>
							<label>Title</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnTwoData" v-on:change="updateColumnTwo($event)">
						</td>
					</tr>
					<tr>
						<td>
							<label>Author</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnThreeData" v-on:change="updateColumnThree($event)">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='category === "schoolSupplies"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-bind:value="columnOneData"  v-on:change="updateColumnOne($event)" class="form-control">
								<option value=""></option>
								<option value="pencil">Pencil</option>
								<option value="pen">Pen</option>
								<option value="folder">Folder</option>
								<option value="notebook">Notebook</option>
								<option value="binder">Binder</option>
								<option value="other">Other</option>
							</select>
						</td>
						<td>
							<label>Brand</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnTwoData" v-on:change="updateColumnTwo($event)">
						</td>
					</tr>
					<tr>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnThreeData" v-on:change="updateColumnThree($event)">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='category === "electronics"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-bind:value="columnOneData"  v-on:change="updateColumnOne($event)" class="form-control">
								<option value=""></option>
								<option value="phone">Phone</option>
								<option value="headphones">Headphones</option>
								<option value="calculator">Calculator</option>
								<option value="charger">Charger</option>
								<option value="mouse">Mouse</option>
								<option value="laptop">Laptop</option>
								<option value="flashdrive">Flashdrive</option>
								<option value="other">Other</option>
							</select>
						</td>
						<td>
							<label>Brand</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnTwoData" v-on:change="updateColumnTwo($event)">
						</td>
					</tr>
					<tr>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnThreeData" v-on:change="updateColumnThree($event)">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='category === "cards"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-bind:value="columnOneData"  v-on:change="updateColumnOne($event)" class="form-control">
								<option value=""></option>
								<option value="driver's license">Drivers License</option>
								<option value="student ID">Student ID</option>
								<option value="credit card">Credit Card</option>
								<option value="other">Other</option>
							</select>
						</td>
						<td>
							<label>Full Name</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnTwoData" v-on:change="updateColumnTwo($event)">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='category === "bottles"'> 
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Brand</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnOneData"  v-on:change="updateColumnOne($event)">
						</td>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnTwoData" v-on:change="updateColumnTwo($event)">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='category === "keys"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-bind:value="columnOneData"  v-on:change="updateColumnOne($event)" class="form-control">
								<option value=""></option>
								<option value="house">House Key</option>
								<option value="car">Car Key</option>
								<option value="other">Other</option>
							</select>
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='category === "other"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Item Name</label>
						</td>
						<td>
							<input type="text" v-bind:value="columnOneData"  v-on:change="updateColumnOne($event)">
						</td>
					</tr>
				</table>
			</div>
		</div>
</template>

<script>
export default {
	name:"CategoryForm",
	props: {
		category:"",
		columnOneData:"",
		columnTwoData:"",
		columnThreeData:""
	},
	methods:{
		updateColumnOne: function(event){
			this.$emit('updateColumnOne',event.target.value);
		},
		updateColumnTwo: function(event){
			this.$emit('updateColumnTwo',event.target.value);
		},
		updateColumnThree: function(event){
			this.$emit('updateColumnThree',event.target.value);
		}
	}
}
</script>

<style>

</style>
