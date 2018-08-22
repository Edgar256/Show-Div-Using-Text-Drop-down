/*   
		
		I AM THE SILENT STORM, ping me at tinka.edgar@gmail.com

*/

$(document).ready(function () {

			
	        $('#types').change(function () {
	            if ($('#types').val() == 'yes') {
	                $('#hiddenDiv').show();
	            }
	             if ($('#types').val() == 'no') {
	                $('#hiddenDiv').hide();
	            }
	            
	        });

	        $('#typesA').change(function () {
	            if ($('#typesA').val() == 'yes') {
	                $('#hiddenDivA').show();
	            }
	             if ($('#typesA').val() == 'no') {
	                $('#hiddenDivA').hide();
	            }
	            
	        });

	        $('#typesB').change(function () {
	            if ($('#typesB').val() == 'yes') {
	                $('#hiddenDivB').show();
	            }
	             if ($('#typesB').val() == 'no') {
	                $('#hiddenDivB').hide();
	            }
	            
	        });

});