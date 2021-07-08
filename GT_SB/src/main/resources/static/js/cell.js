
/*selectbox 클릭시 해당 사이즈로 테이블변경*/
$("#selectPageSize").change(function() {
	var size = $(this).val();
	var groupcode = $("#groupcode_value").val();
	var samplecode = $("#samplecode_value").val();
	var depth1 = $("#depth1_value").val();
	var depth2 = $("#depth2_value").val();
	var depth3 = $("#depth3_value").val();

	TableSize(size, groupcode, samplecode, depth1, depth2, depth3);
})

/*group_code 선택시 해당하는 sample_code select box 추가*/
$("#group_code_select").change(function() {
	$("#sample_code_select option").remove();
	$("#sample_code_select").prop('disabled', true);
	$("#depth1_select option").remove();
	$("#depth1_select").prop('disabled', true);
	$("#depth2_select option").remove();
	$("#depth2_select").prop('disabled', true);
	$("#depth3_select option").remove();
	$("#depth3_select").prop('disabled', true);
	selectchange($(this).val());
})
/*sample_code 선택시 해당하는 depth1 select box 추가*/
$("#sample_code_select").change(function() {
	$("#depth1_select option").remove();
	$("#depth1_select").prop('disabled', true);
	$("#depth2_select option").remove();
	$("#depth2_select").prop('disabled', true);
	$("#depth3_select option").remove();
	$("#depth3_select").prop('disabled', true);
	selectchange2($(this).val());
})

/*depth1 선택시 해당하는 depth2 select box 추가*/
$("#depth1_select").change(function() {
	$("#depth2_select option").remove();
	$("#depth2_select").prop('disabled', true);
	$("#depth3_select option").remove();
	$("#depth3_select").prop('disabled', true);
	selectchange3($(this).val());
})
/*depth2 선택시 해당하는 depth3 select box 추가*/
$("#depth2_select").change(function() {
	$("#depth3_select option").remove();
	$("#depth3_select").prop('disabled', true);
	selectchange4($(this).val());
})



/*페이징 버튼 클릭시 해당 버튼 active 상태로 만들기*/
var pageItem = $('.pagination > li').not('.prev,.next');

pageItem.click(function() {
	pageItem.removeClass('active');
	$(this).not('.prev,.next').addClass('active');
})




/*인수값으로 테이블 변경하는 함수*/
function TableSize(tablesize, groupcode, samplecode, depth1, depth2, depth3) {
	var url = 'http://localhost:8086/org/battery/search?size=' + tablesize;

	if (groupcode != null) {
		url += '&groupcode=' + groupcode;
	};
	if (samplecode != null) {
		url += '&samplecode=' + samplecode;
	};
	if (depth1 != null) {
		url += '&depth1=' + depth1;
	};
	if (depth2 != null) {
		url += '&depth2=' + depth2;
	};
	if (depth3 != null) {
		url += '&depth3=' + depth3;
	};

	$(location).attr('href', url);


}

/*select box 변경하는 함수*/

function selectchange(Item) {
	var Cyclindrical_Cells = ["INR_18650_20R", "A123"];
	var Prismatic_Cells = ["CS2", "CX2"];
	var Pouch_Cells = ["PL_Sample"];
	var Other_Cells = ["K2"];


	var selectItem = Item;

	var changeItem = "";

	/*group code*/
	if (selectItem == "01") {
		changeItem = Cyclindrical_Cells;
	} else if (selectItem == "02") {
		changeItem = Prismatic_Cells;
	} else if (selectItem == "03") {
		changeItem = Pouch_Cells;
	} else if (selectItem == "04") {
		changeItem = Other_Cells;
	}


	$("#sample_code_select").append("<option value='' selected disabled hidden>--선택하세요--</option>");

	for (var count = 0; count < changeItem.length; count++) {
		var name = "";

		if (changeItem[count] == "INR_18650_20R") {
			name = "01";
		} else if (changeItem[count] == "A123") {
			name = "02";
		} else if (changeItem[count] == "CS2") {
			name = "03";
		} else if (changeItem[count] == "CX2") {
			name = "04";
		} else if (changeItem[count] == "PL_Sample") {
			name = "05";
		} else if (changeItem[count] == "K2") {
			name = "06";
		}
		var option = $("<option value='" + name + "'>" + changeItem[count] + "</option>");
		$("#sample_code_select").append(option);

	}

	$("#sample_code_select").prop('disabled', false);
}

