import { useEffect } from 'react';

export function useStructuredData(id: string, data: Record<string, unknown>) {
  const serializedData = JSON.stringify(data);

  useEffect(() => {
    const scriptId = `structured-data-${id}`;
    let script = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }

    script.text = serializedData;

    return () => {
      document.getElementById(scriptId)?.remove();
    };
  }, [id, serializedData]);
}
