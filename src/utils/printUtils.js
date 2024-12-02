
/**
 * Downloads a file from an API endpoint with authentication
 * @param {string} url - The API endpoint URL
 * @param {string} filename - The filename to save as, including extension
 */
export const downloadFileWithAuth = (url, filename) => {
    const token = localStorage.getItem('accessToken');
    
    // Create a hidden iframe
    const iframe = document.createElement('iframe');
    iframe.style.display = 'none';
    document.body.appendChild(iframe);
    
    // Make authenticated request through iframe
    iframe.onload = function() {
        fetch(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
        .then(response => response.blob())
        .then(blob => {
            const objectUrl = URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = objectUrl;
            link.download = filename;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            URL.revokeObjectURL(objectUrl);
            document.body.removeChild(iframe);
        });
    };
    
    iframe.src = 'about:blank';
};