# MicroServices with JHipster and GCP
### By Younes BELGRID (@fimtow) younes.belgrid@grenoble-inp.org and Oussama TCHAH (@TchahOussama) oussama.tchah@grenoble-inp.org

## Deployment of Microservices with JHipster on GCP

After deploying the microservices on GCP. We can see the pods and services using kubectl or directly from the GCP console.

![kubectl get pods](screenshots/kubectlgetpods.png)

![kubectl get services](screenshots/kubectlgetservices.png)

![gcp pods](screenshots/gcppods.png)

![gcp services](screenshots/gcpservices.png)

![gcp services](screenshots/gcpconfig.png)

![gcp services](screenshots/gcpcluster.png)

## Enabling scalability on GCP for one microservice 

We can increment the number of replicas for a certain service.

![gcp services](screenshots/kubectlscale.png)

![gcp services](screenshots/gcppods2.png)

![gcp services](screenshots/kubectlpods2.png)
## Monitoring dashboard

The grafana dashboard that comes with the deployment doesn't really contain any info.

![gcp services](screenshots/graphana2.png)

![gcp services](screenshots/graphana1.png)

Instead we used a grafana dashboard we found on the internet. We deployed it in the cluster in a new namespace.

![gcp services](screenshots/grafana-dash.png)

We can also see monitoring info directly from the GCP console.

![gcp services](screenshots/gcp-dash1.png)

![gcp services](screenshots/gcp-dash2.png)

## Load injection with Gatling for demonstrating scalability

We first enabled autoscaling on the gateway.

![gcp services](screenshots/autoscale.png)

Then we ran gatling on the gateway. New replicas are created to handle the increasing number of requests (Up to 4 as we have set it in the autoscaling). Each peak on the CPU and memory usage corresponds to a run of gatling.

![gcp services](screenshots/dashboard.png)

The report of the last run is as follow (Last peak on the grafana dashboard).

![gcp services](screenshots/gatling.png)