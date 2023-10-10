package edu.kh.project.member.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import edu.kh.project.member.model.dao.MemberDAO;
import edu.kh.project.member.model.dto.Member;

@Service
public class MemberServiceImpl implements MemberService {

   @Autowired
   private MemberDAO dao;

   @Autowired
   private BCryptPasswordEncoder bcrypt;

   @Override
   public Member login(Member inputMember) {

      System.out.println("암호화 확인 : " + bcrypt.encode(inputMember.getMemberPw()));


      Member loginMember = dao.login(inputMember);

      if (loginMember != null) { 

         if (bcrypt.matches(inputMember.getMemberPw(), loginMember.getMemberPw())) {

            loginMember.setMemberPw(null);

         } else { 
            loginMember = null; 
         }

      }

      return loginMember;
   }


   // 회원 가입 서비스
   @Transactional(rollbackFor = { Exception.class })
   @Override
   public int signUp(Member inputMember) {

      String encPw = bcrypt.encode(inputMember.getMemberPw());
      inputMember.setMemberPw(encPw);

      int result = dao.signUp(inputMember);

      return result;
   }

}