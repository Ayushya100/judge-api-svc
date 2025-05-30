# ⚖️ Judge-API-Gateway

## 🧩 Introduction
**Judge-API-SVC** acts as the unified entry point for evaluating code submissions and orchestrating problem execution flows in the platform. It serves as an intelligent gateway that routes, transforms, and manages user submissions for real-world API problems (executed via containerized environments or mocks).

The service abstracts the underlying execution engines and problem types, exposing a clean and consistent RESTful API interface. It ensures request validation, payload formatting, result handling, and secure interaction with internal container orchestrators.

When a user submits an Express.js API, Judge-API-Gateway ensures the solution is processed correctly and securely.

## 📌 Project Status

> **✅ Development Status: Ongoing**
The Judge-API-Gateway is feature-inbuild and integrates with other microservices like problems-svc and submission-svc.
### ✅ Milestones
- Dynamic routing to internal API challenge engine.
- Secure token validation and user scope enforcement.
- OpenAPI-based request validation and documentation.
- Error handling and execution status tracking.

## 🚀 Features
### 🔁 Unified Problem Execution Flow
- Handles API problem submissions using internal orchestrator.
- Intelligent dispatching based on problem metadata.
### 🔐 Secure Gateway with Validation
- JWT-based token validation to verify and authorize users.
- Role-based access using scopes like submit:code, submit:api, etc.
- OpenAPI request validation for strict schema enforcement.
### ⚙️ Extensible Execution System
- Pluggable architecture to add new engines like:
  - Container-based API simulation.
  - Database query runners.
  - LLM-assisted solutions (in future).
### 📥 Submission Lifecycle Management
- Accepts submission payloads with code, language, problemId, etc.
- Normalizes and forwards them to worker services.
- Polls or waits for the result before returning response.
- Includes status tracking and error reporting.

## 🛠️ Setup Instructions

### 🚀 Local Setup

```bash
# Clone the repository
git clone https://github.com/Ayushya100/judge-api-svc.git
cd judge-api-svc

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Then configure your .env file

# Run the server
npm run start
```

## 📦 Tech Stack
- **Language:** Node.js
- **Framework:** Express.js
- **Database:** PostgreSQL
- **Auth:** JWT
- **Validation:** OpenAPI Spec
- **Query Builder:** Knex.js
- **Environment Management:** dotenv
---
**Judge-api-svc** - Powering Code and API Challenges for Developers!