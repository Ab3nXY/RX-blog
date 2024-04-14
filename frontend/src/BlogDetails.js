import { useParams } from "react-router-dom";
import useFetch from './usefetch';
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = useFetch('/api/blogs/' + id);
    const history = useNavigate();

    const handleClick= () => {
      fetch('/api/blogs/' + id, {
        method: 'DELETE',
      }).then(() => {
        history('/');
      })
    }

        return (
        <div className="blog-details">
          { isPending && <div>Loading...</div> }
          { error && <div> { error }</div> }
          { blog && (
            <article>
              <h2>{ blog.title }</h2>
              <p>Written by { blog.author }</p>
              <div>{ blog.body }</div>
              <button onClick={handleClick}>Delete</button>
            </article>
          )}
        </div>

    );
}
 
export default BlogDetails;