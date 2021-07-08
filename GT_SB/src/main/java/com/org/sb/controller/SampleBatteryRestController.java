package com.org.sb.controller;

import java.util.HashMap;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.org.sb.dto.CellDataRequestDto;
import com.org.sb.service.CellDataService;
import com.org.sb.service.CellSampleTypeService;
import com.org.sb.vo.CellSampleTypeVo;
import com.org.sb.vo.EvalDataVo;
import com.org.sb.vo.ResponseVo;

@RestController
public class SampleBatteryRestController {
	
	
	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	@Autowired
	CellSampleTypeService cellSampleTypeService;

	@Autowired
	CellDataService cellDataService;
	
	
	
	@PostMapping("/evalData/chart")
	public ResponseEntity<ResponseVo> chartView(@RequestParam("type_seq") int type_seq) {
		
		long start = System.currentTimeMillis();
		System.out.println("시작 ::" + start);
		logger.info("type_seq :::"+type_seq);
		
		HashMap<String, Object> chartDatas = new HashMap<String, Object>();
		
		
		List<EvalDataVo> list = cellDataService.stepData(type_seq);
		
		List<EvalDataVo> changeList = cellDataService.amountOfChangeData(list);
		
		chartDatas.put("Trend", list);
		chartDatas.put("Change", changeList);
		
		long end = System.currentTimeMillis();
		long diff = (long) ((end - start)/(1000.0));
		System.out.println("종료 ::" + end);
		System.out.println("시간 차이 :ㅣ:" +  diff);
		
		return new ResponseEntity<ResponseVo>(ResponseVo.builder().status(HttpStatus.OK).data(chartDatas).build(),HttpStatus.OK);
	}
}
