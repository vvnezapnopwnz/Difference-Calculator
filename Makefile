#Makefile
install: #install npm ci
	npm ci

publish: 
	npm publish --dry-run
lint:
	npx eslint .
