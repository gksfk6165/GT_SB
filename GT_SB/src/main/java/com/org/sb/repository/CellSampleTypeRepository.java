package com.org.sb.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.org.sb.vo.CellSampleTypeVo;

@Repository
public interface CellSampleTypeRepository extends JpaRepository<CellSampleTypeVo , Long> {
	

	public List<CellSampleTypeVo> findAll();
	
	
	public Page<CellSampleTypeVo> findAll(Specification<CellSampleTypeVo> spec,Pageable pageable);
	

}

