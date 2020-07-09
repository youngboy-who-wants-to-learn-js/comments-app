import React from 'react';

const NavBar = () => {
    return (
        <nav className="uk-navbar uk-navbar-container" uk-navbar>
        <div className="uk-navbar-left">
          <ul className="uk-navbar-nav">
            <li>
              <a href="posts-grid.html">Posts</a>
            </li>
            <li>
              <a href="albums.html">Albums</a>
            </li>
          </ul>
        </div>
        <div className="uk-navbar-right">
          <div className="uk-navbar-item">
            <button
              className="uk-button"
              type="button"
              uk-icon="icon: heart; ratio: 2"
            />
            <div className="uk-width-large" uk-dropdown="mode: click">
              <div className="uk-dropdown-grid uk-child-width-1-1@m" uk-grid>
                <div>
                  <table className="uk-table uk-table-divider uk-table-justify">
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th className="uk-text-right">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Title 1</td>
                        <td className="uk-text-right">
                          <button
                            className="uk-button"
                            type="button"
                            uk-icon="icon: close;"
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>Title 2</td>
                        <td className="uk-text-right">
                          <button
                            className="uk-button"
                            type="button"
                            uk-icon="icon: close;"
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default NavBar;