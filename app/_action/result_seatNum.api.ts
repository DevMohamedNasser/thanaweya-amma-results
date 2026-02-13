'use server';

export async function result_seat(seatNum : string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}student_results?select=student_name,grade&seat_number=eq.${seatNum}`, {
        method: 'GET',
        headers: {
            apikey: `${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY}`,
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`
        }
    });

    if (!res.ok) {
        console.log(res);
        throw new Error('Faild in Fetch result by seat num');
    }

    const data = await res.json();
    return data;
}