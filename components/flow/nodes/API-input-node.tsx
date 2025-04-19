import React, { useState } from 'react';

const APIInputNode = () => {
    const [apiUrl, setApiUrl] = useState('');
    const [method, setMethod] = useState('GET');
    const [headers, setHeaders] = useState('');
    const [body, setBody] = useState('');

    const handleApiUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => setApiUrl(e.target.value);
    const handleMethodChange = (e: React.ChangeEvent<HTMLSelectElement>) => setMethod(e.target.value);
    const handleHeadersChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setHeaders(e.target.value);
    const handleBodyChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value);

    return (
        <div className="api-input-node">
            <h3>API Input Node</h3>
            <div className="form-group">
                <label htmlFor="api-url">API URL:</label>
                <input
                    type="text"
                    id="api-url"
                    value={apiUrl}
                    onChange={handleApiUrlChange}
                    placeholder="Enter API URL"
                />
            </div>
            <div className="form-group">
                <label htmlFor="method">Method:</label>
                <select id="method" value={method} onChange={handleMethodChange}>
                    <option value="GET">GET</option>
                    <option value="POST">POST</option>
                    <option value="PUT">PUT</option>
                    <option value="DELETE">DELETE</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="headers">Headers:</label>
                <textarea
                    id="headers"
                    value={headers}
                    onChange={handleHeadersChange}
                    placeholder="Enter headers as JSON"
                />
            </div>
            {method !== 'GET' && (
                <div className="form-group">
                    <label htmlFor="body">Body:</label>
                    <textarea
                        id="body"
                        value={body}
                        onChange={handleBodyChange}
                        placeholder="Enter request body as JSON"
                    />
                </div>
            )}
        </div>
    );
};

export default APIInputNode;