import './Card.css'
function Card(props) {
    const classes = 'card ' + props.className
    return <div className={classes}>{props.children}</div> //props.children contains the content between the opening and closing tags of custom wrapper component
}
export default Card