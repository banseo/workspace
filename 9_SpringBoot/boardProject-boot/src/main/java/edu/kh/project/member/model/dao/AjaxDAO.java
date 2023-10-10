package edu.kh.project.member.model.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import edu.kh.project.member.model.dto.Member;

@Repository // DB 연결 의미 + bean 등록
public class AjaxDAO {
	
	@Autowired // bean 중에서 타입이 같은 객체를 DI
	private AjaxMapper mapper;

	/** 이메일로 닉네임 조회 DAO
	 * @param email
	 * @return nickname
	 */
	public String selectNickname(String email) {
		return mapper.selectNickname(email);
	}

	/** 닉네임으로 전화번호 조회 DAO
	 * @param inputNickname
	 * @return memberTel
	 */
	public String selectMemberTel(String nickname) {
		return mapper.selectMemberTel(nickname);
	}

	/** 이메일 중복 검사 DAO
	 * @param email
	 * @return count
	 */
	public int emailDupCheck(String email) {
		return mapper.emailDupCheck(email);
	}

	/** 닉네임 중복 검사 DAO
	 * @param nickname
	 * @return count
	 */
	public int nicknameDupCheck(String nickname) {
		return mapper.nicknameDupCheck(nickname);
	}

	/** 이메일로 회원 정보 조회
	 * @param email
	 * @return member
	 */
	public Member selectMember(String email) {
		return mapper.selectMember(email);
	}

	/** 이메일이 일부라도 일치하는 회원 조회
	 * @param input
	 * @return
	 */
	public List<Member> selectMemberList(String input) {
		return mapper.selectMemberList(input);
	}
	
	

}
