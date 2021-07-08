package com.org.sb.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity(name = "EvalDataVo")
@Table(name = "cell_data")
public class EvalDataVo {

	@Id
	private Long seq;

	@Column(name = "type_seq")
	private int typeSeq;

	private String date_time;

	private double current;

	private double voltage;
	
	private double charge_capacity;
	
	private double temperature_1;
    
}
