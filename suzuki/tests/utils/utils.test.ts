import { generateId } from '../../src/utils/utils';

test('check generated id', () => {
    expect(generateId(16)).toMatch(/^[\w\d]{16}$/);
});
