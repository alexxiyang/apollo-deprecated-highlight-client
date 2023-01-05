import { ApolloDeprecatedHighlightClient } from '../src/index'

describe('ApolloDeprecatedHighlightClient', () => {
    beforeEach(() => {
        jest.resetAllMocks();
    })

    it('should print out console warn', () => {
        const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
        const operation = {
            operationName: 'bar'
        };
        const middleware = ApolloDeprecatedHighlightClient(operation);
        const response = {
            extensions: {
                deprecations: [
                    {
                        field: 'foo',
                        reason: 'foo is deprecated!'
                    }
                ]
            }
        };
        expect(middleware(response))
        expect(warn).toBeCalledWith('🚨 foo in bar is deprecated. Because foo is deprecated!');
    })

    it('should not print out console warn if there is no extensions', () => {
        const warn = jest.spyOn(console, "warn").mockImplementation(() => {});
        const operation = {
            operationName: 'bar'
        };
        const middleware = ApolloDeprecatedHighlightClient(operation);
        const response = {};
        expect(middleware(response))
        expect(warn).not.toHaveBeenCalled();
    })
})