function selectchange2(Item) {
	var INR_18650_20R = ["Low_Current_OCV", "Incremental_Current_OCV", "Dynamic_Test_Profile"];
	var A123 = ["Low_Current_OCV", "Dynamic_Profile"];
	var CS2 = ["Type_1", "Type_2", "Type_3", "Type_4", "Type_5", "Type_6"];
	var CX2 = ["Type_1", "Type_2", "Type_3", "Type_4", "Type_6"];
	var PL_Sample = ["Initialization", "Capacity"];
	var K2 = ["K2_016", "K2_039"];

	var selectItem = Item;

	var changeItem = "";

	/*group code*/
	if (selectItem == "01") {
		changeItem = INR_18650_20R;
	} else if (selectItem == "02") {
		changeItem = A123;
	} else if (selectItem == "03") {
		changeItem = CS2;
	} else if (selectItem == "04") {
		changeItem = CX2;
	} else if (selectItem == "05") {
		changeItem = PL_Sample;
	} else if (selectItem == "06") {
		changeItem = K2;
	}


	$("#depth1_select").append("<option value='' selected disabled hidden>--선택하세요--</option>");

	for (var count = 0; count < changeItem.length; count++) {
		var option = $("<option value='" + changeItem[count] + "'>" + changeItem[count] + "</option>");
		$("#depth1_select").append(option);

	}

	$("#depth1_select").prop('disabled', false);
}

function selectchange3(Item) {

	var INR_18650_20R_Low_Current_OCV = ["Sample1", "Sample2"];
	var Incremental_Current_OCV = ["Sample1", "Sample2"];
	var Dynamic_Test_Profile = ["Initial_Capacity_Data", "DST", "FUDS", "US06", "BJDST"];
	var A123_Low_Current_OCV = ["Data_for_N10C", "Data_for_0C", "Data_for_10C", "Data_for_20C", "Data_for_25C", "Data_for_30C", "Data_for_40C", "Data_for_50C"];
	var Dynamic_Profile = ["Data_for_N10C", "Data_for_0C", "Data_for_10C", "Data_for_20C", "Data_for_25C", "Data_for_30C", "Data_for_40C", "Data_for_50C"];
	var CS2_Type_1 = ["CS2_33", "CS2_34"];
	var CS2_Type_2 = ["CS2_35", "CS2_36", "CS2_37", "CS2_38"];
	var CS2_Type_3 = ["CS2_3", "CS2_9"];
	var CS2_Type_4 = ["CS2_7"];
	var CS2_Type_5 = ["CS2_5", "CS2_6"];
	var CS2_Type_6 = ["CS2_24", "CS2_25"];
	var CX2_Type_1 = ["CX2_16", "CX2_33", "CX2_35"];
	var CX2_Type_2 = ["CX2_34", "CX2_36", "CX2_37", "CX2_38"];
	var CX2_Type_3 = ["CX2_9", "CX2_8"];
	var CX2_Type_4 = ["CX2_3"];
	var CX2_Type_6 = ["CX2_32"];
	var Initialization = ["Capacity_Characterization_Initialization"];
	var Capacity = ["Data_for_N40C", "Data_for_N5C", "Data_for_25C", "Data_for_50C"];
	var blank = [""];

	var selectItem = Item;

	var changeItem = "";

	/*depth1*/
	if (selectItem == "Low_Current_OCV") {
		if ($("#sample_code_select").val() == "01") {
			changeItem = INR_18650_20R_Low_Current_OCV;
		} else if ($("#sample_code_select").val() == "02") {
			changeItem = A123_Low_Current_OCV
		}
	} else if (selectItem == "Incremental_Current_OCV") {
		changeItem = Incremental_Current_OCV;
	} else if (selectItem == "Dynamic_Test_Profile") {
		changeItem = Dynamic_Test_Profile;
	} else if (selectItem == "Dynamic_Profile") {
		changeItem = Dynamic_Profile;
	} else if (selectItem == "CS2_Type_1") {
		changeItem = PL_Sample;
	} else if (selectItem == "CS2_Type_1") {
		changeItem = CS2_Type_1;
	} else if (selectItem == "CS2_Type_2") {
		changeItem = CS2_Type_2;
	} else if (selectItem == "CS2_Type_3") {
		changeItem = CS2_Type_3;
	} else if (selectItem == "CS2_Type_4") {
		changeItem = CS2_Type_4;
	} else if (selectItem == "CS2_Type_5") {
		changeItem = CS2_Type_5;
	} else if (selectItem == "CS2_Type_6") {
		changeItem = CS2_Type_6;
	} else if (selectItem == "CX2_Type_1") {
		changeItem = CX2_Type_1;
	} else if (selectItem == "CX2_Type_2") {
		changeItem = CX2_Type_2;
	} else if (selectItem == "CX2_Type_3") {
		changeItem = CX2_Type_3;
	} else if (selectItem == "CX2_Type_4") {
		changeItem = CX2_Type_4;
	} else if (selectItem == "CX2_Type_6") {
		changeItem = CX2_Type_6;
	} else if (selectItem == "Initialization") {
		changeItem = Initialization;
	} else if (selectItem == "Capacity") {
		changeItem = Capacity;
	}


	$("#depth2_select").append("<option value='' selected disabled hidden>--선택하세요--</option>");

	for (var count = 0; count < changeItem.length; count++) {
		var option = $("<option value='" + changeItem[count] + "'>" + changeItem[count] + "</option>");
		$("#depth2_select").append(option);

	}

	$("#depth2_select").prop('disabled', false);
}

