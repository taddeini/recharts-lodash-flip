# Run
`npm install`
`npm start`

Navigating to `http://localhost:8080/index.htm` should render a stacked `AreaChart` with the issue in question.

Removing `new LodashModuleReplacementPlugin()` from `webpack.config.js` and restarting resolves the issue.