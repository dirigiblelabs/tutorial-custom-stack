FROM amazoncorretto:21-alpine

VOLUME /tmp

RUN apk add nodejs npm
RUN npm i -g esbuild
RUN npm i -g typescript

COPY target/*.jar custom-stack.jar

EXPOSE 8080

ENTRYPOINT ["java", "--add-opens", "java.base/java.lang=ALL-UNNAMED", "--add-opens", "java.base/java.lang.reflect=ALL-UNNAMED", "--add-opens", "java.base/java.nio=ALL-UNNAMED", "-jar", "/custom-stack.jar"]
