# -*- coding: UTF-8 -*-
"""
module		: converter_specs.py
description	: specifications for testing a REST-ful RGB/Hex color converter
"""
from specs.spec_helper import get, post, postd

with description('describe a color converter'):

	with context('converting from rgb to hex'):

		with description('when converting red to its hex value'):

			with it ('should return the value ff0000'):
				result  = convert_to_hex_from_rgb({"red":255, "green":0, "blue":0})
				assert result == 'ff0000' 

		with description('when converting green to its hex value'):
			with it('should return the value 00ff00'):
				result = convert_to_hex_from_rgb({'red':0, 'green':255, 'blue':0})
				assert result == '00ff00'


		with description('when converting blue to its hex value'):
			with it('should return the value of 0000ff'):
				result = convert_to_hex_from_rgb({'red':0, 'green':0, 'blue':255})
				assert result == '0000ff'


	with context('converting from hex to rgb'):
		with description('when converting red to is rgb value'):
			with it('should convert ff0000 to {"red":255, "green":0, "blue":0}'): 
				expected = {'red':255, 'green':0, 'blue':0}
				actual = convert_to_rgb_from_hex({'hex': 'ff0000'})
				assert expected == actual

		with description('when converting green to its rgb value'):
			with it('should convert 00ff00 to {"red":0, "green":255, "blue":0}'):
				expected = {'red':0, 'green':255, 'blue': 0}
				actual = convert_to_rgb_from_hex({'hex': '00ff00'})
				assert expected == actual

		with description('when converting blue to its rgb value'):
			with it('should convert 0000ff to {"red":0, "green":0, "blue":255}'):
				expected = {'red':0, 'green':0, 'blue': 255}
				actual = convert_to_rgb_from_hex({'hex': '0000ff'})
				assert expected == actual



# -- utility functions to aid in testing --
def convert_to_hex_from_rgb(data=None):
	url = get_converter_url() + "?convert=toHexFromRGB"
	response = postd(url, data)
	result = response['hex']
	return result


def convert_to_rgb_from_hex(data=None):
	url = get_converter_url() + "?convert=toRGBFromHex"
	response = postd(url, data)
	return response

def get_converter_url():
	return 'http://localhost:3000/api/converter/'

