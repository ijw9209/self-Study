package com.board.demo.controller;

import java.util.HashMap;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.board.demo.dto.BoardDto;
import com.board.demo.model.biz.BoardBiz;

@Controller
public class BoardController {

	@Autowired
	private BoardBiz Biz;
	
	@GetMapping("/api/hello")
	public String hello() {
		return "hi";
	}

	

}
