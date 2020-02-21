package com.board.demo.model.biz;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.board.demo.dto.BoardDto;
import com.board.demo.model.dao.BoardDaoImpl;

@Service
public class BoardBizImpl implements BoardBiz {

	@Autowired
	private BoardDaoImpl dao;
		
	@Override
	public List<BoardDto> selectList() {
		// TODO Auto-generated method stub
		return dao.selectList();
	}

}
