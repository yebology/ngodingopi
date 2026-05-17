.DEFAULT_GOAL := help

.PHONY: help install dev build lint clean commit push

help: ## Show this help message
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

install: ## Install dependencies
	npm install

dev: ## Start development server
	npm run dev

build: ## Build for production
	npm run build

lint: ## Run linter
	npm run lint

clean: ## Remove build artifacts and caches
	rm -rf .next node_modules/.cache

commit: ## Stage all, show status, and commit with prompt
	@git add .
	@git status
	@read -p "Commit message: " msg; \
	git commit -m "$$msg"

push: ## Push to remote (auto set upstream on first push)
	@BRANCH=$$(git rev-parse --abbrev-ref HEAD); \
	if git config --get branch.$$BRANCH.remote > /dev/null 2>&1; then \
		git push; \
	else \
		echo "First push for branch '$$BRANCH', setting upstream..."; \
		git push -u origin $$BRANCH; \
	fi
