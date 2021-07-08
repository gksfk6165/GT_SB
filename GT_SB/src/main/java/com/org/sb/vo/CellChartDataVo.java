package com.org.sb.vo;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Index;
import javax.persistence.Table;

import lombok.Data;

@Data
@Entity(name="CellChartDataVo")
@Table(name="cell_data")
public class CellChartDataVo {

	@Id
	private Long seq;
	
	@Column(name="type_seq")
	private int typeSeq;
	
	private int data_point;
	
	private double step_time;
	
	private int step_index;
	
	private int cycle_index;
	
    private double current;
    
    private double voltage;
    
    private double charge_capacity;
    
    private double discharge_capacity;
    
    private double dv_dt;
    
    private double temperature_1;
    
    private double temperature_2;

    
}
