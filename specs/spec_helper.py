# -*- coding: UTF-8 -*-
"""
module		: spec_helper.py
description	: helper module for testing with utility functions
"""
import sys
import os
import yaml
import requests
import json

def get(url):
	"""
	Description:
		Sends a GET request to the HTTP resource and returns the result in JSON format
	Args:
		url: Location of the HTTP resource to retreive data.
	"""
	response = requests.get(url)
	data = response.json()
	return data 


def post(url):
	"""
		Description: 
			Performs a POST operation to the HTTP endpoint
		Args:
			url: URL to the HTTP endpoint
	"""
	response = requests.post(url)
	data = response.json()
	return data


def postd(url, data):
	"""
		Description: 
			Performs a POST operation to the HTTP endpoint
		Args:
			url: URL to the HTTP endpoint
			data: Dictionary describing the JSON data to submit to the HTTP endpoint
	"""
	response = requests.post(url, data=data)
	data = response.json()
	return data
		
