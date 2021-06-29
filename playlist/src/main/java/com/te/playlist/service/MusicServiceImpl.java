package com.te.playlist.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.te.playlist.dao.MusicDAO;
import com.te.playlist.dto.MusicPlayerBean;



@Service
public class MusicServiceImpl implements MusicService {

	@Autowired
	MusicDAO dao;

	

	@Override
	public MusicPlayerBean getMusicData(Integer id) {
		return dao.getMusicData(id);
	}

	@Override
	public boolean addMusic(MusicPlayerBean musicBean) {

		return dao.addMusic(musicBean);
	}

	@Override
	public boolean updateMusic(MusicPlayerBean infoBean) {

		return dao.updateMusic(infoBean);
	}

	@Override
	public boolean deleteMusic(Integer id) {

		return dao.deleteMusic(id);
	}

	@Override
	public List<MusicPlayerBean> getAllMusicDetails() {
	
		return dao.getAllMusicDetails();
	}

}