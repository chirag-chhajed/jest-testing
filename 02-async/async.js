const fetchData = async (id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const result = await data.json()
    return result
}

fetchData(1)

module.exports = fetchData