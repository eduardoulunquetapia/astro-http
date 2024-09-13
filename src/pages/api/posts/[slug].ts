import type { APIRoute } from "astro";
import { getEntry } from 'astro:content';

export const prerender=false;

//GET
export const GET: APIRoute=async({params,request})=>{

    const {slug}=params;

    const post=await getEntry('blog',slug as any);

    if(!post){

        return new Response(
            JSON.stringify({msg:`Not found post (${slug})`}),{
            status:404,
            headers: {
                    "Content-Type": "application/json",
                  },
            });

    }

    return new Response(
        JSON.stringify(post),{
        status:200,
        headers: {
                "Content-Type": "application/json",
                },
        });

};
//POST
export const POST:APIRoute=async({params,request})=>{

    const body=await request.json();

    return new Response(
        JSON.stringify({
            method:'POST',
            ...body}),{
        status:200,
        headers: {
                "Content-Type": "application/json",
              },
        });

}
//PUT
export const PUT:APIRoute=async({params,request})=>{

    const body=await request.json();

    return new Response(
        JSON.stringify({
            method:'PUT',
            ...body}),{
        status:200,
        headers: {
                "Content-Type": "application/json",
              },
        });

}
//PATCH
export const PATCH:APIRoute=async({params,request})=>{

    const body=await request.json();

    return new Response(
        JSON.stringify({
            method:'PATCH',
            ...body}),{
        status:200,
        headers: {
                "Content-Type": "application/json",
              },
        });

}
//DELETE
export const DELETE:APIRoute=async({params,request})=>{

    const {slug}=params;

    return new Response(
        JSON.stringify({
            method:'DELETE',
            slug:slug}),{
        status:200,
        headers: {
                "Content-Type": "application/json",
              },
        });

}
