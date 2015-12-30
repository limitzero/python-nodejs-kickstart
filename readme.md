#Simple Converter Kata for BDD with Python and Node.js


This is one implementation of the [color converter kata] (https://semaphoreci.com/community/tutorials/) done in python for unit tests with the back-end server being written in node.js. 

To setup the feed back cycle for the components, first open two command prompts and navigate to the root directory of the project. Enable the watcher script by typing "watch" in one prompt and in the other "nodemon" to enable the node server.
 
Also, be sure to in your package.json to make sure that the "main" entry points to "server.js" and the "start" entry points to "node server.js".

To use nodemon as the file watcher, open the package.json file and change the "test" entry from "mocha ./tests/*.js" to "mamba ./specs/*_specs.py". This will trigger the mamaba CLI on every change to the test files. 


##Files
1. 	pytest.ini 	- 	Tells the pytest runner how to file files that are test cases (only if you are using pytest. Refer to watcher.py for information)

2. 	server.js 	- 	Basic information to setup the node.js enviroment with express as the middleware for handling HTTP requests

3.	watch.cmd 	-	Starts the auto-test cycle by watching the root directory for changes in tests and executes all tests in the changed file.



 ##Resources:
- Watch.cmd : local script running in the root diretory of the code looking for tests/specifications to execute

- [PyTest (unit testing framework)]()

Ex: 
>
>>pip install pytest
>

- [Mamba (BDD tool for Python testing)](https://github.com/nestorsalceda/mamba)

Ex: 
>
>> pip install mamba
> 


- [Requets (HTTP manager for Python)](http://docs.python-requests.org/en/latest/)
Ex:
>
>> pip install requests
>


- [PyYAML (YAML manager for Python, represent JSON as a named array)](http://pyyaml.org/wiki/PyYAML)

Ex:
>
>> pip install pyyaml
>


- [Watchdog (file monitor for Python)](http://pythonhosted.org/watchdog/)

Ex:
>
>> pip install watchdog
>


- [NodeMon (monitoring tool for Node)] (https://github.com/remy/nodemon)
Ex: 
>
>> npm install -g nodemon
> 




##Notes
- On Windows machines, be sure to set the code-page and encoding for the mamba runner to properly display its status icons on your tests. From the command prompt that will run the unit tests via Mamba, type in the followling before executing the CLI program mamba (one per line)

chcp 65001
set PYTHONIOENCODING=utf-8
