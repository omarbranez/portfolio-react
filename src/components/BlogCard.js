import { Link } from 'react-router-dom'
import moment from 'moment'
import c from "./BlogCard.module.css";
const BlogCard = (props) => {
    // console.log(props.link)
    const displayed = props.displayed
    const ToText = (node) => {
        let tag = document.createElement("div");
        tag.innerHTML = node;
        node = tag.innerText;
        return node;
    }
    return (
        <div className={`col-md-4 col-sm-6 col-xs-12 ${c.grid}`}>
        {displayed.includes(props.index) && <div className={c.cardsmall}>
            {/* <div className={c.cardsmall}> */}
                <div
                    className={c.cardpost__image}
                    style={{ backgroundImage: `url(${props.thumbnail})` }}
                >
                </div>

                <div className="card-body">
                    <h5 className="card-title">

                        <a
                            href={props.link}
                            className={c.textfiordblue}
                            target="_blank"
                        >
                            {props.title}
                        </a>
                    </h5>

                    <p className={c.cardText}>{`${ToText(
                        props.description.substring(0, 1000)
                    )}...`}</p>
                    <br />

                    {props.author}

                    <br />
                    <span className="text-muted">
                        {moment(props.pubDate).format("MMM DD, YYYY hh:mm")}
                    </span>
                </div>
            </div>}
            {/* </div> */}
        </div>
    )
}

export default BlogCard
