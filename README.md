# saas-hub


## Deploy to Kubernetes

Use the following command to deploy all the four microservices to kubernetes:

```bash
kubectl apply -Rf k8s/
```

**NOTE:** For the first few seconds, the graphql-engine pods might indicate `error` and will not start, this is because the respective postgres pods haven't started yet. Once the postgres pods are up, the graphql-engine pods will also become ready and start running.