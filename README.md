# <img src="https://i.ibb.co/S5CvBX2/oie-mju-UGNgl-Fz-Kl.png" alt="KNBS" title="KNBS" width=64> knbs-client

В проекте используется [Vue](https://vuejs.org/guide/introduction.html), [vite](https://vitejs.dev/guide/), [Vuetify@3](https://next.vuetifyjs.com/en/components/all/), [axios](https://npmjs.org/axios).

## Готовим компьютер к работе с проектом

Всё, что вам необходимо это установить node.js и npm. Сделать это можно по [инструкции](https://nodejs.org/en/download/). Желательно установить версию 16.

## Инструкция по запуску

```bash
$ npm install
$ npm start
```

Теперь можно открыть в браузере http://localhost:8000/ и писать код, всё будет динамически обновляться.

## Правила по работе с репозиторием

Каждый коммит должен содержать краткую характеристику произведенных действий. Примеры:
- Исправлена длина поля title в модели Amogus
``fix: Changes Amogus model title field length
``
- Добавлено поле age для модели Amogus
``feat: Adds age field for Amogus model
``
- Добавлена документация для Amogus
``doc: Adds Amogus methods documentation``
- Код отрефакторен согласено pep8
``ref: Leads to the pep8 standard``

Каждая задача должна быть решена в рамках отдельной ветки. Что это значит?

Изначально вы работаете в ветке dev, от неё вам необходимо создать ветку под свою задачу. 

```bash
# Проверьте, что вы точно находитесь на 
# dev ветке любым удобным образом, 
# например через status
$ git status
# Если вы находитесь не в dev, то перейдите на него
$ git checkout dev
# Проверьте, есть ли какие-то обновления во внешнем
# репозитории, которые у вас отсутсвуют
$ git pull
# Создайте новую ветку от dev
$ git checkout -b <knbs-issue-id>
# Например, так:
$ git checkout -b knbs-13s
```

### Никогда не пользовался git'ом, где можно поучиться?

Для этого сущетсвует [тренажер](https://learngitbranching.js.org/?locale=ru_RU), не обязательно проходить его до конца, достаточно пройти первую тему в "Основы" и первую тему в "Удаленные репозитории"
