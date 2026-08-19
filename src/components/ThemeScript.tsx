export function ThemeScript() {
  const script = `
    (function() {
      try {
        var stored = localStorage.getItem('asb-theme');
        var mode = stored === 'light' || stored === 'dark' ? stored
          : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
        if (mode === 'dark') document.documentElement.classList.add('dark');
        else document.documentElement.classList.remove('dark');
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
