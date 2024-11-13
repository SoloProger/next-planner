# NEXT PLANNER

**Planner** - платформа для управление личными финансами.

## Стек

- Admin
    - JavaScript
    - Strapi
    - SQLite
- Backend **(in dev)**
    - TypeScript
    - Nest.js
    - TypeORM
    - PostgresSQL
    - Docker
- Frontend
    - TypeScript
    - Angular 18
    - RxJS

## Требования

- Node: 18.0.0+
- npm: 8.0.0+
- PostgresSQL: 15+
- TypeScript: 4.5+
- Docker

## Установка зависимостей

Выполняем команды:

```bash
# Клонируем проект (SSH)
$ git clone git@github.com:SoloProger/next-planner.git

# (Альтернатива) Клонируем проект (http)
$ git clone https://github.com/SoloProger/next-planner.git

# Устанавливаем зависимости frontend
$ cd client && npm install

# Устанавливаем зависимости admin
$ cd admin && npm install
```

## Запуск

### Локальная разработка

```bash
# Запуск frontend
$ cd client && npm run start

# Запуск админ панели
$ cd admin && npm run develop
```
