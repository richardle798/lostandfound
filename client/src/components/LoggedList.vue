<template>
  <div>
		<h2>Logged Items</h2>
    <item-modal v-if="showItemModal" v-bind:item="detailItem" v-on:close="showItemModal=false">
			<h2 slot="header">Logged Item</h2>
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
			<tr v-for="loggedItem in loggedItems" v-on:click='getDetails(loggedItem)'>
				<td>
					{{loggedItem.category[0]}}
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
        category: "",
      	description: "",
      	loggerName: "",
      	columnOneData: "",
      	columnTwoData: "",
				columnThreeData: "",
				dateLogged:"",
				locationStored: ""
      },
      showItemModal: false		
    }
	},
	methods:{
		getloggedItems: function(){
			this.$http.get('logged').then( (response) => {
				
				const reversedList = response.body;
				
				//list sorted by date in ascending order, need descending so latest is at top
				for(var i = 0; i < reversedList.length; i++){
					let item = reversedList[reversedList.length -i - 1];
					item.dateLogged = new Date(item.dateLogged).toDateString();
					this.loggedItems.push(item);
				}

  		}, (response) => {
   			alert('Could not get found items' + response.body);
			});
		},
		getDetails: function(loggedItem){
      this.detailItem.category = loggedItem.category[0];
      this.detailItem.description = loggedItem.description;
      this.detailItem.loggerName = loggedItem.loggerName;
      this.detailItem.columnOneData = loggedItem.columnOneData;
      this.detailItem.columnTwoData = loggedItem.columnTwoData;
      this.detailItem.columnThreeData = loggedItem.columnThreeData;
			this.detailItem.dateLogged = loggedItem.dateLogged;
			this.detailItem.locationStored = loggedItem.locationStored;

      this.showItemModal = true;
		}
	},
	created(){
		this.getloggedItems();
	}
}
</script>
