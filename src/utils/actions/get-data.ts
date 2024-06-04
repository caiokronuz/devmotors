export async function getDataHome(){
    try{
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/objects/66578369b6cce150ff098510?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`)

        if(!res.ok){
            throw new Error("failed to fetch data")
        }

        return res.json();

    }catch(err){
        throw new Error("failed to fetch data")
    }
}