<template>
	<div class="formFields">
		<div class="categoryFormat">
			<label>Category:</label>
			<select v-model="category" v-on:change="resetColumnData">
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
			<div v-if='category === "clothes"'>
				<table class="formNoBorder">
					<tr>
						<td>
							<label>Type</label>
						</td>
						<td>
							<select v-model="columnOneData" class="form-control">
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
							<input type="text" v-model="columnTwoData">
						</td>
					</tr>
					<tr>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-model="columnThreeData">
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
							<select v-model="columnOneData" class="form-control">
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
							<input type="text" v-model="columnTwoData">
						</td>
					</tr>
					<tr>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-model="columnThreeData">
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
							<select v-model="columnOneData" class="form-control">
								<option value=""></option>
								<option value="textbook">Textbook</option>
								<option value="book">Book</option>
							</select>
						</td>
						<td>
							<label>Title</label>
						</td>
						<td>
							<input type="text" v-model="columnTwoData">
						</td>
					</tr>
					<tr>
						<td>
							<label>Author</label>
						</td>
						<td>
							<input type="text" v-model="columnThreeData">
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
							<select v-model="columnOneData" class="form-control">
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
							<input type="text" v-model="columnTwoData">
						</td>
					</tr>
					<tr>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-model="columnThreeData">
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
							<select v-model="columnOneData" class="form-control">
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
							<input type="text" v-model="columnTwoData">
						</td>
					</tr>
					<tr>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-model="columnThreeData">
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
							<select v-model="columnOneData" class="form-control">
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
							<input type="text" v-model="columnTwoData">
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
							<input type="text" v-model="columnOneData">
						</td>
						<td>
							<label>Primary Color</label>
						</td>
						<td>
							<input type="text" v-model="columnTwoData">
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
							<select v-model="columnOneData" class="form-control">
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
							<input type="text" v-model="columnOneData">
						</td>
					</tr>
				</table>
			</div>
		</div>
		<div v-if='category' id="formEnd">
			<table class="formNoBorder">
				<tr>
					<td>
						<label>Contact Name</label>
					</td>
					<td>
						<input type="text" v-model="contactName">
					</td>
					<td>
						<label>Contact Information</label>
					</td>
					<td>
						<input type="text" v-model="contactInformation">
					</td>
				</tr>
				<tr>
					<td>
						<label>Rho Responsible</label>
					</td>
					<td>
						<input type="text" v-model="loggerName">
					</td>
				</tr>
				<tr>
					<td>
						<label>Description</label>
					</td>
					<td colspan="4">
						<input class="descriptionBox" type="text" v-model="description">
					</td>
				</tr>
			</table>
		</div>
	</div>
</template>

<script>
export default {
  name: "LostForm",
  data: function() {
    return {
      category: "",
      description: "",
      loggerName: "",
      contactName: "",
      contactInformation: "",
      columnOneData: "",
      columnTwoData: "",
      columnThreeData: ""
    };
  },
  methods: {
    resetColumnData: function() {
      this.columnOneData = "";
      this.columnTwoData = "";
      this.columnThreeData = "";
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