function selectchange4(Item) {

	var Sample1 = ["Initial_Capacity_Data", "Data_for_0C"];
	var Sample2 = ["Initial_Capacity_Data", "Data_for_0C", "Data_for_25C"];
	var Incremental_Current_OCV_Sample1 = ["Initial_Capacity_Data", "Data_for_0C", "Data_for_25C", "Data_for_45C"];
	var Incremental_Current_OCV_Sample2 = ["Initial_Capacity_Data", "Data_for_0C", "Data_for_25C", "Data_for_45C"];

	var Dynamic_Test_Profile = ["Data_for_0C", "Data_for_25C", "Data_for_45C"];

	var Capacity = ["3M", "3W", "6M"];


	var selectItem = Item;

	var changeItem = "";


	if (selectItem == "Sample1") {
		if ($("#depth1_select").val() == "Low_Current_OCV") {
			changeItem = Sample1;
		} else if ($("#depth1_select").val() == "Incremental_Current_OCV") {
			changeItem = Incremental_Current_OCV_Sample1;
		}
	} else if (selectItem == "Sample2") {
		if ($("#depth1_select").val() == "Low_Current_OCV") {
			changeItem = Sample2;
		} else if ($("#depth1_select").val() == "Incremental_Current_OCV") {
			changeItem = Incremental_Current_OCV_Sample2;
		}
	} else if (selectItem == "DST" || selectItem == "FUDS" || selectItem == "US06" || selectItem == "BJDST") {
		changeItem = Dynamic_Test_Profile;
	} else if (selectItem == "Data_for_N40C" || selectItem == "Data_for_N5C" || selectItem == "Data_for_25C" || selectItem == "Data_for_50C") {
		changeItem = Capacity;
	}


	$("#depth3_select").append("<option value='' selected disabled hidden>--선택하세요--</option>");

	for (var count = 0; count < changeItem.length; count++) {
		var option = $("<option value='" + changeItem[count] + "'>" + changeItem[count] + "</option>");
		$("#depth3_select").append(option);

	}

	$("#depth3_select").prop('disabled', false);
}



//data submit

$(".data_search").on('click', function() {
	$("#form1").submit();
})


//download 확인 작업

function downloadchk(type_seq, file_name) {

	swal({
		title: file_name,
		text: "파일을 다운로드 받으시겠습니까?",
		icon: "warning",
		buttons: true,
		dangerMode: true,
	})
		.then((willDelete) => {
			if (willDelete) {
				swal("다운로드를 시작합니다.", {
					icon: "success",
					//사용자가 다운로드를 받고 싶다고 버튼 클릭시 다운로드 시작

				});
				location.href = "/org/downloadSampleData?type_seq=" + type_seq + "&filename=" + file_name;
				//다운로드 확인 버튼 클릭시 2초뒤에 페이지 새로 고침  에러나서 skip
				/*setTimeout(function(){
				location.reload();
				},2000);*/

			} else {
				swal("다운로드를 취소합니다.");
			}
		});

	//chart 선택 시 
}






