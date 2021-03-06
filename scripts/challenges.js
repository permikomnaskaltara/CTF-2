$(document).ready(function(){
	
	get_challenges();
	//submit flag
	$( 'form' ).submit(function(){
		var formData = new FormData();    
		formData.append( 'key', $( '[name="flag"]' ).prop( 'value' ) );
		formData.append( 'team', $( '[name="team"]' ).prop( 'value' ) );
		formData.append( 'id', $( '[name="id"]' ).prop( 'value' ) );
		formData.append( 'token', $( '[name="id"]' ).prop( 'value' ) );
			
		$.ajax({
			type: 'POST',
			url: 'ajax.php?m=submit_key',
			data: formData,
			dataType: 'JSON',
			processData: false, 
			contentType: false,
			success: function( data )
			{
				Materialize.toast(data);
				$('ul.tabs').tabs('select_tab', 'question');
			},
			error: function(data){
				Materialize.toast(data.responseText, '4000');
			}
		});
		
		
		return false;
	});
});
