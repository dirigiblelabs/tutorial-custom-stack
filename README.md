# Custom Stack - Sample

The custom stack sample contains all the available standard Eclipse Dirigible components.

It is good for exploration about the different features and their applicability in particular scenarios.


#### Docker

```
docker pull ghcr.io/dirigiblelabs/custom-stack:latest
docker run --name custom-stack --rm -p 8080:8080 ghcr.io/dirigiblelabs/custom-stack:latest
```

- For Apple's M1: provide `--platform=linux/arm64` for better performance		

#### Build

```
mvn clean install
```
	
#### Run

```
java --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.nio=ALL-UNNAMED -jar application/target/custom-stack-application-*.jar
```

#### Debug

```
java --add-opens java.base/java.lang=ALL-UNNAMED --add-opens java.base/java.lang.reflect=ALL-UNNAMED --add-opens=java.base/java.nio=ALL-UNNAMED -agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=8000 -jar application/target/custom-stack-application-*.jar
```
	
#### Web

```
http://localhost:8080
```

#### REST API

```
http://localhost:8080/swagger-ui/index.html
```
