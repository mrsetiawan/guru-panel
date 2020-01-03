import React from 'react';
import Link from 'next/link';

const SideBar = () => {

    return(
    <aside className="main-sidebar sidebar-dark-primary elevation-4">
    <Link href="/">
      <a className="brand-link">
        <img src="/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3"/>
        <span className="brand-text font-weight-light">Guru Ahli</span>
      </a>
    </Link>
    <div className="sidebar">
     <nav className="mt-2">
        <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
         <li className="nav-item">
            <Link href="/course/form-entry" >
              <a className="nav-link">
                <i className="nav-icon fas fa-th"></i>
                <p>Course</p>
              </a>
            </Link>
          </li>
          <li className="nav-item">
          <Link href="/quiz/list">
            <a href="" className="nav-link">
              <i className="nav-icon fas fa-th"></i>
              <p>
                Quizzes
              </p>
            </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
    )

}

export default SideBar;
