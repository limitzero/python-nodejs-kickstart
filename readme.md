##Simple Converter Kata for BDD with Python and Node.js


This is one implementation of the [color converter kata] (https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha) done in python for unit tests with the back-end server being written in node.js. 

To setup the feed back cycle for the components, first open two command prompts and navigate to the root directory of the project. Enable the watcher script by typing "watch" in one prompt and in the other "nodemon" to enable the node server.
 
Also, be sure to in your package.json to make sure that the "main" entry points to "server.js" and the "start" entry points to "node server.js".

To use nodemon as the file watcher, open the package.json file and change the "test" entry from __"mocha ./tests/*.js"__ to __"mamba ./specs/*_specs.py"__. This will trigger the mamaba CLI on every change to the test files. 


###__Files__
1. 	pytest.ini 	- 	Tells the pytest runner how to file files that are test cases (only if you are using pytest. Refer to watcher.py for information)

2. 	server.js 	- 	Basic information to setup the node.js enviroment with express as the middleware for handling HTTP requests

3.	watch.cmd 	-	Starts the auto-test cycle by watching the root directory for changes in tests and executes all tests in the changed file.


###__Resources__
Below are all of the installed packages needed for the kick-starter along with the command line for installation.
 
 [PyTest (unit testing framework)](http://pytest.org/latest/)
>pip install pytest

[Mamba (BDD tool for Python testing)](https://github.com/nestorsalceda/mamba)
> pip install mamba

[Requets (HTTP manager for Python)](http://docs.python-requests.org/en/latest/)
> pip install requests

[PyYAML (YAML manager for Python, represent JSON as a named array)](http://pyyaml.org/wiki/PyYAML)
> pip install pyyaml

[Watchdog (file monitor for Python)](http://pythonhosted.org/watchdog/)
> pip install watchdog

[NodeMon (monitoring tool for Node)](https://github.com/remy/nodemon)
> npm install -g nodemon 


###__Notes__
On Windows machines, be sure to set the code-page and encoding for the mamba runner to properly display its status icons on your tests. From the command prompt that will run the unit tests via Mamba, type in the followling before executing the CLI program mamba (one per line)

>chcp 65001
>set PYTHONIOENCODING=utf-8
