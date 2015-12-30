:: batch script to watch directory for specification changes and automatically run the tests
cls
echo Python test specification watcher is watching changes for  "*_specs.py" files in the top-level directory "%CD%" ...

:: need to start the resolution for packages in the root directory for the test engine
set PYTHONPATH=.

::need to set the code page and encoding for mamba unit test package (it has ASCII icons for test status)
chcp 65001
set PYTHONIOENCODING=utf-8

:: finally start the watcher for changes in unit tests for automatic execution in the current directory
python watcher.py .