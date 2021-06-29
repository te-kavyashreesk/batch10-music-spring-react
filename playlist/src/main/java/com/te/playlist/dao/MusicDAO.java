package com.te.playlist.dao;

import java.util.List;
import com.te.playlist.dto.MusicPlayerBean;
public interface MusicDAO {

	public MusicPlayerBean getMusicData(Integer id);
	
	public boolean addMusic(MusicPlayerBean MusicBean);
	
	public boolean updateMusic(MusicPlayerBean infoBean);
	
	public boolean deleteMusic(Integer id);
	
	public List<MusicPlayerBean> getAllMusicDetails();
}