import { renderHook, act } from '@testing-library/react';
import { describe, test, expect } from 'vitest';
import useMediaQuery from '@/hooks/useMediaQuery';

const resizeWindow = (width: number) => {
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
};

describe('useMediaQuery hook', () => {
  test('should return true for small breakpoints', () => {
    const { result } = renderHook(() => useMediaQuery('sm'));

    act(() => {
      resizeWindow(500);
    });

    expect(result.current).toBe(true);
  });

  test('should return true for medium breakpoints', () => {
    const { result } = renderHook(() => useMediaQuery('md'));

    act(() => {
      resizeWindow(800);
    });

    expect(result.current).toBe(true);
  });

  test('should return true for large breakpoints', () => {
    const { result } = renderHook(() => useMediaQuery('lg'));

    act(() => {
      resizeWindow(1300);
    });

    expect(result.current).toBe(true);
  });

  test('should update the breakpoint correctly on window resize', () => {
    const { result, rerender } = renderHook(({ bp }) => useMediaQuery(bp), {
      initialProps: { bp: 'sm' },
    });

    act(() => {
      resizeWindow(500);
    });
    expect(result.current).toBe(true);

    rerender({ bp: 'md' });
    act(() => {
      resizeWindow(800);
    });
    expect(result.current).toBe(true);

    rerender({ bp: 'lg' });
    act(() => {
      resizeWindow(1300);
    });
    expect(result.current).toBe(true);
  });
});
