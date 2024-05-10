FROM node:21

RUN apt-get update -qq

RUN yarn global add @vue/cli

# shebang が無視されてしまうが chmod を RUNで実行しようとすると怒られるのでとりあえず断念。
CMD ["sh", "./setup.sh"]