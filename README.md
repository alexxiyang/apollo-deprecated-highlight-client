# apollo-deprecated-highlight-client
This is the client of [apollo-deprecated-highlight](https://www.npmjs.com/package/apollo-deprecated-highlight) and [apollo3-deprecated-highlight](https://www.npmjs.com/package/apollo3-deprecated-highlight). The `apollo-deprecated-highlight` will generate the `extensions.deprecations` fields of the response. This client reads the `extensions` of the response and generate console warn to let the engineer can see the warning message in the console.

## How to use it

Add it as a middleware of `ApolloLink`

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

TODO
