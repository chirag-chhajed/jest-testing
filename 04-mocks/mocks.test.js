const fetchData = async (id) => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
    const result = await data.json()
    return result
}
const forEach = (items,callback) => {
    for (let index = 0; index< items.length; index++) {
        callback(items[index])
        
    }
}

it('mock callback', () => {
    const mockCalledback = jest.fn(x => 42 + x)
    forEach([0,1],mockCalledback)
    expect(mockCalledback.mock.calls.length).toBe(2)
    expect(mockCalledback.mock.calls[0][0]).toBe(0)
    expect(mockCalledback.mock.calls[1][0]).toBe(1)
    expect(mockCalledback.mock.results[0].value).toBe(42)
    expect(mockCalledback.mock.results[1].value).toBe(43)
});

it('mock return', () => {
    const mock = jest.fn()

    mock.mockReturnValueOnce(true)

    const results = mock()

    expect(results).toBe(true)
});

it('mock axios', async () => {
    jest.spyOn(fetch,"fetch").mockReturnValueOnce({
        data:{
            id: 1,
            todo: 'Get 1m Subs'
        }
    })
    const result = await fetchData(1)

    expect(result.todo).toBe("Get 1M Subs")
});

