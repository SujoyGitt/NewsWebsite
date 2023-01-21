
let NewsItem = (props)=> {
  
   let {title,description,imgurl,newsurl,author,date,source} = props;
    return (
        <div className="card">
          <img src={!imgurl?"https://cdn.24.co.za/files/Cms/General/d/7617/11aa7ea266c3490eb4947d3a62d873c8.jpg":imgurl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}<span className="position-absolute top-0 end-0 translate-end badge rounded-pill bg-warning">{source}<span className="visually-hidden">unread message</span></span></h5>
            <p className="card-text">
              {description}
            </p>
            <a rel='noreferrer' href={newsurl} target="_blank" className="btn btn-sm btn-dark" >
              Read more
            </a>
            <p className="card-text"><small className="text-muted text-info">By {!author?"Unknown":author} on {new Date(date).toDateString()} ago</small></p>
          </div>
        </div>
    );
}
export default NewsItem;