let evalData = (function evalData() {

	let dom = {
		url: {
			evalData: "/evalData/chart",
		},
		column: [
			{
				"data": "seq", "title": "No", render: function(data, type, row, meta) {
					return meta.row + meta.settings._iDisplayStart + 1;
				}
			},
			{ "data": "date_time", "title": "시간" },
			{ "data": "voltage", "title": "전압" },
			{ "data": "current", "title": "전류" },
			{ "data": "charge_capacity", "title": "용량" },
			{ "data": "temperature_1", "title": "온도" },
		],
	}
	
	let chartDataSet = {
			voltage : {
				target : "voltage",
				title : "접압(V)",
				xAxis : "date_time",
				yAxis : "Voltage",
				encode : {
					x : "date_time",
					y : "voltage" 
				}
			},
			current : {
				target : "current",
				title : "전류(A)",
				xAxis : "date_time",
				yAxis : "Current",
				encode : {
					x : "date_time",
					y : "current" 
				}
			},
			charge_capacity : {
				target : "charge_capacity",
				title : "용량(Ah)",
				xAxis : "date_time",
				yAxis : "charge_capacity",
				encode : {
					x : "date_time",
					y : "charge_capacity" 
				}
			},
			temperature_1 : {
				target : "temperature_1",
				title : "온도(C)",
				xAxis : "date_time",
				yAxis : "temperature_1",
				encode : {
					x : "date_time",
					y : "temperature_1" 
				}
			}
		}

	let typeSeq = undefined;

	let _grid = undefined;
	
	let _stepData = undefined;

	let _changeData = undefined;


	function init() {
		event();
	}

	// modal 창 
	function chartView(data) {
		console.log("CHECK", data)
		typeSeq = data;
		$("#evalDataModal").modal("show");
	}

	function event() {

		$("#evalDataModal").on("shown.bs.modal", function() {
			loadingBarOn();
			let dataObj = {
				"type_seq": typeSeq
			};
			
			let check = $("input[name='unit']").val();

			let getData = function(data) {
				let start = new Date().getTime();
				_stepData = data["Trend"];
				_changeData = data["Change"];
				
				setEvalDataTable(_stepData);
				setTrendChart(_stepData,check);
				setAmountOfChangeChart(_changeData,check);
				let end = new Date().getTime();
		
				let diff = end-start;
				
				console.log(diff+"ms");
			};

			orgiAjax(dom.url.evalData, "POST", "", dataObj, getData);


		})
		
		$("#evalDataModal").on("hidden.bs.modal" , function(){
			$("#evalData_grid").empty();
			$("#evalData_grid").DataTable().destroy();
			$("input:radio[name='unit']").eq(0).attr("checked",true);
		})
	}

	//평가 데이터 테이블 구성
	function setEvalDataTable(data) {

		let option = {
			"scrollY": '500px',
			"scrollCollapse": true,
			"paging": false,
			"searching": false,
			"info": false,
			"data": data,
			"ordering": false,
			"columns": dom.column,
			"fixedHeader": {
				"header": true,
			},

		}

		_grid = $("#evalData_grid").DataTable(option);

		loadingBarOff();
	}
	
	function setTrendChart(data,check){
		let valueChart = echarts.init(document.getElementById("trendChart"));

		let target = chartDataSet[check];
		
		let option = {
	        dataset: [{
	            id: 'dataset_raw',
	            source: data
	        }, {
	            id: target.target,
	            fromDatasetId: 'dataset_raw',
	        }],
	        title: {
	            text: target.title
	        },
	        tooltip: {
	            trigger: 'axis'
	        },
	        xAxis: {
	            type: 'category',
	            nameLocation: 'middle',
				name : target.xAxis
	        },
	        yAxis: {
	            name: target.yAxis
	        },
	        series: [{
	            type: 'line',
	            datasetId: target.target,
	            showSymbol: false,
	            encode: target.encode
	        }]
	    };
		
		valueChart.setOption(option);
	}

	function setAmountOfChangeChart(data,check){
		let valueChart = echarts.init(document.getElementById("amountOfChangeChart"));

		let target = chartDataSet[check];
		
		let option = {
	        dataset: [{
	            id: 'dataset_raw',
	            source: data
	        }, {
	            id: target.target,
	            fromDatasetId: 'dataset_raw',
	        }],
	        title: {
	            text: target.title
	        },
	        tooltip: {
	            trigger: 'axis'
	        },
	        xAxis: {
	            type: 'category',
	            nameLocation: 'middle',
				name : target.xAxis
	        },
	        yAxis: {
	            name: target.yAxis
	        },
	        series: [{
	            type: 'line',
	            datasetId: target.target,
	            showSymbol: false,
	            encode: target.encode
	        }]
	    };
		
		valueChart.setOption(option);
		
	
	}
	
	function targetChange(target){
		
		
		let stepData = _stepData;
		
		let changData = _changeData;
		
		let check = $(target).val();
		
		setTrendChart(stepData,check);
		setAmountOfChangeChart(changData,check);
	}





	window.addEventListener('DOMContentLoaded', function() {
		console.log("WELCOME :: RULECHECKER");
		init();
	})

	return {
		chartView: chartView,
		targetChange : targetChange
	}

})()




