import useStore from '@morioh/r-store';

export default function useDarkMode(defaultValue?: boolean) {
  const [isDarkMode, setDarkMode] = useStore<boolean>(
    'dark',
    defaultValue ?? false
  );

  return {
    isDarkMode,
    toggle: () => setDarkMode(!isDarkMode),
    enable: () => setDarkMode(true),
    disable: () => setDarkMode(false),
  };
}
