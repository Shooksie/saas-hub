# saas-hub


## Deploy to Kubernetes

Use the following command to deploy all the four microservices to kubernetes:

```bash
kubectl apply -Rf k8s/
```

**NOTE:** For the first few seconds, the graphql-engine pods might indicate `error` and will not start, this is because the respective postgres pods haven't started yet. Once the postgres pods are up, the graphql-engine pods will also become ready and start running.

Open a new terminal window and run the following command to expose the ports outside the cluster:

```bash
minikube tunnel
```

Sample Output:

```bash
Status:
  machine: minikube
  pid: 29152
  route: 10.96.0.0/12 -> 192.168.49.2
  minikube: Running
  services: [apps-graphql-engine, auth, auth-graphql-engine, storage-graphql-engine, tokens-graphql-engine]
  errors:
    minikube: no errors
    router: no errors
    loadbalancer emulator: no errors
```

Return back to your original terminal and run the following command to get the external IP and ports on which the services are available:

```bash
kubectl get svc -ocustom-columns="NAME:.metadata.name,EXTERNAL IP:.status.loadBalancer.ingress[0].ip,PORT:.spec.ports[0].port" | grep -v "<none>"
```

Sample Output:

```bash
NAME                     EXTERNAL IP     PORT
apps-graphql-engine      10.98.189.91    8083
auth                     10.99.215.40    3999
auth-graphql-engine      10.105.64.242   8082
storage-graphql-engine   10.108.83.107   8084
tokens-graphql-engine    10.111.67.83    8085
```

Visit `http://<EXTERNAL IP>:<PORT>` in your favourite browser to view your application outside the cluster.

---