package com.org.sb.dto;

import lombok.Getter;

@Getter
public class CellDataRequestDto {

	private int page;
	private int size;
	private String groupcode;
	private String depth1;
	private String depth2;
	private String depth3;
	
	public CellDataRequestDto() {
		this.page = 0;
		this.size = 10;
	}
}
