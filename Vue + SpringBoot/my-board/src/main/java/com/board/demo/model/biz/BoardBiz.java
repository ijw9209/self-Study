package com.board.demo.model.biz;

import java.util.List;

import com.board.demo.dto.BoardDto;

public interface BoardBiz {

	public List<BoardDto> selectList();
}
