/**
 * 
 */

/* Ajax 호출 */
function orgiAjax(url, type, dataType, data, callback) {
	$.ajax({
		url: url,
		type: type,
		dataType: dataType,
		data: data,
		success: function(data) {
			if(data.status =="OK"){
				callback(data.data);
			}
		},
		error: function(error) {
			callback(error);
		}
	})
}

// LOADINGBAR ON!
function loadingBarOn(){
	$(".loading-bg").addClass("loading-on")
	$("html, #orgcRight").addClass("overflowY");	
}

// LOADINGBAR OFF...
function loadingBarOff(){
	$(".loading-bg").removeClass("loading-on");
	$("html, #orgcRight").removeClass("overflowY");
}