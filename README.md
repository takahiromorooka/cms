# README

#SETUP
```
# Gem系
$ bundle install --path vendor/bundle

# DB系
$ bundle exec rake db:create
bundle exec ridgepole -c config/database.yml -E development --apply -f db/schemas/Schemafile

# サーバー起動
$ bundle exec rails s

# react
cd front
yarn install
yarn run build
yarn run watch

```
