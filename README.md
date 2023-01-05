![apollo deprecated highlight client](https://github.com/alexxiyang/apollo-deprecated-highlight-client/raw/main/adhc_logo.png)

[![circleci](https://circleci.com/gh/alexxiyang/apollo-deprecated-highlight-client.svg?style=shield)](https://github.com/alexxiyang/apollo-deprecated-highlight-client)
[![codecov](https://codecov.io/gh/alexxiyang/apollo-deprecated-highlight-client/branch/main/graph/badge.svg?token=VRS7IWPVME)](https://codecov.io/gh/alexxiyang/apollo-deprecated-highlight-client)
[![Known Vulnerabilities](https://snyk.io/test/github/alexxiyang/apollo-deprecated-highlight-client/badge.svg)](https://snyk.io/test/github/alexxiyang/apollo-deprecated-highlight-client)

This is the client of [apollo-deprecated-highlight](https://www.npmjs.com/package/apollo-deprecated-highlight) and [apollo3-deprecated-highlight](https://www.npmjs.com/package/apollo3-deprecated-highlight). The `apollo-deprecated-highlight` will generate the `extensions.deprecations` fields of the response. This client reads the `extensions` of the response and generate console warn to let the engineer can see the warning message in the console.

## How to use it
Make sure you've installed [apollo-deprecated-highlight](https://www.npmjs.com/package/apollo-deprecated-highlight) and the response has `extensions.deprecations` attribute.

Then add `ApolloDeprecatedHighlightClient` as a middleware of [ApolloLink](https://www.apollographql.com/docs/react/api/link/introduction/)

```
const link = new ApolloLink((operation, forward) => {
        ...
        return forward(operation).map(ApolloDeprecatedHighlightClient(operation));
    });
```

The console will print out the warning message if there are deprecations in the response:
```
🚨 <deprecated field> in <operation> is deprecated. Because <deprecated reason>
```

## Example

Here is the [example project](https://github.com/alexxiyang/apollo-deprecated-highlight-client-demo)

Here are the console outputs
![example](https://github.com/alexxiyang/apollo-deprecated-highlight-client/raw/main/client-example.png)
