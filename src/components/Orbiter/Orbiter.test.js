import { render, screen } from '@testing-library/react';
import Orbiter from './Orbiter';

const mockDevices = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }];

test('amount of "planets" should match number of devices', () => {
  render(<Orbiter devices={mockDevices} />);

  const orbits = screen.getAllByLabelText('orbit-path');

  expect(orbits.length).toBe(5);
});
