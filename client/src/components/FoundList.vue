<template>
  <div class="page-body">
		<h2>Matched Items</h2>
  	<input class="search-bar" type="text" v-model="filter" placeholder="Filter Items">
    <item-modal v-if="showItemModal" v-bind:item="detailItem" v-on:close="showItemModal=false" v-on:deleteItem="deleteItem()">
			<h2 slot="header">Matched Item</h2>
			<ul class="item-detail-list" slot="body">
				<li>Category: {{detailItem.category}}</li>
				<li>Column One: {{detailItem.columnOneData}}</li>
				<li>Column Two: {{detailItem.columnTwoData}}</li>
				<li>Column Three: {{detailItem.columnThreeData}}</li>
				<li>Description: {{detailItem.description}}</li>
				<li>Logger Name: {{detailItem.loggerName}}</li>
				<li>Contact Name: {{detailItem.contactName}}</li>
				<li>Contact Information: {{detailItem.contactInformation}}</li>
				<li>Location Stored: {{detailItem.locationStored}}</li>
				<li>Date Logged: {{detailItem.dateLogged}}</li>
			</ul>
    </item-modal>
		<table class="itemsTable">
			<tr>
				<th>
					Category
				</th>
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
					Date Logged
				</th>
			</tr>
			<tr v-for="foundItem in filteredItems" v-on:click='getDetails(foundItem)'>
				<td>
					{{foundItem.category}}
				</td>
				<td>
					{{foundItem.columnOneData}}
				</td>
				<td>
					{{foundItem.columnTwoData}}
				</td>
				<td>
					{{foundItem.columnThreeData}}
				</td>
				<td>
					{{foundItem.dateLogged}}
				</td>
			</tr>
		</table>
  </div>
</template>

<script>
import ItemDetailsModal from './ItemDetailsModal'

export default {
  name: "LostList",
  components:{
    'item-modal': ItemDetailsModal
  },
  data: function() {
    return{
      foundItems:[],
      detailItem:{
				_id: "",
        category: "",
      	description: "",
      	loggerName: "",
      	contactName: "",
      	contactInformation: "",
      	columnOneData: "",
      	columnTwoData: "",
				columnThreeData: "",
				dateLogged:"",
				locationStored: ""
      },
      showItemModal: false,
			filter: ""
    }
	},
	methods:{
		getFoundItems: function(){
			this.$http.get('rest/found').then( (response) => {
				this.foundItems = [];
				const reversedList = response.body;
				
				//list sorted by date in ascending order, need descending so latest is at top
				for(var i = 0; i < reversedList.length; i++){
					let item = reversedList[reversedList.length -i - 1];
					item.dateLogged = new Date(item.dateLogged).toDateString();
					this.foundItems.push(item);
				}

  		}, (response) => {
   			alert('Could not get found items' + response.body);
			});
		},
		getDetails: function(foundItem){
			this.detailItem._id = foundItem._id;
      this.detailItem.category = foundItem.category;
      this.detailItem.description = foundItem.description;
      this.detailItem.loggerName = foundItem.loggerName;
      this.detailItem.contactName = foundItem.contactName;
      this.detailItem.contactInformation = foundItem.contactInformation;
      this.detailItem.columnOneData = foundItem.columnOneData;
      this.detailItem.columnTwoData = foundItem.columnTwoData;
      this.detailItem.columnThreeData = foundItem.columnThreeData;
			this.detailItem.dateLogged = foundItem.dateLogged;
			this.detailItem.locationStored = foundItem.locationStored;

      this.showItemModal = true;
		},
		deleteItem: function(){
			this.$http.delete('rest/found/'+this.detailItem._id).then(response =>{
				this.getFoundItems();
				this.showItemModal = false;
			}
				, (response) => {
   			alert('Could not delete matched item' + response.body);
			});
		}
	},
	created(){
		this.getFoundItems();
	},
	computed: {
		lowercaseFilter: function(){
			return this.filter.toLowerCase();
		},
    filteredItems: function(){
      return this.foundItems.filter(item => {
      	return (item.category.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.description.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.loggerName.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.columnOneData.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.columnTwoData.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.columnThreeData.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.dateLogged.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.locationStored.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.contactName.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.contactInformation.toLowerCase().indexOf(this.lowercaseFilter) > -1);
    	});
    }
	}
}
</script>
