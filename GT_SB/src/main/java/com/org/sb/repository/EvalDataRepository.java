package com.org.sb.repository;

import java.util.List;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.org.sb.vo.CellDataVo;
import com.org.sb.vo.EvalDataVo;

@Repository
public interface EvalDataRepository extends JpaRepository<EvalDataVo, Long> {

	public List<EvalDataVo> findByTypeSeq(int type_seq);
}
