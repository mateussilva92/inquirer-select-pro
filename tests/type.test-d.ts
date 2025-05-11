import { expectTypeOf, test } from 'vitest';
import { select } from '../dist';

test('api type test', () => {
  expectTypeOf<Promise<number[]>>(
    select({
      message: 'test',
      multiple: true,
      options: [{ value: 1 }],
    }),
  );
  expectTypeOf<Promise<number | null>>(
    select({
      message: 'test',
      multiple: false,
      options: [{ value: 1 }],
    }),
  );
});
