# NEXT PLANNER

**Next Planner** - платформа для управление личными финансами.

## Стек

- Admin
    - JavaScript
    - Strapi
    - SQLite
- Backend
    - TypeScript
    - Fastify
    - TypeORM
    - PostgresSQL
    - Docker
- Frontend
    - TypeScript
    - React.js
    - React Query
    - React Hook Form
    - Chakra UI
    - Axios

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
$ cd frontend && npm install

# Устанавливаем зависимости admin
$ cd admin && npm install

# Устанавливаем зависимости admin
$ cd admin && npm install
```

Далее создаем и заполняем файлик `.env` в `backend/`. Пример заполнение можно посмотреть в
файлике `backend/.env.exmaple`

## Запуск

### Локальная разработка

```bash
# Запуск миграций
$ npm run mig:run

# Запуск сервера
$ npm run start

# Запуск сервера с функцией hot reload
$ npm run start
```

### Виртуальное окружение

```bash
# Запускаем контейнеры
$ docker compose --env-file ./backend/.env up
```

#### Примечание

- Если команда не сработала, то заменить `docker compose` на `docker-compose`. Также может потребоваться разрешение
  суперпользователя, тогда нужно перед командой указать `sudo` (Linux/MacOS)

- В `.env` в поле `DB_HOST` нужно указать `db`

## Работа с миграциями

```bash

# Создание сущности в папке src/database/entities
$ ENT_NAME=<Название сущности> npm run entity

# Добавление пустой миграции (src/database/migrations)
$ MIG_NAME=<название миграции> npm run mig:add

# Генерация миграций на основе изменений моделей
$ MIG_NAME=<название миграции> npm run mig:gen

# Запуск миграций
$ npm run mig:run

# Откат миграций
$ npm run mig:back
```

## Развертывание прод окружения

```bash
# Запуск production-сборки
$ docker compose -f docker-compose.prod.yml --env-file ./backend/.env up -d
```
