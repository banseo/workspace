package edu.kh.project.myPage.model.service;

import edu.kh.project.member.model.dto.Member;

public interface MyPageService {

	/** 회원 정보 수정 Service
	 * @param updateMember
	 * @return
	 */
	int updateInfo(Member updateMember);

}
