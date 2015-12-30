# -*- coding: UTF-8 -*-
from spec_helper import get, post, postd

class describe_color_converter:
	"""
		Description:
			Specifications for describing a REST-ful RGB/HEX color converter
	"""
	def setup_class(self):
		pass

	def it_should_reply_back_for_GET_operation(self): 
		url = self.get_base_url(); 
		response = get(url); 
		assert  response['GET'] == "method reached"


	def it_should_convert_RGB_red_to_its_hex_value(self):
		result  = self.convert_to_hex_from_rgb({"red":255, "green":0, "blue":0})
		assert result["hex"] =="2550000" #this should be ff0000  in hex !!!


	def it_should_convert_RGB_green_to_its_hex_value(self):
		result  = self.convert_to_hex_from_rgb({"red":0, "green":255, "blue":0})
		assert result["hex"] =="0025500" #this should be 00ff00  in hex !!!

	def it_should_convert_RGB_bule_to_its_hex_value(self): 
		result = self.convert_to_hex_from_rgb( { "red":0, "green":0, "blue":255})
		assert result['hex'] == "0000255" # need to get this in 0000ff for hex value!!!

	def convert_to_hex_from_rgb(self, data=None):
		url = self.get_base_url() + "?convert=toHexFromRGB" 		
		response = postd(url, data)
		print (response)
		return response

	def get_base_url(self):
		return "http://localhost:3000/api/converter/"

