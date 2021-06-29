package com.te.playlist.controller;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import com.te.playlist.custexp.MusicException;
import com.te.playlist.dto.MusicResponse;

@RestControllerAdvice
public class MusicRestControllerAdvice {

	@ExceptionHandler(MusicException.class)
	public MusicResponse handleEmployeeExp(MusicException exception) {
		MusicResponse response = new MusicResponse();
		response.setStatusCode(500);
		response.setMsg(exception.getMessage());
		return response;
		
	}
}