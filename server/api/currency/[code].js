//This is dynamic server routes. we can use it for example edit data, generate new pages with specific parameters slug
export default defineEventHandler(async (event) => {
    const { code } = event.context.params //containts parameter
    // runtimeConfig: {
    //     currencyKey: process.env.CURRENCY_API_KEY,
    //   }
    const { currencyKey } = useRuntimeConfig()
    const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`

    const { data } = await $fetch(uri)
    return data
}) 