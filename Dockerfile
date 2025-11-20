# Build stage not needed; files are static.
FROM nginx:stable-alpine
LABEL maintainer="you <you@example.com>"

# Remove default conf and add simple conf (optional)
RUN rm -rf /usr/share/nginx/html/*
COPY public/ /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
