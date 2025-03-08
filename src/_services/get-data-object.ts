export async function GetObjectListData(path: string | string[], page: string | string[]) {
    const res = await fetch(`${process.env.API_URL}/api/${path}/?page=${page}`, {
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            'Content-type': 'application/json',
        },
        next: { revalidate: 3600 }
    })
    if (!res.ok) {
        return {
            props: {
                data: [],
            },
        };
    }
    const data = await res.json()
    return data
}

export async function GetObjectData(path: string ,slug: string ) {
    const res = await fetch(`${process.env.API_URL}/api/${path}/${slug}`, {
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            'Content-type': 'application/json',
        },
        next: { revalidate: 3600 }
    })
    if (!res.ok) {
        return {
            props: {
                data: [],
            },
        };
    }
    const data = await res.json()
    return data
}

export async function GetSearchDataObject(path: string, search: string | string[], page: string | string[]) {
    const res = await fetch(`${process.env.API_URL}/api/${path}?page=${page}&search=${search}`, {
        headers: {
            Authorization: `Bearer ${process.env.API_KEY}`,
            'Content-type': 'application/json',
        },
        next: { revalidate: 3600 }
    })
    if (!res.ok) {
        return {
            props: {
                data: [],
            },
        };
    }
    const data = await res.json()
    return data
}