Demo of the react-mapbox-gl and CRA incompatibility in production builds bug.


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
