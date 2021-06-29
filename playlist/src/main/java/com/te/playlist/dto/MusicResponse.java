package com.te.playlist.dto;

import java.io.Serializable;
import java.util.List;

import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.fasterxml.jackson.annotation.JsonRootName;

import lombok.Data;

@Data
@JsonRootName("response")
@JsonPropertyOrder({"status" , "msg"})
@XmlRootElement(name = "response")
@JsonInclude(JsonInclude.Include.NON_NULL)
public class MusicResponse implements Serializable{

	@JsonProperty("status")
	@XmlElement(name = "status-code")
	private int statusCode;
	
	
	private String  msg;
	
	@JsonProperty("music_info")
	@XmlElement(name = "music-info")
	private MusicPlayerBean bean;
	
	
	@Override
	public String toString() {
		return "MusicResponse [statusCode=" + statusCode + ", msg=" + msg + ", bean=" + bean + ", musicInfos="
				+ musicInfos + "]";
	}


	public int getStatusCode() {
		return statusCode;
	}


	public void setStatusCode(int statusCode) {
		this.statusCode = statusCode;
	}


	public String getMsg() {
		return msg;
	}


	public void setMsg(String msg) {
		this.msg = msg;
	}


	public MusicPlayerBean getBean() {
		return bean;
	}


	public void setBean(MusicPlayerBean bean) {
		this.bean = bean;
	}


	public List<MusicPlayerBean> getMusicInfos() {
		return musicInfos;
	}


	public void setMusicInfos(List<MusicPlayerBean> musicInfos) {
		this.musicInfos = musicInfos;
	}


	private List<MusicPlayerBean > musicInfos;
}