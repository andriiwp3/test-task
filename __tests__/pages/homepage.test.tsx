import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import HomePage from '@/pages';
import { useSession, signOut } from 'next-auth/react';

jest.mock('next-auth/react');

jest.mock('next/link', () => {
	const LinkMock: React.FC<{ children: React.ReactNode }> = ({ children }) => <>{children}</>;
	LinkMock.displayName = 'Link';
	return LinkMock;
  });

  jest.mock('next/image', () => {
	// eslint-disable-next-line @next/next/no-img-element
	const ImageMock: React.FC<{ src: string; alt?: string }> = ({ src, alt }) => <img src={src} alt={alt} />;
	ImageMock.displayName = 'Image';
	return ImageMock;
  });

describe('HomePage', () => {
  it('renders a login button for unauthenticated users', () => {
    (useSession as jest.Mock).mockReturnValue({ status: 'unauthenticated' });
    render(<HomePage />);
    expect(screen.getByText('Login')).toBeInTheDocument();
  });

  it('renders a logout button for authenticated users', () => {
    (useSession as jest.Mock).mockReturnValue({ status: 'authenticated' });
    render(<HomePage />);
    expect(screen.getByText('Logout')).toBeInTheDocument();
  });

  it('calls signOut when logout is clicked', () => {
    (useSession as jest.Mock).mockReturnValue({ status: 'authenticated' });
    render(<HomePage />);
    fireEvent.click(screen.getByText('Logout'));
    expect(signOut).toHaveBeenCalledWith({ redirect: false });
  });
});
