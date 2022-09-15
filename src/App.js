// import React, { Component } from "react";
// import { Switch, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";

// import AddTask from "./components/add-task.component";
// import Task from "./components/task.component";
// import TasksList from "./components/tasks-list.component";



import './App.css';
import Sidebar from './components-sidebar/sidebar.component';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

// import { Reports, ReportsOne, ReportsTwo, ReportsThree } from './pages/Reports';

import Team from './pages/Team';
import TaskPage from './pages/taskPage.js';
import ProductPage from './pages/Products';
import PointsPage from './pages/Point';
import EmployeesPage from './pages/Employees';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Sidebar />
      <Switch>
        {/* Rutas para home*/}
        <Route path='/home' exact component={Home} />

        {/* <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/reports/reports3' exact component={ReportsThree} /> */}

        {/* Rutas para puntos */}
        <Route path='/points' exact component={PointsPage} />
        <Route path='/add/points' exact component={PointsPage} />
        <Route path='/points/:id' exact component={PointsPage} />


        {/* Rutas para tareas */}
        <Route path='/tasks' exact component={TaskPage} />
        <Route path='/add' exact component={TaskPage} />
        <Route path='/tasks/:id' exact component={TaskPage} />

        {/* Rutas para productos */}
        <Route path='/products' exact component={ProductPage} />
        <Route path='/add/products' exact component={ProductPage} />
        <Route path='/products/:id' exact component={ProductPage} />

        {/* Rutas para empleados */}
        <Route path='/employees' exact component={EmployeesPage} />
        <Route path='/add/employees' exact component={EmployeesPage} />
        <Route path='/employees/:id' exact component={EmployeesPage} />

        {/* Rutas para equipo*/}
        <Route path='/team' exact component={Team} />
        <Route path='/team/admins' exact component={Team} />
        <Route path='/team/collaborators' exact component={Team} />
        <Route path='/team/uteam' exact component={Team} />

      </Switch>
    </Router>
  );
}

export default App;





// class App extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand navbar-dark bg-purple">
//           <a href="/tasks" className="navbar-brand">
//             Kanban
//           </a>
//           <div className="navbar-nav mr-auto">
//             <li className="nav-item">
//               <Link to={"/tasks"} className="nav-link">
//                 Tasks
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link to={"/add"} className="nav-link">
//                 Add
//               </Link>
//             </li>
//           </div>
//           <div class="me text-white">
//           Built by
//             <a class="text-white" href="https://ckinateder.github.io/"> Calvin Kinateder</a>
//           </div>
//         </nav>
//         <div className="container mt-3">
//           <Switch>
//             <Route exact path={["/", "/tasks"]} component={TasksList} />
//             <Route exact path="/add" component={AddTask} />
//             <Route path="/tasks/:id" component={Task} />
//           </Switch>
//         </div>
//       </div>
      
//     );
//   }
// }

// export default App;