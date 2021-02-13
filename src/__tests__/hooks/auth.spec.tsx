import { renderHook, act } from '@testing-library/react-hooks';

import { useAuth, AuthProvider } from '../../hooks/auth';

describe('Auth hook', () => {
  it('should restore saved data from storage when auth inits', () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@Wiser-Teste_Yuri:user':
          return JSON.stringify({
            id: 'user-123',
            name: 'John Doe',
            email: 'johndoe@example.com.br',
          });
        default:
          return null;
      }
    });

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    expect(result.current.user.email).toEqual('johndoe@example.com.br');
  });

  it('should be able to sign out', async () => {
    jest.spyOn(Storage.prototype, 'getItem').mockImplementation(key => {
      switch (key) {
        case '@Wiser-Teste_Yuri:user':
          return JSON.stringify({
            id: 'user-123',
            name: 'John Doe',
            email: 'johndoe@example.com.br',
          });
        default:
          return null;
      }
    });

    const removeItemSpy = jest.spyOn(Storage.prototype, 'removeItem');

    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    act(() => {
      result.current.signOut();
    });

    expect(removeItemSpy).toHaveBeenCalledTimes(1);
    expect(result.current.user).toBeUndefined();
  });
});
