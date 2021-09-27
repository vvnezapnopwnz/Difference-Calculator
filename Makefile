#Makefile
install: #install npm ci
	npm ci

publish: 
	npm publish --dry-run
lint:
	npx eslint .

test-coverage:
	npm test -- --coverage --coverageProvider=v8

publish:
	npm publish