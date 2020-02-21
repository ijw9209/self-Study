package com.board.demo.model.dao;

import java.util.List;

import com.board.demo.dto.BoardDto;

public interface BoardDao {
	
	String namespace = "testboard.";
	
	public List<BoardDto> selectList();

}
