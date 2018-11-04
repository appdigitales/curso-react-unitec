import React, { Component } from 'react';
import Header from './Header';

class ListProjects extends Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container list">
          <section className="eight offset-by-two columns">
            <h4>Projects</h4>
          </section>
        </div>
      </div>
    );
  }
}

export default ListProjects;
