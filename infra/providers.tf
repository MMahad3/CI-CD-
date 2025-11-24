terraform {
  required_version = ">= 1.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = "us-east-1" # you can choose your working region
  profile = "Mahad"
}

# CloudFront always uses us-east-1 for certificate + distribution creation
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
  profile = "Mahad"
}
