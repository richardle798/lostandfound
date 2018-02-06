<template>
	<div class="page-body">
		<h2>Logged Item</h2>
    <item-modal v-if="showItemModal" v-bind:item="detailItem">
			<h2 slot="header">Lost Item</h2>
			<ul class="item-detail-list" slot="body">
				<li>Category: {{detailItem.category}}</li>
				<li>Column One: {{detailItem.columnOneData}}</li>
				<li>Column Two: {{detailItem.columnTwoData}}</li>
				<li>Column Three: {{detailItem.columnThreeData}}</li>
				<li>Description: {{detailItem.description}}</li>
				<li>Logger Name: {{detailItem.loggerName}}</li>
				<li>Contact Name: {{detailItem.contactName}}</li>
				<li>Contact Information: {{detailItem.contactInformation}}</li>
				<li>Date Logged: {{detailItem.dateLogged}}</li>
			</ul>
			<div slot="footer">
				<button @click="submitSimilarItem()">
					Submit Item
				</button>
				<button @click="showItemModal=false">
					Cancel
				</button>
			</div>
    </item-modal>
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
					{{item.columnOneData}}
				</td>
				<td>
					{{item.columnTwoData}}
				</td>
				<td>
					{{item.columnThreeData}}
				</td>
				<td>
					{{item.description}}
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
			</tr>
			<tr v-for="similarItem in similarItems" v-on:click='getDetails(similarItem)'>
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
			</tr>
		</table>
		</div>
		<div style="padding-top: 20px">
			<button v-on:click="submitItem">
				Log Found Item
			</button>
		</div>
	</div>
</template>

<script>
import ItemDetailsModal from './ItemDetailsModal'

export default {
	name: "LoggedSimilarItems",
	props: ['item'],
	components:{
		'item-modal': ItemDetailsModal
	},
  data: function() {
    return {
			similarItems: [],
      detailItem:{
        category: "",
      	description: "",
      	loggerName: "",
      	contactName: "",
				contactInformation: "",
      	columnOneData: "",
      	columnTwoData: "",
				columnThreeData: "",
				dateLogged:"",
				_id:""
      },
    showItemModal: false
    };
	},
	methods:{
		submitSimilarItem: function(){
			this.$http.delete('rest/logged/'+this.detailItem._id).then(response =>{}
				, (response) => {
   			alert('Could not save lost item' + response.body);
			});

			const foundItem ={
				category: this.detailItem.category,
				description: this.detailItem.description,
				dateLogged: this.detailItem.dateLogged,
				loggerName: this.detailItem.loggerName,
				locationStored: this.item.locationStored,
				contactName: this.detailItem.contactName,
				contactInformation: this.detailItem.contactName,
				columnOneData: this.detailItem.columnOneData,
				columnTwoData: this.detailItem.columnTwoData,
				columnThreeData: this.detailItem.columnThreeData
			};

			this.$http.post('rest/found', foundItem).then( (response) => {
				this.$router.push({ name: 'LoggedForm'});
  		}, (response) => {
   			alert('Could not save similar item' + response.body);
			});
		},
		submitItem: function(item){
			this.$http.post('rest/logged', this.item).then( (response) => {
				this.$router.push({ name: 'LoggedForm'});
  		}, (response) => {
   			alert('Could not save lost item' + response.body);
			});
		},
		findSimilarItems : function(){
			this.$http.post('rest/logged/findSimilarItems', this.item).then( (response) => {

    		this.similarItems = response.body;

  		}, (response) => {
   			alert('Could not find similar items' + response.body);
			});
		},
		getDetails: function(item){
      this.detailItem.category = item.category[0];
      this.detailItem.description = item.description;
      this.detailItem.loggerName = item.loggerName;
      this.detailItem.contactName = item.contactName;
      this.detailItem.contactInformation = item.contactInformation;
      this.detailItem.columnOneData = item.columnOneData;
      this.detailItem.columnTwoData = item.columnTwoData;
      this.detailItem.columnThreeData = item.columnThreeData;
			this.detailItem.dateLogged = item.dateLogged;
			this.detailItem._id = item._id;

      this.showItemModal = true;
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