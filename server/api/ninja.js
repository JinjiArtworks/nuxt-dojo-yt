// default function on nuxt. fire whenever it clicked
export default defineEventHandler(async (event) => {
    // handle query params
    // const { name } = getQuery(event) // { name } , must be equal with queryname that has been sending thru parameters

    // Handle post data 
    // const { age } = await readBody(event)

    // api call with private key.. $fetch is using in Server Side. useFetch on Client Side.
    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_27kEV26lFce9cgOb3TsErSAaHS0H3S0aJPvqQ0rN');
    return data
})