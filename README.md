cat << 'EOF' > README.md
# UI Component Garden - Assignment 13

* **GitHub Repository:** [https://github.com/nsingh600/navjot_singh_assignment_13](https://github.com/nsingh600/navjot_singh_assignment_13)
* **Live Docker Preview:** [http://localhost:8018](http://localhost:8018)

A complete React UI component library and toolkit built with Create React App and Storybook, containerized using Docker, and fully responsive.

---

## Table of Contents
1. [Terminal Workflow & Bash Commands](#1-terminal-workflow--bash-commands)
2. [Setup & Installation](#2-setup--installation)
3. [Component Source Codes](#3-component-source-codes)

---

## 1. Terminal Workflow & Bash Commands

```bash
# Initialize git and navigate to project folder
git init
cd navjot_singh_assignment_13

# Install dependencies
npm install

# Run Jest tests (without watch mode)
npm test -- --watchAll=false

# Run Storybook component environment
npm run storybook

# Build optimized production assets
npm run build

# Stop and remove any existing Docker container
docker rm -f navjot_singh_assignment_13_container 2>/dev/null || true

# Build the Docker image
docker build -t navjot_singh_assignment_13 .

# Run the container mapping port 8018
docker run -d -p 8018:8018 --name navjot_singh_assignment_13_container navjot_singh_assignment_13

# Commit and push code to GitHub
git add .
git commit -m "Update README with complete component library and docker setup"
git branch -M main
git remote add origin https://github.com/nsingh600/singh_navjot_assignment_13.git
git push -u origin main