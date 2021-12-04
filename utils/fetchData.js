//criar o arquivo, reescrever utilizando axios
// vai contar a nota do primeiro bimestre

const baseUrl = process.env.BASE_URL

export const posData = async (url, post, token) => {
    const res = await fetch(`${baseUrl}/api/${url}`, { 
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        },
        body: JSON.stringify(post)
    })

    const data = await res.json()
    return data
}

export const postData = async (url, post, token) => {
    const res = await fetch (``)
}