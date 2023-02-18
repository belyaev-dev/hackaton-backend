# Leasease Hackathon Backend <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" height="28px" alt="Nest Logo"/></a>

Backend для приложения Leasease для использования на хакатоне Строительство 2023 г.
Привет Аквариум!

## Руководство

### Установка

1. Убедитесь, что у вас установлена  [Node.js](https://nodejs.org)(>= LTS).
2. Запустите `yarn` чтобы установить зависимости.

### Configuration Files

#### Настройки [Prisma](https://github.com/prisma/prisma)

В приложении используется окружение `local`
для использования во время разработки и окружение `production` для использования на проде.  Для корректной работы необходимо заменить заглушки на реальные доступы в директории [`env`](env).

```dosini
DATABASE_HOST=__YOUR_DATABASE_URL__
DATABASE_PORT=5432
DATABASE_USERNAME=__YOUR_USERNAME__
DATABASE_PASSWORD=__YOUR_PASSWORD__
DATABASE_NAME=__YOUR_DATABASE__
```

### Миграции

Пожалуйста обратитесь к [Prisma Migrate Guide](https://www.prisma.io/docs/guides/database/developing-with-prisma-migrate) для получения информации про миграции в Prisma

```bash
# сгенерировать миграции для локального окружения
$ yarn migrate:dev:create
# запустить миграции в локальном окружении
$ yarn migrate:dev

# задеплоить миграции на прод
$ yarn migrate:deploy:prod
```

### Запуск приложения 

```bash
# development mode
$ yarn start:dev

# production
$ yarn build
$ yarn start:prod
```

### Работа с тестами

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```