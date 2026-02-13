'use server';

export async function result_name(seatName : string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}student_results?student_name=ilike.*${seatName}*`, {
        method: 'GET',
        headers: {
            apikey: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`
        }
    });

    if (!res.ok) {
        console.log(res);
        throw new Error('Faild in Fetch result by seat num');
    }

    const data = await res.json();
    return data;
}