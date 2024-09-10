import React from 'react'
import { useEffect, useState } from 'react'
import appwriteService from "../appwrite/storageService/config"
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        appwriteService.getPost().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, [])
    if (posts.length === 0) {
        console.log(posts.length)
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold'>
                                Login to read Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>
    </div>
    )
}

export default Home