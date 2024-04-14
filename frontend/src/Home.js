import BlogList from "./BlogList";
import useFetch from "./usefetch";


const Home = () => {
   const { data:blogs, isPending, error } = useFetch('/api/blogs');

    return ( 
        <div className="home">
         { error && <div> { error } s</div>}
         { isPending && <div>Loading...</div> }
         { blogs && <BlogList blogs={blogs} title="All Blogs" /> }
        </div>
     );
}
 
export default Home;