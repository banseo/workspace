package com.kh.opendata.controller;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class APIController {
	
	private static final String serviceKey = "1S%2FfP3Kqg5ktd3tiNu0B3rGawJDxYMxAkGaLRBAuK%2B6T4dKOvyE5Ldz2Vp9RcUiA1HeHTMnEwg2aw4RPS05t%2FA%3D%3D";
	
	@ResponseBody
	@RequestMapping(value = "air.do", produces = "application/json; charset=UTF-8")
	public String airPollution(String location) throws IOException{
		
		String url = "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty";
		
		url += "?serviceKey=" + serviceKey; 
		url += "&sidoName=" + URLEncoder.encode( location , "UTF-8"); 
		url += "&returnType=json"; 
		
		URL requestUrl = new URL(url);
		HttpURLConnection urlConnection = (HttpURLConnection)requestUrl.openConnection();
		
		urlConnection.setRequestMethod("GET");
		
		BufferedReader br = new BufferedReader(new InputStreamReader(urlConnection.getInputStream()));
		
		String responseText = "";
		String line;
		
		while((line = br.readLine()) != null) {
			responseText += line;
		}
		
		
		br.close();
		urlConnection.disconnect();
		
		return responseText;
		
	}


}
