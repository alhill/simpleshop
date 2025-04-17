const deleteFromS3 = async (url: string, token: string) => {
    await fetch('/api/s3/get-delete-url', {
        method: 'POST',
        body: JSON.stringify({ url }),
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': "Bearer " + token
        },
    });
}

export default deleteFromS3