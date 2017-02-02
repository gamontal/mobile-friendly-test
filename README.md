# mobile-friendly-test

> Check if a specific URL is mobile friendly

## Install

```
$ npm install --save mobile-friendly-test
```

## Usage Examples

```javascript
const mobileFriendlyTest = require('mobile-friendly-test')('api-key');

mobileFriendlyTest.run('https://research.google.com/', function (err, results) {
  if  (err) {
    return console.log(err);
  }

  console.log(results);

  /* Example response
    {
      testStatus: { 
        status: 'COMPLETE' 
      },
      mobileFriendliness: 'NOT_MOBILE_FRIENDLY',
      mobileFriendlyIssues: [ 
        { 
          rule: 'SIZE_CONTENT_TO_VIEWPORT' 
        } 
      ] 
    }
  /*
})
```

## License

[MIT](https://github.com/gmontalvoriv/mobile-friendly-test/blob/master/LICENSE) © Gabriel Montalvo