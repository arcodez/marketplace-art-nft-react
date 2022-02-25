const url = 'https://ip.nf/me.json'

// create a function to get the country from the url using fetch api

const getCountry = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data.ip.country)
}

console.log(getCountry())