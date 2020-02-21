package com.board.demo.controller;

import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.board.demo.dto.BoardDto;
import com.board.demo.model.biz.BoardBiz;

@Controller
public class BoardController {

	@Autowired
	private BoardBiz Biz;

	@GetMapping(value = "/" ,headers ="Accept=application/json")
	public void list(Model model) {
		
		List<BoardDto> boardlist = Biz.selectList();
		
		JSONObject listObj = new JSONObject();
		JSONArray list = new JSONArray();
		for(int i = 0; i < boardlist.size(); i++) {
			
			JSONObject dto = new JSONObject();
			
			dto.put("name", boardlist.get(i).getName());
			dto.put("title", boardlist.get(i).getTitle());
			dto.put("context", boardlist.get(i).getContext());
			
			list.add(i, dto);
		}
		listObj.put("BoardDto", list);
		
		model.addAttribute("list", listObj);
		
	}

}
