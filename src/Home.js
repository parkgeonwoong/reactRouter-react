import { Link } from "react-router-dom";

const Home = () => {

    return ( 
        <div>
            <h1>Home</h1>
            <p>홈, 가장 먼저 보여주는 페이지 </p>
            <Link to="/about">About</Link>
        </div>
    )
}

export default Home;