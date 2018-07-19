FROM nginx:1.12-alpine

COPY nginx-configuration.conf /etc/nginx/conf.d/default.conf

COPY styleguide /usr/share/nginx/html

LABEL \
  meta.attributes.id="wardrobe" \
  meta.attributes.type="site" \
  meta.attributes.team="Developers" \
  meta.description="The FashionTrade component library service." \
  meta.checks.health.endpoint="/" \
  meta.checks.health.port="80" \
  meta.ports.http.service="80" \
  meta.ports.http.container="80" \
  meta.routing.gateway.mapping.dns-prefix="wardrobe" \
  meta.routing.gateway.authentication.login-redirect="true"

# Nginx start command copied from original Dockerfile:
# https://github.com/nginxinc/docker-nginx/blob/7b33a90d7441909664a920b0687db8d984ac314b/mainline/alpine/Dockerfile#L135
CMD nginx -g "daemon off;"
