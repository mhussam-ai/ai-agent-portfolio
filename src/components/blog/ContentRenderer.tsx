
interface ContentRendererProps {
  content: string;
}

export function ContentRenderer({ content }: ContentRendererProps) {
  // Function to convert markdown headings to HTML with IDs
  const renderContent = (content: string) => {
    // Replace markdown headings with HTML headings with IDs
    const processedContent = content.replace(/## (.*)/g, (match, heading) => {
      const id = heading.toLowerCase().replace(/[^\w\s]/g, '').replace(/\s+/g, '-');
      return `<h2 id="${id}" class="text-2xl font-semibold mt-8 mb-4">${heading}</h2>`;
    });

    // Replace markdown code blocks with HTML code blocks
    const contentWithCodeBlocks = processedContent.replace(/```(.*?)\n([\s\S]*?)```/g, 
      '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto my-4"><code>$2</code></pre>'
    );

    // Return as HTML
    return { __html: contentWithCodeBlocks };
  };

  return <div dangerouslySetInnerHTML={renderContent(content)} />;
}
