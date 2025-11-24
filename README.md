# Static Site CI/CD Pipeline with Terraform (GitHub Actions + Jest)

A fully functional, portfolio-ready **CI/CD pipeline** for a static website, integrating **Terraform** for AWS infrastructure provisioning, **GitHub Actions** for CI/CD, and **Jest** for unit testing.

---

## 🚀 Features

✔ Provision AWS infrastructure using **Terraform** (S3, CloudFront, Route 53, HTTPS)
✔ Simple **JavaScript unit tests** with Jest
✔ GitHub Actions CI pipeline that:
- Installs dependencies
- Runs unit tests
- Builds the website (if needed)
- Deploys to AWS S3 only on success
✔ Branch-based environment control:
- `main` → Production deployment
- `dev` → Development deployment
✔ Secure secrets management with GitHub Actions

---

## 📁 Project Structure

```
Omni-shambles/
├── public/
│   ├── index.html
│   ├── styles.css
│   ├── utils.js
├── tests/
│   └── utils.test.js
├── infra/                 # Terraform files
│   ├── main.tf
│   ├── variables.tf
│   ├── outputs.tf
│   ├── providers.tf
│   └── terraform.tfvars
├── jest.config.cjs
├── package.json
├── deploy.yml (GitHub Actions workflow)
└── README.md
```

---

## 🧪 Unit Testing (Jest)

A simple test suite confirming JavaScript functions behave as expected.

Example: `increment()` increases numbers and throws on invalid input.

```
 PASS  tests/utils.test.js
  ✓ increment increases number by 1
  ✓ increment throws for non-number
```

Run tests locally:
```
npm test
```

---

## 🌐 AWS Infrastructure with Terraform

Terraform provisions all necessary AWS resources for the static website:

- **S3 bucket** for hosting `devops.mahad.click`
- **CloudFront distribution** for CDN
- **Route 53 DNS record** pointing to the CloudFront distribution
- **HTTPS certificate** via ACM
- **IAM policies** for deployment automation

### Usage

```bash
cd infra
terraform init    # Initialize Terraform
terraform plan    # Preview infrastructure changes
terraform apply   # Apply changes
```

**Output:** Website is available at `https://devops.mahad.click`.

> Note: Terraform is run locally to avoid unnecessary provisioning in CI/CD.

---

## 🔄 GitHub Actions CI/CD Workflow

The `deploy.yml` pipeline performs:

1. Checkout code
2. Install Node + dependencies
3. Run Jest tests
4. Deploy to AWS S3 only if tests pass
5. Invalidate CloudFront cache

Example snippet:
```
- name: Deploy to S3
  run: aws s3 sync public/ s3://$AWS_BUCKET --delete
```

Secrets required:
- `AWS_ACCESS_KEY_ID`
- `AWS_SECRET_ACCESS_KEY`
- `AWS_BUCKET`
- `AWS_REGION`
- `CF_DISTRIBUTION_ID`

---

## 🛠 Commands

Install dependencies:
```
npm install
```

Run unit tests:
```
npm test
```

Run Terraform:
```
cd infra
terraform init
terraform plan
terraform apply
```

---

## 🎯 Purpose of This Project

- Showcase **end-to-end DevOps skills**
- Demonstrate **CI/CD pipelines with quality gates**
- Highlight **Infrastructure as Code** with Terraform
- Show **unit testing integration** in deployment workflow

---

## 📌 Future Enhancements

- Upload test reports as GitHub artifacts
- Add performance audits with Lighthouse CI
- Notifications (Slack/Discord) on deployment
- Automatic versioning + tagging
- Make it a full stack application

---

## 🙌 Credits

Built as a hands-on DevOps project to demonstrate CI/CD, unit testing, and Terraform-based infrastructure provisioning. Suitable for professional portfolio showcase.
