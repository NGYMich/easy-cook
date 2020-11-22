# Alpine Linux with OpenJDK JRE
FROM openjdk:8-jre-alpine

# Copy war file
COPY recettes-0.0.1-SNAPSHOT.jar /recettes.war

# run the app
CMD ["/usr/bin/java", "-jar", "-Dspring.profiles.active=default", "/recettes.war"]
