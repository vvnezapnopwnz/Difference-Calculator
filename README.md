### Hexlet tests and linter status:
[![Actions Status](https://github.com/vvnezapnopwnz/backend-project-lvl2/workflows/hexlet-check/badge.svg?branch=)](https://github.com/vvnezapnopwnz/backend-project-lvl2/actions?query=branch:)
[![Node CI](https://github.com/vvnezapnopwnz/backend-project-lvl2/actions/workflows/testsandlinter.yml/badge.svg)](https://github.com/vvnezapnopwnz/backend-project-lvl2/actions/workflows/testsandlinter.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/fe044dcfd9591efd7daa/maintainability)](https://codeclimate.com/github/vvnezapnopwnz/backend-project-lvl2/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/fe044dcfd9591efd7daa/test_coverage)](https://codeclimate.com/github/vvnezapnopwnz/backend-project-lvl2/test_coverage)

## Difference Calculator
Difference Calculator - A program that determines the difference between two data structures.

### Usage
The first step is to make sure you have the latest version of Node.js installed.
```bash
node -v
```
Install the dependencies in the local node_modules folder.
```bash
npm install
```
Add executable permissions to bin/gendiff.js by running 
```bash
chmod + x bin/gendiff.js 
```
in the root directory of the project. This will allow you to run the executable file directly from the console without specifying the interpreter (node).

Use the npm link command. It must be run from the root directory of the project.
```bash
npm link
```

Use command line to launch the info of the programm.

```bash
gendiff -h
```

As you launched the game you should choose 2 files containing 2 different data to let programm differentiate them.
As example:

```bash
gendiff file1.json file2.yml
```
This programm is able to read files in different extension formats: json, yaml and yml.
It also can output the difference info in various formats: stylish, plain and json.
**Examples of programm usage is presented below.**

[![asciicast](https://asciinema.org/a/Voqw5dFreXoPuB9bpGT638ox4.svg)](https://asciinema.org/a/Voqw5dFreXoPuB9bpGT638ox4)
[![asciicast](https://asciinema.org/a/9QPQKNPqXgThwrYryoAybgPow.svg)](https://asciinema.org/a/9QPQKNPqXgThwrYryoAybgPow)
[![asciicast](https://asciinema.org/a/1ZB4AAFOj3TOyZYI3IEyc4RAp.svg)](https://asciinema.org/a/1ZB4AAFOj3TOyZYI3IEyc4RAp)
[![asciicast](https://asciinema.org/a/ZwLOBRoFiholgeGTpMnP8QrwV.svg)](https://asciinema.org/a/ZwLOBRoFiholgeGTpMnP8QrwV)