import {useEffect, useState} from 'react'
import BlogCard from '../components/BlogCard';
const Blog = () => {
    const [values, setValues] = useState({
        profile: {
        name:'',
        avatar:'',
        url:'',
        },
        posts: [],
        isLoading: true,
        error: null
    })
    const [displayed, setDisplayed] = useState([0,1,2])
    const [centered, setCentered] = useState(0)
    const [show, setShow] = useState(null)
    // console.log(values.posts)
    const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@omar-branez";
    useEffect(()=>{
        fetch(mediumURL)
        // .then(res => console.log(res.json()))
        .then(res => res.json())
        .then((data) => {
        const avatar = data.feed.image
        const url = data.feed.link
        const res = data.items
        const posts = res.filter(item => item.categories.length > 0)
        const title = data.feed.title
        setValues({profile: { title: title, url: url, avatar:avatar}, posts: posts, isLoading: false})
        })
        .catch((e)=> {
            console.log(e)
        })

    },[])
    const handleScrollLeftClick = () => {
        setDisplayed(displayed.map(idx => idx - 1))
        setCentered(displayed[1])
    }
    const handleScrollRightClick = () => {
        setDisplayed(displayed.map(idx => idx + 1))
        setCentered(displayed[1])
    }
// console.log(displayed[0])
    console.log(values.posts[displayed[0]])
    return (
        <div className="full-height" style={{ position: "absolute", backgroundImage: 'url(/background-corgi-reading.jpg)', backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed", width: "100vw", height: "98vh", backgroundPosition: " 20% 20%", }}>
            <div className="container" >
                <div className="row">
                    {values.posts ? values.posts.map((post, index,) => displayed.includes(index) && <BlogCard key={index} {...post} centered={centered === index} />) : <h2>Loading</h2>}
                </div>
            </div>
            <button onClick={handleScrollLeftClick}>Scroll Left</button>
            <button onClick={handleScrollRightClick}>Scroll Right</button>
        </div>
    )
}

export default Blog
