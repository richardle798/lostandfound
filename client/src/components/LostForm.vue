<template>
	<div class="formFields">
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
		<div id="content">
			<div v-if='lostItem.category === "clothes"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-model="lostItem.columnOneData" class="form-control">
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
							<input type="text" v-model="lostItem.columnTwoData">
						</td>
					</tr>
					<tr>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-model="lostItem.columnThreeData">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='lostItem.category === "accessories"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-model="lostItem.columnOneData" class="form-control">
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
							<input type="text" v-model="lostItem.columnTwoData">
						</td>
					</tr>
					<tr>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-model="lostItem.columnThreeData">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='lostItem.category === "books"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-model="lostItem.columnOneData" class="form-control">
								<option value=""></option>
								<option value="textbook">Textbook</option>
								<option value="book">Book</option>
							</select>
						</td>
						<td>
							<label>Title</label>
						</td>
						<td>
							<input type="text" v-model="lostItem.columnTwoData">
						</td>
					</tr>
					<tr>
						<td>
							<label>Author</label>
						</td>
						<td>
							<input type="text" v-model="lostItem.columnThreeData">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='lostItem.category === "schoolSupplies"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-model="lostItem.columnOneData" class="form-control">
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
							<input type="text" v-model="lostItem.columnTwoData">
						</td>
					</tr>
					<tr>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-model="lostItem.columnThreeData">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='lostItem.category === "electronics"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-model="lostItem.columnOneData" class="form-control">
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
							<input type="text" v-model="lostItem.columnTwoData">
						</td>
					</tr>
					<tr>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-model="lostItem.columnThreeData">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='lostItem.category === "cards"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-model="lostItem.columnOneData" class="form-control">
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
							<input type="text" v-model="lostItem.columnTwoData">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='lostItem.category === "bottles"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Brand</label>
						</td>
						<td>
							<input type="text" v-model="lostItem.columnOneData">
						</td>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-model="lostItem.columnTwoData">
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='lostItem.category === "keys"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-model="lostItem.columnOneData" class="form-control">
								<option value=""></option>
								<option value="house">House Key</option>
								<option value="car">Car Key</option>
								<option value="other">Other</option>
							</select>
						</td>
					</tr>
				</table>
			</div>
			<div v-else-if='lostItem.category === "other"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Item Name</label>
						</td>
						<td>
							<input type="text" v-model="lostItem.columnOneData">
						</td>
					</tr>
				</table>
			</div>
		</div>
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

export default {
  name: "LostForm",
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

			this.$router.push({ name: 'LostSimilarItems' , params: { lostItem: this.lostItem}});
		}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
