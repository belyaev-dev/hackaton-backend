# Leasease Hackathon Backend <a href="https://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" height="28px" alt="Nest Logo"/></a>

Backend приложения Leasease для использования на хакатоне Строительство 2023 г.

Кейс: Смарт-управление

Привет Аквариум!

## Вклад ✨

Проект стал возможен благодаря этим замечательным людям

<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://github.com/belyaev-dev"><img src="https://avatars.githubusercontent.com/u/74226935?v=4?s=100" width="100px" alt=""/><br /><sub><b>Денис Беляев</b></sub></a><br /><a href="https://github.com/belyaev-dev/hackaton-backend/commits?author=belyaev-dev" title="Код">💻</a> <a href="https://github.com/belyaev-dev/hackaton-backend/commits?author=belyaev-dev" title="Documentation">📖</a></td>
    <td align="center"><a href="https://digital-brand.ru"><img src="https://i.ibb.co/PMBX1ph/photo-2022-11-18-15-29-05.jpg" width="100px" alt=""/><br /><sub><b>Артем Федосов</b></sub></a><br /><a href="https://www.figma.com/file/4jQS2EN24RVskaoFO6TKtC/Untitled" title="Дизайн">🎨</a> <a title="Идеи">🤔</a></td>
    <td align="center"><a href="https://github.com/EndorphinE19"><img src="https://i.ibb.co/9gvRpgn/IMG-20230219-102050-817-1.png" width="100px" height="100px" alt=""/><br /><sub><b>Евгений Кривонос</b></sub></a><br /><a href="https://github.com/belyaev-dev/hackathon/commits?author=EndorphinE19" title="Код">💻</a></td>
    <td align="center"><a href="https://github.com/xeloo"><img src="https://avatars.githubusercontent.com/u/2788802?s=100&v=4" width="100px" alt=""/><br /><sub><b>Александр Силич</b></sub></a><br /><a href="https://github.com/belyaev-dev/hackathon/commits?author=xeloo" title="Код">💻</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

## Руководство

### Установка

1. Убедитесь, что у вас установлена  [Node.js](https://nodejs.org)(>= 18.14.1).
2. Запустите `yarn` чтобы установить зависимости.

### Файлы настройки

#### Настройки [Prisma](https://github.com/prisma/prisma)

В приложении используется окружение `local`
для использования во время разработки и окружение `production` для использования на проде.  Для корректной работы необходимо заменить заглушки на реальные доступы в директории [`env`](env).

```dosini
DATABASE_URL="postgres://postgres:PWD_HERE@db.URL_HERE:6543/postgres?pgbouncer=true&connection_limit=1"
SHADOW_DATABASE_URL="postgres://postgres:PWD_HERE@db.URL_HERE:5432/postgres?pgbouncer=true&connection_limit=1"
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