# Deploy

- Run **dev** `docker compose --env-file ./backend/.env up -d`
- Stop **dev** `docker compose --env-file ./backend/.env down`
- Run **prod** `docker compose -f docker-compose.prod.yml --env-file ./backend/.env up -d`
- Run **prod** `docker compose -f docker-compose.prod.yml --env-file ./backend/.env down`
