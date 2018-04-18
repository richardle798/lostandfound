<template>
  <div class="page-body">
		<h2>Found Items</h2>
  	<input class="search-bar" type="text" v-model="filter" placeholder="Filter Items">
    <item-modal v-if="showItemModal" v-bind:item="detailItem" v-on:close="showItemModal=false" v-on:deleteItem="deleteItem()">
			<h2 slot="header">Found Item</h2>
			<ul class="item-detail-list" slot="body">
				<li>Category: {{detailItem.category}}</li>
				<li>Column One: {{detailItem.columnOneData}}</li>
				<li>Column Two: {{detailItem.columnTwoData}}</li>
				<li>Column Three: {{detailItem.columnThreeData}}</li>
				<li>Description: {{detailItem.description}}</li>
				<li>Logger Name: {{detailItem.loggerName}}</li>
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
			<tr v-for="loggedItem in filteredItems" v-on:click='getDetails(loggedItem)'>
				<td>
					{{loggedItem.category}}
				</td>
				<td>
					{{loggedItem.columnOneData}}
				</td>
				<td>
					{{loggedItem.columnTwoData}}
				</td>
				<td>
					{{loggedItem.columnThreeData}}
				</td>
				<td>
					{{loggedItem.dateLogged}}
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
      loggedItems:[],
      detailItem:{
				_id: "",
        category: "",
      	description: "",
      	loggerName: "",
      	columnOneData: "",
      	columnTwoData: "",
				columnThreeData: "",
				dateLogged:"",
				locationStored: ""
      },
      showItemModal: false,
			filter:""	
    }
	},
	methods:{
		getLoggedItems: function(){
			this.$http.get('rest/logged').then( (response) => {
				this.loggedItems = response.body;
				
				for(var i = 0; i < this.loggedItems.length; i++){
					this.loggedItems[i].dateLogged = new Date(this.loggedItems[i].dateLogged).toDateString();
				}

  		}, (response) => {
   			alert('Could not get found items' + response.body);
			});
		},
		getDetails: function(loggedItem){
			this.detailItem._id = loggedItem._id;
      this.detailItem.category = loggedItem.category;
      this.detailItem.description = loggedItem.description;
      this.detailItem.loggerName = loggedItem.loggerName;
      this.detailItem.columnOneData = loggedItem.columnOneData;
      this.detailItem.columnTwoData = loggedItem.columnTwoData;
      this.detailItem.columnThreeData = loggedItem.columnThreeData;
			this.detailItem.dateLogged = loggedItem.dateLogged;
			this.detailItem.locationStored = loggedItem.locationStored;

      this.showItemModal = true;
		},
		deleteItem: function(){
			this.$http.delete('rest/logged/'+this.detailItem._id).then(response =>{
				this.getLoggedItems();
				this.showItemModal = false;
			}
				, (response) => {
   			alert('Could not delete found item' + response.body);
			});
		}
	},
	created(){
		this.getLoggedItems();
	},
	computed: {
		lowercaseFilter: function(){
			return this.filter.toLowerCase();
		},
    filteredItems: function(){
      return this.loggedItems.filter(item => {
      	return (item.category.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.description.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.loggerName.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.columnOneData.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.columnTwoData.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.columnThreeData.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.dateLogged.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.locationStored.toLowerCase().indexOf(this.lowercaseFilter) > -1
			)});
    }
	}
}
</script>
