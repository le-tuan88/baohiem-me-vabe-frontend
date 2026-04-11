'use client';

import { useEffect, useRef } from 'react';

export default function WpContent({ html }: { html: string }) {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!containerRef.current) return;

        // Lấy tất cả các thẻ script được inject
        const scripts = Array.from(containerRef.current.querySelectorAll('script'));
        
        scripts.forEach((oldScript) => {
            // Không thực thi lại JSON-LD
            if (oldScript.type === 'application/ld+json') return;

            const newScript = document.createElement('script');
            
            // Copy các attribute (src, type, id, v.v...)
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });

            if (oldScript.innerHTML) {
                // Fix lỗi DOMContentLoaded ở SPA
                // Trong Next.js, DOMContentLoaded đã chạy từ trước, các script lắng nghe event này sẽ không bao giờ chạy
                let inlineScript = oldScript.innerHTML;
                inlineScript = inlineScript.replace(
                    /document\.addEventListener\s*\(\s*['"]DOMContentLoaded['"]\s*,\s*function\s*\([^\)]*\)\s*\{/g,
                    'setTimeout(function(){'
                );
                newScript.innerHTML = inlineScript;
            }

            // Thay thế script cũ bằng script mới để trình duyệt thực thi
            oldScript.parentNode?.replaceChild(newScript, oldScript);
        });
    }, [html]);

    return (
        <div
            ref={containerRef}
            className="prose prose-pink max-w-none text-gray-700 wp-content entry-content"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    );
}
