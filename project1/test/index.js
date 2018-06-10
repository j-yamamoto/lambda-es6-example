import { assert } from 'chai';
import LambdaTester from 'lambda-tester';

import { handler } from 'project1/index';

describe('index', () => {
  describe('handler', () => {
    it('should run successfully', () => {
      const event = { message: 'Hello, world!' };

      return LambdaTester(handler)
        .event(event)
        .expectResult((result) => {
          assert.deepEqual(result, event);
        });
    });
  });
});
