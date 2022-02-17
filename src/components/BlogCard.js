import moment from 'moment'
import { makeStyles } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'
import {Card, CardHeader, CardMedia, CardContent, CardActions, Typography, Link} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      transform: "scale(2.5)"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }))
  
const BlogCard = (props) => {
    const classes = useStyles()

    const ToText = (node) => {
        let tag = document.createElement("div")
        tag.innerHTML = node
        node = tag.firstChild.childNodes[3].innerText
        return node
    }

    return (
        <Card raised={props.centered === props.index} className={`classes.`+`${props.centered === props.index ? "expand" : "root" }`}>
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
