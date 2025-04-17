const uploadToS3 = async (file: File, token: string): Promise<string> => {
    const presignedUrl = await fetch('/api/s3/get-upload-url', {
        method: 'POST',
        body: JSON.stringify({ fileName: file.name, type: file.type }),
        headers: {
            "Authorization": "Bearer " + token
        }
    }).then(res => res.text());

    console.log({ presignedUrl });

    const res = await fetch(presignedUrl, {
        method: 'PUT',
        headers: {
            'Content-Type': file.type,
        },
        body: file,
    });

    if (!res.ok) {
        console.error('Error uploading file:', res.statusText);
        throw new Error('Upload failed');
    }

    console.log('File uploaded successfully');
    return presignedUrl.split('?')[0];
}

export default uploadToS3;