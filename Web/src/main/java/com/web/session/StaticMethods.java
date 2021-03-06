package com.web.session;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.json.simple.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import config.web.WebConfig;

public class StaticMethods {
	
	public final static String StrINDIA = "India";
	public static String UploadDocumentPath = "D:\\admissions\\";
	public static final Logger LOGGER = LoggerFactory.getLogger(WebConfig.class);
	
	@SuppressWarnings("unchecked")
	public static JSONObject ResponseJson(Boolean success, String successMessage, String errorMessage) {
		JSONObject jsonObject = new JSONObject();
		jsonObject.put("success", success);
		jsonObject.put("successMessage", successMessage);
		jsonObject.put("errorMessage", errorMessage);
		return jsonObject;
	}
	
	public static String GetCurrentDateString(String format) {
		Date today = new Date();
		DateFormat dateFormat = new SimpleDateFormat(format);
		return dateFormat.format(today);
	}
}
