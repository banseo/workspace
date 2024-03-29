package com.kh.opendata.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLEncoder;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class OpenAPIController {

	// 발급받은 인증키 변수 처리
	public static final String SERVICEKEY = "1S%2FfP3Kqg5ktd3tiNu0B3rGawJDxYMxAkGaLRBAuK%2B6T4dKOvyE5Ldz2Vp9RcUiA1HeHTMnEwg2aw4RPS05t%2FA%3D%3D";	

	// json 형식으로 대기오염 OpenAPI 활용하기
	@ResponseBody
	// @RequestMapping(value="air", produces = "application/json; charset=UTF-8")
	public String airMethod(String location) throws IOException {

		// OpenAPI 서버로 요청하고자 하는 url 작성
		String url = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";
		url += "?serviceKey=" + SERVICEKEY; // 서비스키 추가
		url += "&sidoName=" + URLEncoder.encode(location, "UTF-8"); // 지역명 추가 (한글이 들어가면 인코딩 처리해야함)
		url += "&returnType=json"; // 리턴 타입
		url += "&numOfRows=100"; // 리턴 타입

		// 1. 작성된 url 정보를 넣어 URL 객체 생성
		URL requesturl = new URL(url);

		// 2. 생성된 URL 객체로 URLConnection 생성
		HttpURLConnection urlConn = (HttpURLConnection)requesturl.openConnection();

		// 3. 요청 시 필요한 Header 설정
		urlConn.setRequestMethod("GET");

		// 4. 해당 OpenAPI 서버로 요청 후 입력 스트림을 이용해서 응답데이터 읽어오기
		BufferedReader br = new BufferedReader(new InputStreamReader(urlConn.getInputStream()));

		String responseText = "";
		String line ;
		while((line = br.readLine()) != null) {
			responseText += line;

		}

		// 5. 다 사용한 스트림 반납 및 연결 해제
		br.close();
		urlConn.disconnect();

		System.out.println(responseText);

		return responseText;
	}


	// public static final String SERVICEKEY = "1S%2FfP3Kqg5ktd3tiNu0B3rGawJDxYMxAkGaLRBAuK%2B6T4dKOvyE5Ldz2Vp9RcUiA1HeHTMnEwg2aw4RPS05t%2FA%3D%3D";	
	// xml 형식으로 대기오염 OpenAPI 활용하기
	@GetMapping(value = "air", produces = "text/xml; charset=UTF-8")
	@ResponseBody
	public String airPollution(String location) throws IOException {
		// 필요한 url 가져오기
		String url = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";

		url += "?serviceKey=" + SERVICEKEY; 
		url += "&sidoName=" + URLEncoder.encode( location , "UTF-8"); 
		url += "&returnType=xml"; 
		url += "&numOfRows=20";

		// URL 객체 생성
		URL requestUrl = new URL(url);

		// URL Connection 생성
		HttpURLConnection urlConn = (HttpURLConnection)requestUrl.openConnection();

		// Header 생성
		urlConn.setRequestMethod("GET");

		// 스트림 생성
		BufferedReader br = new BufferedReader(new InputStreamReader(urlConn.getInputStream()));

		// 데이터 읽어서 저장
		String responseText = "";
		String line;

		while((line=br.readLine()) != null) {
			responseText += line;
		}

		// 자원 반납
		br.close();
		urlConn.disconnect();

		System.out.println(responseText);

		return responseText;
	}


	// xml 형식으로 지진해일 대피소 OpenAPI 활용하기
	@GetMapping(value = "shelter", produces = "text/xml; charset=UTF-8")
	@ResponseBody
	public String shelterList() throws IOException {
		String url = "http://apis.data.go.kr/1741000/TsunamiShelter3/getTsunamiShelter1List";

		url += "?serviceKey=" + SERVICEKEY; 
		url += "&pageNo=1"; 
		url += "&numOfRows=10"; 
		url += "&type=xml";

		URL requestUrl = new URL(url);

		// URL Connection 생성
		HttpURLConnection urlConn = (HttpURLConnection)requestUrl.openConnection();

		// Header 생성
		urlConn.setRequestMethod("GET");

		// 스트림 생성
		BufferedReader br = new BufferedReader(new InputStreamReader(urlConn.getInputStream()));

		// 데이터 읽어서 저장
		String responseText = "";
		String line;

		while((line=br.readLine()) != null) {
			responseText += line;
		}

		// 자원 반납
		br.close();
		urlConn.disconnect();

		System.out.println(responseText);

		return responseText;
	}




}
