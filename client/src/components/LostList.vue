<template>
  <div class="page-body">
		<h2>Lost Items</h2>
  	<input class="search-bar" type="text" v-model="filter" placeholder="Filter Items">
    <item-modal v-if="showItemModal" v-bind:item="detailItem" v-on:close="showItemModal=false" v-on:deleteItem="deleteItem()">
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
			<tr v-for="lostItem in filteredItems" v-on:click='getDetails(lostItem)'>
				<td>
					{{lostItem.category}}
				</td>
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
					{{lostItem.dateLogged}}
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
      lostItems:[],
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
				dateLogged:""
      },
      showItemModal: false,
			filter: ""
    }
	},
	methods:{
		getLostItems: function(){
			this.$http.get('rest/lost').then( (response) => {
				this.lostItems = [];
				const reversedList = response.body;
				
				//list sorted by date in ascending order, need descending so latest is at top
				for(var i = 0; i < reversedList.length; i++){
					let item = reversedList[reversedList.length -i - 1];
					item.dateLogged = new Date(item.dateLogged).toDateString();
					this.lostItems.push(item);
				}

  		}, (response) => {
   			alert('Could not get lost items' + response.body);
			});
		},
		getDetails: function(lostItem){
			this.detailItem._id = lostItem._id;
			this.detailItem.category = lostItem.category;
      this.detailItem.description = lostItem.description;
      this.detailItem.loggerName = lostItem.loggerName;
      this.detailItem.contactName = lostItem.contactName;
      this.detailItem.contactInformation = lostItem.contactInformation;
      this.detailItem.columnOneData = lostItem.columnOneData;
      this.detailItem.columnTwoData = lostItem.columnTwoData;
      this.detailItem.columnThreeData = lostItem.columnThreeData;
			this.detailItem.dateLogged = lostItem.dateLogged;

      this.showItemModal = true;
		},
		deleteItem: function(){
			this.$http.delete('rest/lost/'+this.detailItem._id).then(response =>{
				this.getLostItems();
				this.showItemModal = false;
			}
				, (response) => {
   			alert('Could not delete lost item' + response.body);
			});
		}
	},
	created(){
		this.getLostItems();
	},
	computed: {
		lowercaseFilter: function(){
			return this.filter.toLowerCase();
		},
    filteredItems: function(){
      return this.lostItems.filter(item => {
      	return (item.category.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.description.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.loggerName.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.columnOneData.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.columnTwoData.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.columnThreeData.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.dateLogged.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.contactName.toLowerCase().indexOf(this.lowercaseFilter) > -1 ||
								item.contactInformation.toLowerCase().indexOf(this.lowercaseFilter) > -1);
    	});
    }
	}
}
</script>
