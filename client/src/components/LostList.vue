<template>
  <div class="page-body">
		<h2>Lost Items</h2>
    <item-modal v-if="showItemModal" v-bind:item="detailItem" v-on:close="showItemModal=false">
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
			<tr v-for="lostItem in lostItems" v-on:click='getDetails(lostItem)'>
				<td>
					{{lostItem.category[0]}}
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
      showItemModal: false		
    }
	},
	methods:{
		getLostItems: function(){
			this.$http.get('lost').then( (response) => {
				
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
      this.detailItem.category = lostItem.category[0];
      this.detailItem.description = lostItem.description;
      this.detailItem.loggerName = lostItem.loggerName;
      this.detailItem.contactName = lostItem.contactName;
      this.detailItem.contactInformation = lostItem.contactInformation;
      this.detailItem.columnOneData = lostItem.columnOneData;
      this.detailItem.columnTwoData = lostItem.columnTwoData;
      this.detailItem.columnThreeData = lostItem.columnThreeData;
			this.detailItem.dateLogged = lostItem.dateLogged;

      this.showItemModal = true;
		}
	},
	created(){
		this.getLostItems();
	}
}
</script>
