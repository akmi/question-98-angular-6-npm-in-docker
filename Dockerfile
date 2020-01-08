FROM node:12.2.0

RUN mkdir -p /app
WORKDIR /app

COPY . /app

# Pre-Build (download all node modules, http-server, etc)
RUN wget https://codejudge-starter-repo-artifacts.s3.ap-south-1.amazonaws.com/web-micro-project/typescript/angular/6/npm/pre-build.sh
RUN chmod 775 ./pre-build.sh
RUN ./pre-build.sh

# Add extra docker commands here (if any)...

# Build the app (ng build --prod)
RUN wget https://codejudge-starter-repo-artifacts.s3.ap-south-1.amazonaws.com/web-micro-project/typescript/angular/build.sh
RUN chmod 775 ./build.sh
RUN ./build.sh

# Chrome driver installations
RUN wget https://codejudge-starter-repo-artifacts.s3.ap-south-1.amazonaws.com/web-micro-project/javascript/common/code-deploy.sh
RUN chmod 775 ./code-deploy.sh
RUN ./code-deploy.sh

# Add extra docker commands here (if any)...

WORKDIR /app/dist

# Run the app
RUN wget https://codejudge-starter-repo-artifacts.s3.ap-south-1.amazonaws.com/web-micro-project/javascript/common/run-cd.sh
RUN chmod 775 ./run-cd.sh
CMD ./run-cd.sh