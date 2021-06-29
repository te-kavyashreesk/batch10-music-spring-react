package com.te.playlist.dto;
import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonRootName;

import lombok.Data;
@Data
@Entity
@Table(name = "music_info")
@XmlRootElement(name = "music-info")
@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonRootName("music_info")
public class MusicPlayerBean implements Serializable {
	
	@Id
	@Column(name = "id")
	private Integer Song_ID ;
	
	@Column
	private String Song_Title;
	
	@Column
	private String Artist_Name;
	
	@Column
	private String Album_Name;
	
	@Column
	private String Song_Location;
	
	@Column
	private String Description;

	public Integer getSong_ID() {
		return Song_ID;
	}

	public void setSong_ID(Integer song_ID) {
		Song_ID = song_ID;
	}

	public String getSong_Title() {
		return Song_Title;
	}

	public void setSong_Title(String song_Title) {
		Song_Title = song_Title;
	}

	public String getArtist_Name() {
		return Artist_Name;
	}

	public void setArtist_Name(String artist_Name) {
		Artist_Name = artist_Name;
	}

	public String getAlbum_Name() {
		return Album_Name;
	}

	public void setAlbum_Name(String album_Name) {
		Album_Name = album_Name;
	}

	public String getSong_Location() {
		return Song_Location;
	}

	public void setSong_Location(String song_Location) {
		Song_Location = song_Location;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	@Override
	public String toString() {
		return "MusicPlayerBean [Song_ID=" + Song_ID + ", Song_Title=" + Song_Title + ", Artist_Name=" + Artist_Name
				+ ", Album_Name=" + Album_Name + ", Song_Location=" + Song_Location + ", Description=" + Description
				+ "]";
	}
	

}