import './App.css';
import {
  HashRouter,
  NavLink, Link,
  Routes, Route,
  useNavigate, useParams,
  Outlet
} from 'react-router-dom';

const PostId = () => {
  const { postId } = useParams();
  return <h2>Post ID : {postId}</h2>
}
const Post = () => {
  return <>
    <p>這是 Post 頁面</p>
    <Link to="post123">123</Link>
    <br />
    <Link to="post456">456</Link>
    <Outlet />
  </>
};
const Todo = () => {
  const navigate = useNavigate();
  return <>
    <p>這是 Todo 頁面</p>
    <button onClick={() => navigate('/login')}>Logout</button>
  </>
};
const Login = () => {
  return <p>這是登入頁面</p>;
};
const Register = () => {
  return <p>這是註冊頁面</p>;
};

function App() {
  return (
    <div className="container">
      <HashRouter>
        <div className="nav-link">
          <NavLink to="/">
            <p>回到首頁</p>
          </NavLink>
          <NavLink to="/register">
            <p>註冊頁面</p>
          </NavLink>
          <NavLink to="/login">
            <p>登入頁面</p>
          </NavLink>
          <NavLink to="/todo">
            <p>Todo 頁面</p>
          </NavLink>
          <NavLink to="/post">
            <p>Post 頁面</p>
          </NavLink>
        </div>
        {/* Routes, Route 練習區 */}
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/post" element={<Post />} >
            <Route path=":postId" element={<PostId />} />
          </Route>
        </Routes>
        {/* 練習區 */}
      </HashRouter>
    </div >
  );
}

export default App;
