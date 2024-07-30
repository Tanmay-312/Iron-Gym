export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': '71d7113bd3msh276ef4035bf87a4p1dff38jsnfde5455203b6',
    },
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
        'X-RapidAPI-Key': '71d7113bd3msh276ef4035bf87a4p1dff38jsnfde5455203b6',
    },
};

export const fetchData = async (url, options) => {
    const params = new URLSearchParams({ limit:30, offset:0 });
    const finalUrl = `${url}?${params.toString()}`;
    const res = await fetch(finalUrl, options);
    const data = await res.json();
    
    return data;
};