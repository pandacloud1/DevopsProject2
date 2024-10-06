# DEFINE DEFAULT VARIABLES HERE

variable "instance_type" {
  description = "Instance Type"
  type        = string
}

variable "ami" {
  description = "AMI ID"
  type        = string
}

variable "key_name" {
  description = "Key Pair"
  type        = string
}

variable "volume_size" {
  description = "Volume size"
  type        = string
}

variable "region_name" {
  description = "AWS Region"
  type        = string
}

variable "server_name" {
  description = "EC2 Server Name"
  type        = string
}
