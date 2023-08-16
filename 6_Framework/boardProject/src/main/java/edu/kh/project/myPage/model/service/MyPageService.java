package edu.kh.project.myPage.model.service;

import edu.kh.project.member.model.dto.Member;

public interface MyPageService {

	/** 회원 정보 수정 Service
	 * @param updateMember
	 * @return
	 */
	int updateInfo(Member updateMember);

	
	
	/** 비밀번호 변경 Service
	 * @param currentPw
	 * @param newPw
	 * @param memberNo
	 * @return result
	 */
	int changePw(String currentPw, String newPw, int memberNo);



	/** 회원 탈퇴 Service
	 * @param memberPw
	 * @param memberNo
	 * @return result
	 */
	int secession(String memberPw, int memberNo);

}
