<template>
	<div>
		<h2> Lost Item</h2>
		<table class="itemsTable">
			<tr>
				<th>
					Column One
				</th>
				<th>
					Column Two
				</th>
				<th>
					Column Three
				</th>
				<th>
					Description
				</th>
			</tr>
			<tr>
				<td>
					{{lostItem.columnOneData}}
				</td>
				<td>
					{{lostItem.columnTwoData}}
				</td>
				<td>
					{{lostItem.columnThreeData}}
				</td>
				<td>
					{{lostItem.description}}
				</td>
			</tr>
		</table>
		<div v-if='similarItems.length != 0'>
		<h2> Similar Items </h2>
		<table class="itemsTable">
			<tr>
				<th>
					Column One
				</th>
				<th>
					Column Two
				</th>
				<th>
					Column Three
				</th>
				<th>
					Description
				</th>
				<th>
					Select Item
				</th>
			</tr>
			<tr v-for="similarItem in similarItems">
				<td>
					{{similarItem.columnOneData}}
				</td>
				<td>
					{{similarItem.columnTwoData}}
				</td>
				<td>
					{{similarItem.columnThreeData}}
				</td>
				<td>
					{{similarItem.description}}
				</td>
				<td style="text-align: center">
					<button v-on:click="submitSimilarItem(similarItem)">
						Select
					</button>
				</td>
			</tr>
		</table>
		</div>
		<div style="padding-top: 20px">
			<button v-on:click="submitLostItem">
				Log Lost Item
			</button>
		</div>
	</div>
</template>

<script>

export default {
	name: "LostSimilarItems",
	props: ['lostItem'],
  data: function() {
    return {
			similarItems: []
    };
	},
	methods:{
		submitSimilarItem: function(similarItem){
			this.$http.delete('logged/'+similarItem._id).then(response =>{}
				, (response) => {
   			alert('Could not save lost item' + response.body);
			});

			const foundItem ={
				category: similarItem.category,
				description: similarItem.description,
				dateLogged: similarItem.dateLogged,
				loggerName: similarItem.loggerName,
				locationStored: similarItem.locationStored,
				contactName: this.lostItem.contactName,
				contactInformation: this.lostItem.contactName,
				columnOneData: similarItem.columnOneData,
				columnTwoData: similarItem.columnTwoData,
				columnThreeData: similarItem.columnThreeData
			};

			this.$http.post('found', foundItem).then( (response) => {
				this.$router.push({ name: 'LostForm'});
  		}, (response) => {
   			alert('Could not save similar item' + response.body);
			});
		},
		submitLostItem: function(lostItem){
			this.$http.post('lost', this.lostItem).then( (response) => {
				this.$router.push({ name: 'LostForm'});
  		}, (response) => {
   			alert('Could not save lost item' + response.body);
			});
		},
		findSimilarItems : function(){
			this.$http.post('lost/findSimilarItems', this.lostItem).then( (response) => {

    		this.similarItems = response.body;

  		}, (response) => {
   			alert('Could not find similar items' + response.body);
			});
		}
	},
  created(){
		this.findSimilarItems();
	}
	
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>