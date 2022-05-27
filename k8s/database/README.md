# K8S Work in progress - mySQL

K8S work in progress
src: <https://dev.to/musolemasu/deploy-a-mysql-database-server-in-kubernetes-static-dpc>

## 1. Create mysql Persistent Volume

Commands to create Persistent Volume

```bash
kubectl apply -f mysql-pv.yaml
```

## 2. Create mysql Persistent Volume Claim

Commands to create Persistent Volume Claim

```bash
kubectl apply -f mysql-pvc.yaml
```

## Deployment

Deploy to the kubernetes cluster with the following command

```bash
kubectl apply -f mysql-deployment.yaml
```

## Check deployment status

Command to check if deployment was succesful

```bash
kubectl get deployment
```

## Access database

Command to access the mysql container

```bash
kubectl run -it --rm --image=mysql:8.0 --restart=Never mysql-client -- mysql -h mysql --password="<password>"
kubectl run -it --rm --image=mysql:8.0 --restart=Never mysql-client -- mysql -h mysql -p <password>

```
