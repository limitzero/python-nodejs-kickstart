"""
module			: watcher.py
description	: Script to automatically watch a directory (via watchdog) for tests and run them via py.test
"""
import sys
import os.path
import subprocess
import time
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class SpecificationsEventHandler(FileSystemEventHandler):
	"""Runs the tests inside the specifications class when any specification file is modified
	"""
	
	def __init__(self): 
		self.paused = False
		self.banner = "============================================================"
  
	def on_modified(self, event):
		super(SpecificationsEventHandler, self).on_modified(event)
		"""
			Description:
				Catches the file modified event from the watchdog package and 
				creates the full path to the file for submission to the test engine 
				of choice.
				
			Args:
				event: Contains the information for the file system event 
				when modification has occurred
		"""
		
		
		# file modified triggers directory modified as well...		
		if event.is_directory:
			return

		if self.paused: 
			return

		if event.src_path.endswith("_specs.py") and not self.paused:
			self.paused = True
			#filename = os.path.basename(event.src_path)
			directory = os.path.abspath(os.path.dirname(event.src_path))
			filename = os.path.basename(event.src_path)
			file = os.path.join(directory, filename)

			print(self.banner, end="\n")
			print("testing specifications found in file: {0}".format(file))
			print("")
			
			# if using pytest, uncomment the line below
			#subprocess.call(['py.test', '-v',  file], shell=True)	
			
			#using mamba as the test engine:
			subprocess.call(['mamba',  file], shell=True)	

			print(self.banner, end="\n")

			self.paused = False
			return


if __name__ == "__main__":
    path = sys.argv[1]
    event_handler = SpecificationsEventHandler()
    observer = Observer()
    observer.schedule(event_handler, path, recursive=True)
    observer.start()
    try:
        while True:
            time.sleep(1)
    except KeyboardInterrupt:
        observer.stop()
    observer.join() 
