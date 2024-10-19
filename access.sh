#!/bin/bash
# This script is used to get the argocd, prometheus & grafana urls & credentials

aws configure
aws eks update-kubeconfig --region "us-east-1" --name "amazon-prime-cluster"

# ArgoCD Access
argo_url=$(kubectl get svc -n argocd | grep argocd-server | awk '{print$4}' | head -n 1)
argo_initial_password=$(argocd admin initial-password -n argocd)

# ArgoCD Credentials
argo_user="admin"

argo_password=$(kubectl -n argocd get secret argocd-initial-admin-secret -o jsonpath="{.data.password}" | base64 --decode)

# Prometheus and Grafana URLs and credentials
prometheus_url=$(kubectl get svc -n prometheus | grep stable-kube-prometheus-sta-prometheus | awk '{print $4}')
grafana_url=$(kubectl get svc -n prometheus | grep stable-grafana | awk '{print $4}')
grafana_user="admin"
grafana_password=$(kubectl get secret stable-grafana -n prometheus -o jsonpath="{.data.admin-password}" | base64 --decode)

# Print or use these variables
echo "------------------------"
echo "ArgoCD URL: $argo_url"
echo "ArgoCD User: $argo_user"
echo "ArgoCD Initial Password: $argo_initial_password" | head -n 1
echo
echo "Prometheus URL: $prometheus_url":9090
echo
echo "Grafana URL: $grafana_url"
echo "Grafana User: $grafana_user"
echo "Grafana Password: $grafana_password"
echo "------------------------"

# Run below commands
# chmod a+x access.sh
# ./access.sh
