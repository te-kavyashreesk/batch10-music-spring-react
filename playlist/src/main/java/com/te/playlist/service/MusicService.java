package com.te.playlist.service;
import java.util.List;
import com.te.playlist.dto.MusicPlayerBean;


public interface MusicService {
	
	public MusicPlayerBean getMusicData(Integer id);

	public boolean addMusic(MusicPlayerBean MusicBean);

	public boolean updateMusic(MusicPlayerBean infoBean);

	public boolean deleteMusic(Integer id);

	public List<MusicPlayerBean> getAllMusicDetails();
}