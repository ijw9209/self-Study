package com.board.demo.dto;


public class BoardDto {

	private String name;
	private String title;
	private String context;
	
	public BoardDto() {
	}

	public BoardDto(String name, String title, String context) {
		super();
		this.name = name;
		this.title = title;
		this.context = context;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getContext() {
		return context;
	}

	public void setContext(String context) {
		this.context = context;
	}
	
}
