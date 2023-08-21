package com.ncs.test.member.controller;

import org.springframework.stereotype.Controller;


	



import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.ncs.test.member.model.vo.Member
com.ncs.test.member.model.service.MemberService




@Controller 
@RequestMapping("/member") 
@SessionAttributes({"loginMember"}) 
public class MemberController {
	
	@Autowired
	private MemberService service;
	

	
	
	
	
	@PostMapping("/login")
	public String login(Member inputMember, Model model
						, @RequestHeader(value="referer") String referer
						, @RequestParam(value="saveId", required=false) String saveId
						, HttpServletResponse resp
						, RedirectAttributes ra) {

		Member loginMember = service.login(inputMember);
		
		String path = "redirect:";
		
		if(loginMember != null) { 
			path += "/"; 
			
			
			
		} else { // 로그인 실패 시
			path += referer; 
			
			ra.addFlashAttribute("message", "아이디 또는 비밀번호가 일치하지 않습니다.");
			
			
		}
		
		return path;
	}
	
	
	
	
	public String exceptionHandler(Exception e, Model model) {
		
		
		e.printStackTrace(); 
		
		model.addAttribute("e", e);

		return "common/error";
	}
	
	
	
