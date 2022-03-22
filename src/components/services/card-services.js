export const fetchAllCards = async () => {
    const response = await fetch("https://mmo-games.p.rapidapi.com/games", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "mmo-games.p.rapidapi.com",
            "x-rapidapi-key": "42334e56cbmshcdb5e278ff896cbp17bef3jsne02ee6240136"
        }
    })
    try {
        const data = await response.json()
        return data

    } catch (error) {
        console.log(error)
    }
}

export const fetchAllDet = async (url) => {
    const response = await fetch(`https://mmo-games.p.rapidapi.com/game?id=${url}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "mmo-games.p.rapidapi.com",
            "x-rapidapi-key": "fbcd6f59bfmsh4ee7e13d52426adp14084ejsn2f9c1c33a414"
        }
    })
    try {
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}

export const fetchAllNews = async () => {
    const response = await fetch("https://mmo-games.p.rapidapi.com/latestnews", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "mmo-games.p.rapidapi.com",
            "x-rapidapi-key": "fbcd6f59bfmsh4ee7e13d52426adp14084ejsn2f9c1c33a414"
        }
    })
    try {
        const data = await response.json()
        return data
    } catch (error) {
        console.log(error)
    }
}
