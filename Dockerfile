FROM node
# 実行ユーザーを作成
RUN useradd --user-group --create-home --shell /bin/false app
# 最新版のnpmを導入
# RUN npm install --global npm

ENV HOME=/app

COPY package.json $HOME/
RUN chown -R app:app $HOME
RUN chown -R app:app $HOME/*
WORKDIR $HOME
RUN npm install
# USER app

CMD ["npm", "start"]