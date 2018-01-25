<template>
		<transition name="modal">
			<div class="modal-mask">
				<div class="modal-wrapper">
					<div class="modal-container">

						<div class="modal-header">
							<slot name="header">
								Item
							</slot>
						</div>

						<div class="modal-body">
							<slot name="body">
								default body
							</slot>
						</div>

						<div class="modal-footer">
							<slot name="footer">
								<button @click="closeModal()">
									OK
								</button>
							</slot>
						</div>

					</div>
				</div>
			</div>
		</transition>
</template>

<script>
export default {
	name: "ItemDetailsModal",
	props: ['item'],
  data: function() {
    return {
			updated: false
		};
  },
  methods:{
    closeModal: function(){
      if(!this.updated){
        this.$emit('close');
      }
      else{
				//TODO: implement update
        //this.$emit('update');
      }
    }
  }
};
</script>