Demo of the react-mapbox-gl and CRA incompatibility in production builds bug.

UPDATE: fixed.

https://github.com/mishoo/UglifyJS2/issues/2011#issuecomment-304428759
https://github.com/facebookincubator/create-react-app/pull/2379



STR:

```
yarn start
```
 --> shows a website with a map

```
yarn build
yarn global add serve
serve -s build 
```

--> shows a website without a map and an ugly traceback in the console.
