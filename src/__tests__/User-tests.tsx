import { render, screen } from '@testing-library/react'
import { Users } from '../components/users/Users'
// import {server} from "../mocks/server";
// import {rest} from 'msw';

describe('Users', () => {
  test('renders correctly', () => {
    render(<Users />);
    const textElement = screen.getByText('Users');
    expect(textElement).toBeInTheDocument();
  });
  test('renders a list of users', async () => {
    render(<Users />); // handlers API ni handle qilib javob qaytardik va u chizdi
    const users = await screen.findAllByRole('listitem'); // li larni ovolib
    expect(users).toHaveLength(3); // length ini tekshirdik!
  });
  // test('renders an error', async () => {
  //     server.use(
  //         rest.get('https://jsonplaceholder.typicode.com/users',
  //             (req, res, ctx) => {
  //                 return res(ctx.status(500));
  //             }
  //         )
  //     );
  //     render(<Users/>);
  //     const error = await screen.findByText('Error fetching users');
  //     expect(error).toBeInTheDocument();
  // });
});
