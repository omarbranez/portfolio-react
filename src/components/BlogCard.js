import moment from 'moment'
import {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import {Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Link} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      maxHeight: 400,
      transition: "transform 0.15s ease-in-out",
    //   "&:hover": {
        boxShadow:
          "0px 5px 5px -3px rgb(0 0 0 / 20%), 0px 8px 10px 1px rgb(0 0 0 / 14%), 0px 3px 14px 2px rgb(0 0 0 / 12%)",
        transform: "scale3d(1.25, 1.25, 1)"
    //   },
    },
    side: {
        width: "20vw",
        // max
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
  }))
  
const BlogCard = (props) => {
    const classes = useStyles()
    // console.log(props.index)
    console.log(props.centered, props.title)
    const [raised, setRaised] = useState({shadow: 1})

    const ToText = (node) => {
        let tag = document.createElement("div")
        tag.innerHTML = node
        node = tag.firstChild.childNodes[3].innerText
        return node
    }

const handleMouseOver = () => {
    setRaised({ shadow: 3 })
}

const handleMouseOut = () => {
    setRaised({ shadow: 1})
}
    return (
        <Card className={props.centered ? classes.root : classes.side} classes={{root: raised ? classes.cardHovered: ''}} onMouseOver={props.centered !== false ? handleMouseOver : null} 
            onMouseOut={props.centered ? handleMouseOut : null}>
            <CardHeader title={props.title}/>
            <CardMedia className={classes.media} image={`${props.thumbnail}`}/>
            <CardContent >
                {props.description && 
                <Typography className="card-text">{`${ToText(props.description.substring(0, 1000))}`}</Typography>}
                <Link href={props.link} underline="hover" >
                <Typography>Continue Reading on Medium</Typography>
                </Link>
                <Typography >Published: {moment(props.pubDate).format("MMM DD, YYYY hh:mm")} </Typography>
                {props.categories && 
                <Typography className="card-tags">Tags: {props.categories.map(tag=> `${tag}, `)}</Typography>}
            </CardContent>
        </Card>
    )
}

export default BlogCard
