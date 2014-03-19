var ParkedListView = function(container, model){
	
	this.parkedList = $('#parkedList');
	model.addObserver(this);
	fillParkedList();

	function fillParkedList(){
		var parkedItems = model.parkedActivities;
		container.children().remove();

		for (var i = 0; i <= parkedItems.length - 1; i++) {
			item = parkedItems[i];
			var listItem = $('<li></li>');
			listItem.attr('id', item.getId());
			listItem.addClass('list-group-item');

			if(item.getTypeId() == 0)
				listItem.addClass('list-group-item-success');
			else if(item.getTypeId() == 1)
				listItem.addClass('list-group-item-danger');
			else if(item.getTypeId() == 2)
				listItem.addClass('list-group-item-info');
			else 
				listItem.addClass('list-group-item-warning');

			listItem.html(item.getName());
			container.append(listItem);
		};
	}


	this.update = function(arg){
		if(arg=="activity_added") {
			fillParkedList();
		}
		
	}
}