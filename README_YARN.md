# YARN Install md

## Clean yarn before download yarn again

```js
npm cache clean --force
```

## Set Yarn Virtual-Enviroment

### Check where you already installed `yarn`

```js
yarn global bin
```

### Copy the path where `yarn` installed and apply to Virtual-Enviroment `Path` Settings

## Re-install `yarn` again

### Re-install `yarn` again

```js
yarn -g add @vue/cli
```

### If error occured

```code
error eslint-plugin-vue@8.7.1: The engine "node" is incompatible with this module. Expected version "^12.22.0 || ^14.17.0 || >=16.0.0". Got "12.16.1"
error Found incompatible module.
```

- write this command below the contents

```
yarn install --ignore-engines
```
